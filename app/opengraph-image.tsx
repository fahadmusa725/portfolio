import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const alt = "Fahad Musa | Software Engineer";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0A293D",
          color: "#E8ECEF",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              backgroundColor: "#1D4560",
              border: "1px solid #8CC4EA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#EAF0F4",
              fontWeight: 700,
              fontSize: 24,
            }}
          >
            FM
          </div>
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#8CC4EA",
              fontWeight: 600,
            }}
          >
            fahadmusa-dev.vercel.app
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: 96,
              height: 4,
              backgroundColor: "#8CC4EA",
              borderRadius: 2,
            }}
          />
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#EAF0F4",
              lineHeight: 1.1,
            }}
          >
            Fahad Musa
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#8E9BA6",
              letterSpacing: "-0.01em",
            }}
          >
            Software Engineer · Karachi
          </div>
        </div>

        <div
          style={{
            fontSize: 24,
            color: "#EAF0F4",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Multi-tenant MERN platforms, real-time systems, and production web applications.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
