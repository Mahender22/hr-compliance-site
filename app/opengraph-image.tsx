import { ImageResponse } from "next/og";

export const alt = "HR Compliance MCP — query US employment law by state";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f7f3ee",
          color: "#1a1a1a",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          fontFamily: '"Inter", system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "26px",
            color: "#8a8378",
            letterSpacing: "-0.01em",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#cc785c",
            }}
          />
          hr-compliance
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            marginTop: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "92px",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              color: "#1a1a1a",
            }}
          >
            Query US employment law by state.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "34px",
              color: "#3a3a3a",
              marginTop: "28px",
              letterSpacing: "-0.01em",
            }}
          >
            Open source MCP server. 19 tools, 9 states, MIT.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "22px",
            color: "#8a8378",
          }}
        >
          <span style={{ display: "flex" }}>github.com/Mahender22/hr-compliance-mcp</span>
          <span
            style={{
              display: "flex",
              padding: "8px 16px",
              borderRadius: "999px",
              border: "1px solid #cc785c",
              color: "#cc785c",
              fontSize: "20px",
            }}
          >
            New: Maine LD 54
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
