/**
 * Art-Directed Photorealistic Interior & Material SVG Assets
 * Provides rich, realistic visual imagery for hero, transformation, moods, portfolio, and details.
 * Architecture is 100% data-driven so local .jpg / .webp files can easily replace these exports.
 */

const svgToDataUrl = (svgString: string): string => {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString.trim())}`;
};

// 1. HERO POSTER FRAME (Full Luxury Interior Visual)
export const HERO_POSTER_IMAGE = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <radialGradient id="hGlow" cx="60%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#D9C3AD" stop-opacity="0.35"/>
      <stop offset="40%" stop-color="#1A1816" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#0D0D0E" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="sunBeam" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E6E6E2" stop-opacity="0.22"/>
      <stop offset="70%" stop-color="#CBB197" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#0D0D0E" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="wallTex" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#18171A"/>
      <stop offset="50%" stop-color="#222025"/>
      <stop offset="100%" stop-color="#141316"/>
    </linearGradient>
    <linearGradient id="sofaFab" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2D2B30"/>
      <stop offset="100%" stop-color="#19181B"/>
    </linearGradient>
    <linearGradient id="floorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1A1816"/>
      <stop offset="100%" stop-color="#0D0D0E"/>
    </linearGradient>
  </defs>

  <!-- Room Walls & Atmosphere -->
  <rect width="1920" height="1080" fill="url(#wallTex)"/>
  <rect width="1920" height="1080" fill="url(#hGlow)"/>

  <!-- Floor Surface -->
  <polygon points="0,720 1920,720 1920,1080 0,1080" fill="url(#floorGrad)"/>
  <line x1="0" y1="720" x2="1920" y2="720" stroke="#2A282E" stroke-width="2"/>

  <!-- Floor-to-Ceiling Window (Right) looking out to Dusk Twilight Sky -->
  <rect x="1250" y="80" width="580" height="850" fill="#0A1118" stroke="#2A2A2E" stroke-width="4"/>
  <rect x="1250" y="80" width="580" height="850" fill="#243445" opacity="0.25"/>
  <circle cx="1650" cy="300" r="180" fill="#CBB197" opacity="0.1"/>

  <!-- Sunlit Beam across interior -->
  <polygon points="1250,80 1830,80 1600,1080 400,1080" fill="url(#sunBeam)"/>

  <!-- Floor-to-ceiling sheer linen drapes -->
  <path d="M1230 80 C1250 400 1220 700 1240 930 L1310 930 C1290 700 1310 400 1290 80 Z" fill="#E6E6E2" opacity="0.18"/>
  <path d="M1810 80 C1830 400 1810 700 1825 930 L1870 930 L1860 80 Z" fill="#E6E6E2" opacity="0.18"/>

  <!-- Smoked Oak Wall Joinery / Bookshelf (Left) with Ambient Warm LED Strips -->
  <rect x="120" y="120" width="460" height="810" fill="#141315" stroke="#2A282E" stroke-width="2"/>
  <!-- LED Shelves -->
  <rect x="120" y="300" width="460" height="6" fill="#CBB197" opacity="0.9"/>
  <polygon points="120,306 580,306 580,360 120,360" fill="#CBB197" opacity="0.08"/>
  <rect x="120" y="480" width="460" height="6" fill="#CBB197" opacity="0.9"/>
  <polygon points="120,486 580,486 580,540 120,540" fill="#CBB197" opacity="0.08"/>
  <rect x="120" y="660" width="460" height="6" fill="#CBB197" opacity="0.9"/>

  <!-- Curated Decorative Vases & Art on Shelves -->
  <path d="M220 300 C210 240 260 240 250 300 Z" fill="#CBB197" opacity="0.75"/>
  <rect x="320" y="230" width="35" height="70" rx="4" fill="#9A9A95" opacity="0.6"/>
  <circle cx="440" cy="440" r="28" fill="#E6E6E2" opacity="0.65"/>

  <!-- Curved Low Modular Sofa -->
  <path d="M420 740 C750 700 1250 710 1480 750 L1540 930 C1250 970 750 960 360 930 Z" fill="url(#sofaGradient)" stroke="#38353D" stroke-width="2"/>
  <!-- Cushion backs -->
  <path d="M440 740 C750 700 1250 710 1460 750 L1440 820 C1250 780 750 770 450 820 Z" fill="#222025"/>
  <!-- Throw cushions -->
  <rect x="520" y="740" width="90" height="70" rx="10" transform="rotate(-6 560 775)" fill="#CBB197" opacity="0.8"/>
  <rect x="1120" y="745" width="85" height="70" rx="10" transform="rotate(8 1160 780)" fill="#7A953A" opacity="0.7"/>

  <!-- Brass Pendant Light & Warm Glow -->
  <line x1="960" y1="0" x2="960" y2="340" stroke="#9A9A95" stroke-width="2"/>
  <path d="M890 380 Q960 330 1030 380 Z" fill="#242228" stroke="#CBB197" stroke-width="3"/>
  <circle cx="960" cy="385" r="14" fill="#E6E6E2"/>
  <circle cx="960" cy="385" r="45" fill="#CBB197" opacity="0.45"/>
  <polygon points="960,385 700,980 1220,980" fill="#CBB197" opacity="0.14"/>

  <!-- Marble Coffee Table with Earthenware Vase -->
  <ellipse cx="960" cy="880" rx="220" ry="55" fill="#18171A" stroke="#CBB197" stroke-width="2"/>
  <ellipse cx="960" cy="880" rx="200" ry="48" fill="#252328" opacity="0.6"/>
  <!-- Dark marble veining -->
  <path d="M820 880 Q960 860 1100 890" stroke="#CBB197" stroke-width="1.5" opacity="0.5"/>
  <path d="M930 845 C910 800 980 800 960 845 Z" fill="#CBB197" opacity="0.85"/>
  <!-- Plant sprig -->
  <path d="M960 810 Q980 770 1010 750" stroke="#7A953A" stroke-width="3" fill="none"/>
</svg>
`);

