// Logo SVG components for Felipe de Bortoli Munhoz
// Reconstructed from the original raster logo so it prints crisp at any size.

const FBM_NAVY = "#152D52";
const FBM_GOLD = "#BC9D6E";
const FBM_GOLD_SOFT = "#D4BC95";

// The pillar/column motif. width/height refer to the bounding box.
function FBMPillar({ width = 120, height = 220, color = FBM_GOLD, strokeWidth = 0 }) {
  // Designed on a 120 × 220 coordinate system, scaled by viewBox.
  return (
    <svg width={width} height={height} viewBox="0 0 120 220" fill={color} aria-hidden="true">
      {/* Top abacus (widest cap) */}
      <rect x="6"  y="0"   width="108" height="9" />
      {/* Top step */}
      <rect x="14" y="9"   width="92"  height="6" />
      {/* Capital echinus */}
      <rect x="22" y="15"  width="76"  height="5" />
      {/* Capital neck */}
      <rect x="28" y="20"  width="64"  height="4" />
      {/* Shaft top fillet */}
      <rect x="24" y="24"  width="72"  height="6" />
      {/* Shaft */}
      <rect x="30" y="30"  width="60"  height="160" />
      {/* Fluting lines on shaft (in background color = cream) */}
      <g fill="var(--paper, #F5F0E6)">
        <rect x="37" y="34" width="2" height="152" />
        <rect x="46" y="34" width="2" height="152" />
        <rect x="55" y="34" width="2" height="152" />
        <rect x="64" y="34" width="2" height="152" />
        <rect x="73" y="34" width="2" height="152" />
        <rect x="82" y="34" width="2" height="152" />
      </g>
      {/* Shaft bottom fillet */}
      <rect x="24" y="190" width="72" height="6" />
      {/* Base neck */}
      <rect x="28" y="196" width="64" height="4" />
      {/* Base echinus */}
      <rect x="22" y="200" width="76" height="5" />
      {/* Base step */}
      <rect x="14" y="205" width="92" height="6" />
      {/* Bottom plinth */}
      <rect x="6"  y="211" width="108" height="9" />
    </svg>
  );
}

// Full lockup: pillar + FBM + name + OAB
function FBMLogo({ width = 360, showName = true, showOab = true, paperColor = "#F5F0E6" }) {
  // Aspect ratio: ~1.55 (width/height) when showing name & OAB
  // viewBox 360 × 240 keeps the proportions of the original.
  const h = showName ? width / 1.5 : width / 2.6;
  return (
    <svg
      width={width}
      height={h}
      viewBox={showName ? "0 0 360 240" : "0 0 360 140"}
      style={{ "--paper": paperColor, display: "block", margin: "0 auto" }}
      aria-label="Felipe de Bortoli Munhoz — FBM"
    >
      {/* Pillar — sits centered behind FBM */}
      <g transform="translate(120, 0)">
        {/* draw pillar at smaller size, centered */}
        <g transform="scale(1)">
          <PillarInner paperColor={paperColor} />
        </g>
      </g>

      {/* FBM letters in front of pillar — serif, navy */}
      <text
        x="180"
        y="92"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', 'EB Garamond', Garamond, serif"
        fontSize="74"
        fontWeight="500"
        fill={FBM_NAVY}
        letterSpacing="2"
      >
        FBM
      </text>

      {showName && (
        <text
          x="180"
          y="180"
          textAnchor="middle"
          fontFamily="'Cinzel', 'Trajan Pro', 'Cormorant Garamond', serif"
          fontSize="18.5"
          fontWeight="600"
          fill={FBM_NAVY}
          letterSpacing="2"
        >
          FELIPE DE BORTOLI MUNHOZ
        </text>
      )}
      {showName && showOab && (
        <text
          x="180"
          y="205"
          textAnchor="middle"
          fontFamily="'Cinzel', 'Cormorant Garamond', serif"
          fontSize="11"
          fontWeight="500"
          fill={FBM_GOLD}
          letterSpacing="3.5"
        >
          OAB/ES 27.026
        </text>
      )}
    </svg>
  );
}

