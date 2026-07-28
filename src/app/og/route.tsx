import { ImageResponse } from "next/og";
import { BUSINESS } from "@/lib/constants";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#F7FAF7",
          backgroundImage: "linear-gradient(135deg, #EBF3EB 0%, #F7FAF7 50%, #E3EFE3 100%)",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#2D5A27",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            🌿
          </div>
          <span style={{ fontSize: "28px", fontWeight: "bold", color: "#2D5A27" }}>
            {BUSINESS.name}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <h1
            style={{
              fontSize: "52px",
              fontWeight: "900",
              color: "#1E291E",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Nature-Based Early Learning &amp; Play-Led Preschool
          </h1>
          <p style={{ fontSize: "24px", color: "#4A5D4E", margin: 0 }}>
            Model Town, Lahore • Built-In Kids Gym &amp; Extended Daycare
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "24px",
            borderTop: "2px solid #D8E4D8",
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: "bold", color: "#2D5A27" }}>
            ⭐ 4.5/5 Rating across 35 Google Reviews
          </span>
          <span style={{ fontSize: "20px", fontWeight: "bold", color: "#4A5D4E" }}>
            Call: {BUSINESS.phoneDisplay}
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