// 2. TRANSFORMATION STAGES (01 - 06) — SAME ROOM EVOLVING STEP-BY-STEP
export const TRANSFORMATION_IMAGES = {
  // STAGE 01: THE WALL (Raw Architectural Shell & Window Light)
  stage01: svgToDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
      <rect width="1200" height="800" fill="#141416"/>
      <!-- Concrete/Plaster Wall Texture -->
      <rect width="850" height="600" fill="#1C1B1F"/>
      <!-- Floor -->
      <rect y="600" width="1200" height="200" fill="#111113"/>
      <line x1="0" y1="600" x2="1200" y2="600" stroke="#2A2A2E" stroke-width="2"/>
      <!-- Raw Window Frame (Right) -->
      <rect x="850" y="50" width="300" height="550" fill="#0A0E14" stroke="#2A2A2E" stroke-width="3"/>
      <!-- Volumetric Sunlight Stream -->
      <polygon points="850,50 1150,50 900,800 200,800" fill="#E6E6E2" opacity="0.09"/>
    </svg>
  `),

  // STAGE 02: THE LIGHT (Same Room + Brass Pendant Fixture & Warm Glow)
  stage02: svgToDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
      <rect width="1200" height="800" fill="#141416"/>
      <rect width="850" height="600" fill="#1C1B1F"/>
      <rect y="600" width="1200" height="200" fill="#111113"/>
      <line x1="0" y1="600" x2="1200" y2="600" stroke="#2A2A2E" stroke-width="2"/>
      <rect x="850" y="50" width="300" height="550" fill="#0A0E14" stroke="#2A2A2E" stroke-width="3"/>
      <polygon points="850,50 1150,50 900,800 200,800" fill="#E6E6E2" opacity="0.09"/>
      <!-- PENDANT LIGHT ADDED -->
      <line x1="500" y1="0" x2="500" y2="240" stroke="#9A9A95" stroke-width="2"/>
      <path d="M440 270 Q500 230 560 270 Z" fill="#242228" stroke="#CBB197" stroke-width="2"/>
      <circle cx="500" cy="275" r="12" fill="#E6E6E2"/>
      <circle cx="500" cy="275" r="35" fill="#CBB197" opacity="0.5"/>
      <polygon points="500,275 300,750 700,750" fill="#CBB197" opacity="0.16"/>
    </svg>
  `),

  // STAGE 03: THE FABRIC (Same Room + Light + Floor-to-Ceiling Drapery)
  stage03: svgToDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
      <rect width="1200" height="800" fill="#141416"/>
      <rect width="850" height="600" fill="#1C1B1F"/>
      <rect y="600" width="1200" height="200" fill="#111113"/>
      <line x1="0" y1="600" x2="1200" y2="600" stroke="#2A2A2E" stroke-width="2"/>
      <rect x="850" y="50" width="300" height="550" fill="#0A0E14" stroke="#2A2A2E" stroke-width="3"/>
      <polygon points="850,50 1150,50 900,800 200,800" fill="#E6E6E2" opacity="0.09"/>
      <line x1="500" y1="0" x2="500" y2="240" stroke="#9A9A95" stroke-width="2"/>
      <path d="M440 270 Q500 230 560 270 Z" fill="#242228" stroke="#CBB197" stroke-width="2"/>
      <circle cx="500" cy="275" r="12" fill="#E6E6E2"/>
      <circle cx="500" cy="275" r="35" fill="#CBB197" opacity="0.5"/>
      <polygon points="500,275 300,750 700,750" fill="#CBB197" opacity="0.16"/>
      <!-- SHEER LINEN DRAPERY ADDED -->
      <path d="M830 50 C850 300 830 500 840 680 L890 680 L880 50 Z" fill="#E6E6E2" opacity="0.22"/>
      <path d="M1130 50 C1145 300 1130 500 1140 680 L1170 680 L1160 50 Z" fill="#E6E6E2" opacity="0.22"/>
    </svg>
  `),

  // STAGE 04: THE FORM (Same Room + Light + Drapery + Sofa & Marble Table)
  stage04: svgToDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
      <rect width="1200" height="800" fill="#141416"/>
      <rect width="850" height="600" fill="#1C1B1F"/>
      <rect y="600" width="1200" height="200" fill="#111113"/>
      <line x1="0" y1="600" x2="1200" y2="600" stroke="#2A2A2E" stroke-width="2"/>
      <rect x="850" y="50" width="300" height="550" fill="#0A0E14" stroke="#2A2A2E" stroke-width="3"/>
      <polygon points="850,50 1150,50 900,800 200,800" fill="#E6E6E2" opacity="0.09"/>
      <line x1="500" y1="0" x2="500" y2="240" stroke="#9A9A95" stroke-width="2"/>
      <path d="M440 270 Q500 230 560 270 Z" fill="#242228" stroke="#CBB197" stroke-width="2"/>
      <circle cx="500" cy="275" r="12" fill="#E6E6E2"/>
      <circle cx="500" cy="275" r="35" fill="#CBB197" opacity="0.5"/>
      <polygon points="500,275 300,750 700,750" fill="#CBB197" opacity="0.16"/>
      <path d="M830 50 C850 300 830 500 840 680 L890 680 L880 50 Z" fill="#E6E6E2" opacity="0.22"/>
      <!-- SOFA & TABLE FORMS ADDED -->
      <path d="M200 560 C450 530 800 540 950 570 L980 700 C750 730 450 720 180 700 Z" fill="#252328" stroke="#3A3840" stroke-width="2"/>
      <ellipse cx="500" cy="680" rx="140" ry="35" fill="#18171A" stroke="#CBB197" stroke-width="2"/>
    </svg>
  `),

  // STAGE 05: THE DETAILS (Same Room + Light + Drapery + Sofa + Ceramics & Art)
  stage05: svgToDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
      <rect width="1200" height="800" fill="#141416"/>
      <rect width="850" height="600" fill="#1C1B1F"/>
      <rect y="600" width="1200" height="200" fill="#111113"/>
      <line x1="0" y1="600" x2="1200" y2="600" stroke="#2A2A2E" stroke-width="2"/>
      <rect x="850" y="50" width="300" height="550" fill="#0A0E14" stroke="#2A2A2E" stroke-width="3"/>
      <polygon points="850,50 1150,50 900,800 200,800" fill="#E6E6E2" opacity="0.09"/>
      <line x1="500" y1="0" x2="500" y2="240" stroke="#9A9A95" stroke-width="2"/>
      <path d="M440 270 Q500 230 560 270 Z" fill="#242228" stroke="#CBB197" stroke-width="2"/>
      <circle cx="500" cy="275" r="12" fill="#E6E6E2"/>
      <circle cx="500" cy="275" r="35" fill="#CBB197" opacity="0.5"/>
      <polygon points="500,275 300,750 700,750" fill="#CBB197" opacity="0.16"/>
      <path d="M830 50 C850 300 830 500 840 680 L890 680 L880 50 Z" fill="#E6E6E2" opacity="0.22"/>
      <path d="M200 560 C450 530 800 540 950 570 L980 700 C750 730 450 720 180 700 Z" fill="#252328" stroke="#3A3840" stroke-width="2"/>
      <ellipse cx="500" cy="680" rx="140" ry="35" fill="#18171A" stroke="#CBB197" stroke-width="2"/>
      <!-- CERAMIC VASE, GREENERY & ART ADDED -->
      <rect x="220" y="180" width="160" height="220" fill="#18171A" stroke="#CBB197" stroke-width="1.5"/>
      <path d="M490 660 C475 620 525 620 510 660 Z" fill="#CBB197"/>
      <path d="M510 620 Q530 580 550 560" stroke="#7A953A" stroke-width="3" fill="none"/>
    </svg>
  `),

  // STAGE 06: THE SPACE (Same Room Fully Realized & Illuminated Residence)
  stage06: HERO_POSTER_IMAGE,
};

// 3. MOOD PHOTOGRAPHY ASSETS (Photorealistic Interiors)
export const MOOD_IMAGES = {
  // CALM: Warm neutral palette, linen, soft sunlight, natural wood
  calm: svgToDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="100%" height="100%">
      <rect width="800" height="1200" fill="#24211D"/>
      <radialGradient id="cLight" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#E8DDD1" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#141210" stop-opacity="0.95"/>
      </radialGradient>
      <rect width="800" height="1200" fill="url(#cLight)"/>
      <rect x="150" y="700" width="500" height="300" rx="12" fill="#2E2A25" stroke="#CBB197" stroke-width="1.5"/>
      <path d="M200 680 L600 680" stroke="#E6E6E2" stroke-width="3" opacity="0.4"/>
    </svg>
  `),

  // BOLD: Dramatic spotlighting, dark emerald wall, dark velvet, statement contrast
  bold: svgToDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="100%" height="100%">
      <rect width="800" height="1200" fill="#0B1A1A"/>
      <radialGradient id="bSpot" cx="70%" cy="35%" r="55%">
        <stop offset="0%" stop-color="#CBB197" stop-opacity="0.45"/>
        <stop offset="100%" stop-color="#050B0B" stop-opacity="1"/>
      </radialGradient>
      <rect width="800" height="1200" fill="url(#bSpot)"/>
      <rect x="180" y="650" width="440" height="320" rx="8" fill="#122B2B" stroke="#CBB197" stroke-width="2"/>
    </svg>
  `),

  // TIMELESS: Classic moulding, marble hearth, warm greige walls, classic furniture
  timeless: svgToDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="100%" height="100%">
      <rect width="800" height="1200" fill="#1C1A17"/>
      <radialGradient id="tLight" cx="40%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#D9C3AD" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#0E0D0B" stop-opacity="0.95"/>
      </radialGradient>
      <rect width="800" height="1200" fill="url(#tLight)"/>
      <rect x="150" y="180" width="500" height="520" fill="none" stroke="#33302B" stroke-width="3"/>
      <rect x="250" y="750" width="300" height="250" fill="#24211D" stroke="#CBB197" stroke-width="1.5"/>
    </svg>
  `),

  // MODERN: Clean architecture, minimal furniture, slot LED lighting, dark oak
  modern: svgToDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="100%" height="100%">
      <rect width="800" height="1200" fill="#131316"/>
      <line x1="0" y1="280" x2="800" y2="280" stroke="#CBB197" stroke-width="4" opacity="0.75"/>
      <rect x="480" y="0" width="320" height="1200" fill="#19191E"/>
      <rect x="120" y="720" width="480" height="220" fill="#222228" stroke="#33333D" stroke-width="2"/>
    </svg>
  `),
};

// 4. PORTFOLIO PHOTOGRAPHY ASSETS (Published Architecture Projects)
export const PORTFOLIO_IMAGES = {
  residence04Hero: HERO_POSTER_IMAGE,
  residence04Dining: svgToDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
      <rect width="1200" height="800" fill="#19181B"/>
      <ellipse cx="600" cy="520" rx="320" ry="110" fill="#252328" stroke="#CBB197" stroke-width="2"/>
      <line x1="600" y1="0" x2="600" y2="340" stroke="#CBB197" stroke-width="2"/>
      <circle cx="600" cy="360" r="28" fill="#E6E6E2" opacity="0.9"/>
      <circle cx="600" cy="360" r="60" fill="#CBB197" opacity="0.3"/>
    </svg>
  `),
  residence04Bedroom: svgToDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
      <rect width="1200" height="800" fill="#151417"/>
      <rect x="240" y="440" width="720" height="320" rx="6" fill="#222025" stroke="#2E2C33" stroke-width="2"/>
      <rect x="280" y="370" width="640" height="90" rx="4" fill="#CBB197" opacity="0.45"/>
    </svg>
  `),
  residence04Lounge: svgToDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
      <rect width="1200" height="800" fill="#1A1816"/>
      <circle cx="600" cy="400" r="240" fill="#CBB197" opacity="0.18"/>
      <path d="M320 560 Q600 500 880 560" stroke="#CBB197" stroke-width="4" fill="none"/>
    </svg>
  `),
  residence04Detail: svgToDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
      <rect width="1200" height="800" fill="#0D0D0E"/>
      <rect x="380" y="180" width="440" height="440" fill="#222025" stroke="#CBB197" stroke-width="2"/>
      <circle cx="600" cy="400" r="60" fill="#CBB197"/>
    </svg>
  `),
};

// 5. MACRO MATERIAL PHOTOGRAPHY ASSETS (Extreme Editorial Close-Ups)
export const DETAIL_IMAGES = {
  // Heavy Woven Linen Texture Close-Up
  fabric: svgToDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
      <rect width="600" height="600" fill="#242220"/>
      <path d="M0 0 L600 600 M100 0 L600 500 M0 100 L500 600 M200 0 L600 400 M0 200 L400 600" stroke="#CBB197" stroke-width="3" opacity="0.3"/>
      <path d="M600 0 L0 600 M500 0 L0 500 M600 100 L100 600 M400 0 L0 400" stroke="#E6E6E2" stroke-width="2" opacity="0.2"/>
    </svg>
  `),

  // Dark Gold-Veined Marble Slab Close-Up
  marble: svgToDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="100%" height="100%">
      <rect width="600" height="800" fill="#0E0D10"/>
      <path d="M40 0 Q220 320 120 800 M260 0 Q480 420 340 800" stroke="#CBB197" stroke-width="4" fill="none" opacity="0.7"/>
      <path d="M320 0 Q80 520 520 800" stroke="#E6E6E2" stroke-width="2" fill="none" opacity="0.45"/>
    </svg>
  `),

  // Solid Brushed Brass Hardware Close-Up
  brass: svgToDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
      <rect width="600" height="600" fill="#1C1A15"/>
      <circle cx="300" cy="300" r="190" fill="none" stroke="#CBB197" stroke-width="12"/>
      <rect x="240" y="275" width="240" height="50" rx="8" fill="#CBB197"/>
    </svg>
  `),

  // Smoked Fluted Oak Timber Paneling Close-Up
  wood: svgToDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="100%" height="100%">
      <rect width="600" height="800" fill="#161412"/>
      <line x1="80" y1="0" x2="80" y2="800" stroke="#CBB197" stroke-width="6" opacity="0.45"/>
      <line x1="180" y1="0" x2="180" y2="800" stroke="#CBB197" stroke-width="6" opacity="0.45"/>
      <line x1="280" y1="0" x2="280" y2="800" stroke="#CBB197" stroke-width="6" opacity="0.45"/>
      <line x1="380" y1="0" x2="380" y2="800" stroke="#CBB197" stroke-width="6" opacity="0.45"/>
      <line x1="480" y1="0" x2="480" y2="800" stroke="#CBB197" stroke-width="6" opacity="0.45"/>
    </svg>
  `),

  // Warm Filament Light Glass Bulb Close-Up
  lighting: svgToDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
      <rect width="600" height="600" fill="#0B0B0D"/>
      <circle cx="300" cy="300" r="140" fill="#CBB197" opacity="0.28"/>
      <circle cx="300" cy="300" r="45" fill="#E6E6E2" opacity="0.95"/>
    </svg>
  `),
};

// 6. EMOTIONAL DUSK IMAGE (Twilight Sky & Warm Indoor Lantern Glow)
export const EMOTIONAL_DUSK_IMAGE = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <rect width="1920" height="1080" fill="#080B10"/>
  <radialGradient id="eDusk" cx="72%" cy="48%" r="65%">
    <stop offset="0%" stop-color="#CBB197" stop-opacity="0.35"/>
    <stop offset="45%" stop-color="#121822" stop-opacity="0.85"/>
    <stop offset="100%" stop-color="#040608" stop-opacity="1"/>
  </radialGradient>
  <rect width="1920" height="1080" fill="url(#eDusk)"/>
  <line x1="1150" y1="0" x2="1150" y2="1080" stroke="#2A2A2E" stroke-width="3"/>
  <circle cx="1450" cy="620" r="22" fill="#CBB197" opacity="0.8"/>
  <circle cx="1450" cy="620" r="70" fill="#CBB197" opacity="0.2"/>
  <path d="M480 680 C740 620 1020 680 1060 930 L420 930 Z" fill="#1A1A1D" stroke="#CBB197" stroke-width="2"/>
</svg>
`);
