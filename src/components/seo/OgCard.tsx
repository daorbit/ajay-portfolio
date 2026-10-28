import { OG_COLORS } from "@/constants/og";
import { SITE_URL } from "@/constants/site";
import { AVAILABILITY, PROFILE, STACK } from "@/data/profile";

export default function OgCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: OG_COLORS.canvas,
        color: OG_COLORS.label,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: 24,
          borderBottom: `1px solid ${OG_COLORS.hairline}`,
          fontSize: 22,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: OG_COLORS.muted,
        }}
      >
        <span>{PROFILE.role}</span>
        <span style={{ display: "flex", alignItems: "center", gap: 12, color: OG_COLORS.label }}>
          <span style={{ width: 12, height: 12, borderRadius: 999, background: OG_COLORS.accent }} />
          {AVAILABILITY}
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 132, fontWeight: 800, lineHeight: 0.95, letterSpacing: -4, textTransform: "uppercase" }}>
          {PROFILE.name}
        </span>
        <span style={{ marginTop: 28, fontSize: 40, fontStyle: "italic", color: OG_COLORS.earth }}>
          Building interfaces with intent &amp; craft.
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: 24,
          borderTop: `1px solid ${OG_COLORS.hairline}`,
          fontSize: 22,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: OG_COLORS.muted,
        }}
      >
        <span>{STACK.join("  ·  ")}</span>
        <span style={{ color: OG_COLORS.accent }}>{new URL(SITE_URL).host}</span>
      </div>
    </div>
  );
}
