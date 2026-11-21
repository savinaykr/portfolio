---
title: "Self-Hosting LLM Inference with vLLM (and When Not To)"
date: "2026-04-13"
updated: "2026-11-21"
excerpt: "Self-hosted inference can cut cost and latency at volume, but it is real infrastructure. This guide considers deployment choices and when a hosted model may be more suitable."
slug: "self-hosting-llm-inference-vllm"
---

The default for shipping an LLM feature is a hosted API, and that is usually correct. But once a workload becomes high volume, latency-sensitive, or privacy-bound, the per-token bill and the rate limits start to hurt. That is when self-hosting earns its place. A system can combine hosted models such as Gemini with self-hosted **vLLM**, routing workloads according to capability, demand, and operating cost.

This post outlines an illustrative deployment approach and the tradeoffs to consider. It does not describe a specific employer deployment.

## Why vLLM specifically

A naive model server processes one request at a time and wastes most of the GPU. vLLM's two ideas fix that:

- **Continuous batching**: instead of waiting for a fixed batch, it admits and retires requests token by token, so the GPU stays busy even with requests of wildly different lengths.
- **PagedAttention**: it manages the KV cache in pages like virtual memory, which kills the memory fragmentation that otherwise forces you to over-provision.

The practical result is far higher throughput per GPU than a hand-rolled server, with an OpenAI-compatible endpoint so the application code barely changes.

This illustrative command shows configuration concerns; model availability, quantization compatibility, and flags should be checked against the installed version:

```bash
vllm serve meta-llama/Llama-3.1-8B-Instruct \
  --gpu-memory-utilization 0.90 \
  --max-model-len 8192 \
  --tensor-parallel-size 1 \
  --quantization awq
```

## The memory math you cannot skip

A GPU's memory holds three things: the model weights, the KV cache for in-flight requests, and activation overhead. Weights are fixed by the model and the quantization. Whatever is left becomes KV cache, and the KV cache is what determines how many concurrent requests and how long a context you can serve.

This is why `--gpu-memory-utilization` and `--max-model-len` are the two knobs that matter most. Push utilization too high and you get out-of-memory crashes under load; set it too low and you waste the card. Quantization (AWQ or GPTQ) shrinks the weights so more room is left for cache, usually at a quality cost small enough to be invisible for routine tasks.

## Running it on Kubernetes

One possible architecture places vLLM in a GPU-backed Kubernetes deployment, such as on GKE. Operational considerations include:

- **Autoscaling** on a custom metric (queue depth or tokens per second), not raw CPU, because GPU saturation does not look like CPU saturation.
- **Warm pools**, because a cold GPU pod pulling a multi-gigabyte model is a slow scale-up. Keeping a minimum warm replica hides that from users.
- **Observability**: time-to-first-token and inter-token latency, not just request duration, surfaced in Grafana. Those two numbers are what users actually feel.
- **A hosted fallback**: if the self-hosted pool is saturated or degraded, the gateway fails over to a hosted model. Reliability beats purity.

## When hosted still wins

Self-hosting is infrastructure, and infrastructure has a carrying cost. Hosted models may be more suitable in these situations:

- **Low or spiky volume:** A GPU sitting idle is pure cost; pay per token instead.
- **Frontier quality needed:** The best closed models still lead on hard reasoning.
- **Multimodal or huge context:** Hosted providers ship these faster than you can self-host them.
- **Tiny team, early product:** Your time is better spent on the product than on GPU ops.

The honest test is total cost of ownership, GPU and on-call and engineering time included, not just the headline price per million tokens. Self-host the predictable, high-volume core where the math clearly wins, and route everything else to a hosted model. The gateway in front makes that routing a config change, not a rewrite.