// Just the pillar shape, drawn at 120 wide × 140 tall, positioned so FBM crosses it
function PillarInner({ paperColor = "#F5F0E6", color = FBM_GOLD }) {
  return (
    <g fill={color}>
      {/* Top */}
      <rect x="0"  y="20" width="120" height="9" />
      <rect x="8"  y="29" width="104" height="6" />
      <rect x="16" y="35" width="88"  height="5" />
      <rect x="22" y="40" width="76"  height="4" />
      <rect x="18" y="44" width="84"  height="6" />
      {/* Shaft */}
      <rect x="24" y="50" width="72"  height="76" />
      <g fill={paperColor}>
        <rect x="30" y="54" width="2.5" height="68" />
        <rect x="40" y="54" width="2.5" height="68" />
        <rect x="50" y="54" width="2.5" height="68" />
        <rect x="60" y="54" width="2.5" height="68" />
        <rect x="70" y="54" width="2.5" height="68" />
        <rect x="80" y="54" width="2.5" height="68" />
        <rect x="87.5" y="54" width="2.5" height="68" />
      </g>
      {/* Bottom (mirror of top) */}
      <rect x="18" y="126" width="84" height="6" />
      <rect x="22" y="132" width="76" height="4" />
      <rect x="16" y="136" width="88" height="5" />
      <rect x="8"  y="141" width="104" height="6" />
      <rect x="0"  y="147" width="120" height="9" />
    </g>
  );
}

// Watermark variant — just the pillar, very light, for backgrounds
function FBMWatermark({ size = 480, opacity = 0.06, color = FBM_NAVY }) {
  return (
    <svg
      width={size}
      height={size * (220 / 120)}
      viewBox="0 0 120 220"
      style={{ opacity, display: "block" }}
      aria-hidden="true"
    >
      <g fill={color}>
        {/* Top */}
        <rect x="6"  y="0"   width="108" height="9" />
        <rect x="14" y="9"   width="92"  height="6" />
        <rect x="22" y="15"  width="76"  height="5" />
        <rect x="28" y="20"  width="64"  height="4" />
        <rect x="24" y="24"  width="72"  height="6" />
        {/* Shaft */}
        <rect x="30" y="30" width="60" height="160" />
        {/* Bottom */}
        <rect x="24" y="190" width="72" height="6" />
        <rect x="28" y="196" width="64" height="4" />
        <rect x="22" y="200" width="76" height="5" />
        <rect x="14" y="205" width="92" height="6" />
        <rect x="6"  y="211" width="108" height="9" />
      </g>
      {/* Cut-out fluting using paper color to break up the silhouette */}
      <g fill="transparent" stroke={color} strokeWidth="0.5" opacity="0.5">
        <line x1="38" y1="34" x2="38" y2="186" />
        <line x1="46" y1="34" x2="46" y2="186" />
        <line x1="54" y1="34" x2="54" y2="186" />
        <line x1="62" y1="34" x2="62" y2="186" />
        <line x1="70" y1="34" x2="70" y2="186" />
        <line x1="78" y1="34" x2="78" y2="186" />
        <line x1="86" y1="34" x2="86" y2="186" />
      </g>
    </svg>
  );
}

// Compact horizontal lockup: pillar mark on the left, name + OAB stacked to the right
function FBMHorizontal({ height = 80 }) {
  // viewBox 380 × 100
  return (
    <svg
      width={height * 3.8}
      height={height}
      viewBox="0 0 380 100"
      style={{ display: "block" }}
      aria-label="Felipe de Bortoli Munhoz"
    >
      {/* Mini pillar mark on the left */}
      <g transform="translate(0, 10) scale(0.36)">
        <PillarInner paperColor="#F5F0E6" />
      </g>
      {/* Vertical rule */}
      <line x1="68" y1="20" x2="68" y2="80" stroke={FBM_GOLD} strokeWidth="0.8" />
      {/* Name */}
      <text
        x="80"
        y="48"
        fontFamily="'Cinzel', 'Cormorant Garamond', serif"
        fontSize="16"
        fontWeight="600"
        fill={FBM_NAVY}
        letterSpacing="2.2"
      >
        FELIPE DE BORTOLI MUNHOZ
      </text>
      <text
        x="80"
        y="72"
        fontFamily="'Cinzel', serif"
        fontSize="10.5"
        fontWeight="500"
        fill={FBM_GOLD}
        letterSpacing="3.5"
      >
        ADVOGADO  ·  OAB/ES 27.026
      </text>
    </svg>
  );
}

Object.assign(window, { FBMPillar, FBMLogo, FBMWatermark, FBMHorizontal, FBM_NAVY, FBM_GOLD, FBM_GOLD_SOFT });
