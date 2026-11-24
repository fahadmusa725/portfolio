import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 84,
          background: "#0A293D",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#EAF0F4",
          fontWeight: 700,
          borderRadius: 36,
          letterSpacing: "-0.05em",
        }}
      >
        FM
      </div>
    ),
    {
      ...size,
    }
  );
}
