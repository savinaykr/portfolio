import { ImageResponse } from "next/og";
import { siteData } from "@/lib/siteData";
export const alt =
  "Savinay Kumar — Senior AI Engineer, Applied AI and Agentic Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#0a0a0c",
        padding: "80px",
        color: "#fafafa",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          width: 72,
          height: 6,
          background: "#fff04a",
          marginBottom: 32,
        }}
      />
      <div style={{ display: "flex", fontSize: 70, fontWeight: 700 }}>
        {siteData.name}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 34,
          color: "#fff04a",
          marginTop: 20,
        }}
      >
        {siteData.role}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 26,
          color: "#d1d5db",
          marginTop: 12,
        }}
      >
        at {siteData.worksFor.name}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 25,
          color: "#d1d5db",
          marginTop: 44,
        }}
      >
        Applied AI · Agentic systems · RAG · Distributed systems
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 23,
          color: "#9ca3af",
          marginTop: 44,
        }}
      >
        codesark.me
      </div>
    </div>,
    size,
  );
}
