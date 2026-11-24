import Section from "@/components/shared/Section";

export default function Skills() {
  return (
    <Section id="skills" title="Technologies">
      <dl className="max-w-3xl divide-y divide-foreground/10 border-y border-foreground/10">
        {[
          ["Applied AI", "GPT, Claude, Gemini, RAG, MCP"],
          ["Model integration", "Portkey, Amazon Bedrock, LiteLLM, vLLM, Ollama"],
          ["Backend & data", "Python, Go, TypeScript, Kafka, PostgreSQL, Redis"],
          ["Infrastructure", "AWS, Google Cloud, Kubernetes, Docker, Terraform"],
        ].map(([label, values]) => (
          <div key={label} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr]">
            <dt className="font-medium">{label}</dt><dd className="text-gray-300">{values}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
