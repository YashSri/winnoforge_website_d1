const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "../public/course-illustrations");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SVG GENERATOR TEMPLATES
// Clean 2D editorial vector graphics with near-black linework,
// FORGE blue (#1683E8), deep navy (#102A43), coral (#FF6B4A),
// amber (#F59E0B), mint (#10B981), and soft fills (#EAF3FF).
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const illustrations = {
  // ── 1. Hero Illustration ──
  "hero-illustration.svg": `<svg viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Stepped Geometric Pedestals -->
  <rect x="250" y="145" width="85" height="100" rx="8" fill="#102A43" />
  <rect x="235" y="175" width="45" height="70" rx="6" fill="#1683E8" />
  <rect x="315" y="195" width="40" height="50" rx="6" fill="#EAF3FF" stroke="#1683E8" stroke-width="1.5" />
  
  <!-- "From Curiosity to Capability" Script -->
  <path d="M 170 120 Q 210 100 240 108" stroke="#1683E8" stroke-width="1.5" stroke-dasharray="3 3" fill="none" />
  <polygon points="243,109 235,104 237,112" fill="#1683E8" />
  <text x="145" y="98" font-family="sans-serif" font-style="italic" font-size="11" font-weight="600" fill="#102A43">From</text>
  <text x="140" y="112" font-family="sans-serif" font-style="italic" font-size="11" font-weight="600" fill="#1683E8">Curiosity</text>
  <text x="155" y="125" font-family="sans-serif" font-style="italic" font-size="10" font-weight="500" fill="#5F6672">to</text>
  <text x="145" y="138" font-family="sans-serif" font-style="italic" font-size="11" font-weight="700" fill="#102A43">Capability</text>

  <!-- Editorial Corner Typography: LEARN BUILD EXPERIENCE GROW -->
  <text x="350" y="28" font-family="sans-serif" font-size="8.5" font-weight="700" letter-spacing="0.16em" fill="#8898AA">LEARN</text>
  <text x="350" y="42" font-family="sans-serif" font-size="8.5" font-weight="700" letter-spacing="0.16em" fill="#8898AA">BUILD</text>
  <text x="350" y="56" font-family="sans-serif" font-size="8.5" font-weight="700" letter-spacing="0.16em" fill="#1683E8">EXPERIENCE</text>
  <text x="350" y="70" font-family="sans-serif" font-size="8.5" font-weight="700" letter-spacing="0.16em" fill="#8898AA">GROW</text>

  <!-- Vertical Pillar Badge on the block: IDEAS PEOPLE OPPORTUNITIES IMPACT -->
  <g transform="translate(292, 160)">
    <rect width="66" height="52" rx="6" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
    <text x="6" y="14" font-family="sans-serif" font-size="7" font-weight="700" letter-spacing="0.14em" fill="#64748B">IDEAS</text>
    <text x="6" y="24" font-family="sans-serif" font-size="7" font-weight="700" letter-spacing="0.14em" fill="#64748B">PEOPLE</text>
    <text x="6" y="34" font-family="sans-serif" font-size="7" font-weight="700" letter-spacing="0.14em" fill="#1683E8">OPPORTUNITIES</text>
    <text x="6" y="44" font-family="sans-serif" font-size="7" font-weight="700" letter-spacing="0.14em" fill="#102A43">IMPACT</text>
    <circle cx="56" cy="12" r="5" fill="#1683E8" />
    <path d="M54 14 L58 10 M55 10 L58 10 L58 13" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
  </g>

  <!-- Builder Character sitting on pedestal -->
  <!-- Legs -->
  <path d="M 270 145 L 265 178 L 245 180" stroke="#111111" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  <path d="M 276 145 L 273 182 L 288 185" stroke="#111111" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  <!-- Pants fill -->
  <path d="M 268 143 Q 262 165 264 178 L 274 178 Q 278 160 279 143 Z" fill="#102A43" />
  
  <!-- Torso & Blue Hoodie -->
  <path d="M 266 98 C 260 108 258 126 268 145 L 285 145 C 290 125 288 106 280 98 Z" fill="#1683E8" />
  <path d="M 268 98 C 263 106 260 126 268 145 L 285 145 C 289 126 287 106 280 98" stroke="#111111" stroke-width="2" stroke-linecap="round" fill="none" />
  
  <!-- Arms & Hands on Laptop -->
  <path d="M 275 108 L 252 124 L 235 125" stroke="#111111" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  <circle cx="233" cy="125" r="2.5" fill="#FCD34D" stroke="#111111" stroke-width="1" />
  
  <!-- Laptop on Lap -->
  <path d="M 224 126 L 246 126 L 242 130 L 220 130 Z" fill="#64748B" stroke="#111111" stroke-width="1.2" />
  <path d="M 226 125 L 218 106 L 236 106 L 244 125 Z" fill="#102A43" stroke="#111111" stroke-width="1.5" />
  <rect x="221" y="109" width="12" height="13" rx="1" fill="#38BDF8" opacity="0.8" />

  <!-- Head & Hair -->
  <ellipse cx="282" cy="74" rx="7" ry="9" fill="#FCD34D" stroke="#111111" stroke-width="1.8" />
  <!-- Hair: Clean modern silhouette -->
  <path d="M 276 72 C 275 64 282 60 289 62 C 293 64 294 70 292 73 C 288 71 283 71 278 75 Z" fill="#111111" />
  <!-- Face features minimal -->
  <circle cx="279" cy="74" r="1" fill="#111111" />
  <path d="M 277 78 Q 280 80 283 79" stroke="#111111" stroke-width="1" stroke-linecap="round" fill="none" />
  
  <!-- Floating decorative sparks / accents -->
  <path d="M 205 75 L 211 75 M 208 72 L 208 78" stroke="#1683E8" stroke-width="1.5" stroke-linecap="round" />
  <circle cx="310" cy="100" r="2.5" fill="#1683E8" />
  <circle cx="190" cy="165" r="3" fill="#38BDF8" opacity="0.6" />
</svg>`,

  // ── 2. Generative AI & LLM Engineering (1 Year) ──
  "1y-genai.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- AI Screen Board -->
  <rect x="68" y="24" width="76" height="68" rx="8" fill="#FFFFFF" stroke="#102A43" stroke-width="1.8" />
  <rect x="74" y="30" width="64" height="16" rx="4" fill="#EAF3FF" />
  <text x="82" y="42" font-family="sans-serif" font-size="10" font-weight="800" fill="#1683E8">AI</text>
  <circle cx="126" cy="38" r="3" fill="#10B981" />
  <!-- Neural node network inside screen -->
  <circle cx="86" cy="62" r="4.5" fill="#1683E8" />
  <circle cx="112" cy="54" r="5" fill="#FF6B4A" />
  <circle cx="128" cy="68" r="4.5" fill="#102A43" />
  <circle cx="102" cy="76" r="4" fill="#38BDF8" />
  <line x1="86" y1="62" x2="112" y2="54" stroke="#102A43" stroke-width="1.4" stroke-dasharray="2 2" />
  <line x1="112" y1="54" x2="128" y2="68" stroke="#102A43" stroke-width="1.4" />
  <line x1="86" y1="62" x2="102" y2="76" stroke="#102A43" stroke-width="1.4" />
  <line x1="102" y1="76" x2="128" y2="68" stroke="#102A43" stroke-width="1.4" stroke-dasharray="2 2" />

  <!-- Builder Character interacting with screen -->
  <ellipse cx="36" cy="52" rx="9" ry="11" fill="#FCD34D" stroke="#102A43" stroke-width="1.8" />
  <path d="M 28 50 C 27 40 37 36 45 40 C 48 43 47 50 45 52 C 40 50 34 50 28 54 Z" fill="#102A43" />
  <path d="M 24 78 C 22 66 26 62 38 62 C 48 62 52 66 50 78 Z" fill="#1683E8" stroke="#102A43" stroke-width="1.8" />
  <!-- Arm pointing to screen -->
  <path d="M 46 68 L 68 58" stroke="#102A43" stroke-width="2.2" stroke-linecap="round" />
  <circle cx="70" cy="57" r="3" fill="#FCD34D" stroke="#102A43" stroke-width="1.2" />

  <!-- Floating Sparkles -->
  <path d="M 58 26 L 62 26 M 60 23 L 60 29" stroke="#F59E0B" stroke-width="1.5" stroke-linecap="round" />
  <circle cx="20" cy="36" r="2.5" fill="#1683E8" />
</svg>`,

  // ── 3. Full Stack Web Development (1 Year) ──
  "1y-fullstack.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- Code Browser Window -->
  <rect x="52" y="22" width="94" height="72" rx="8" fill="#FFFFFF" stroke="#102A43" stroke-width="1.8" />
  <rect x="52" y="22" width="94" height="15" rx="8" fill="#E2E8F0" />
  <circle cx="60" cy="30" r="2.5" fill="#FF6B4A" />
  <circle cx="67" cy="30" r="2.5" fill="#F59E0B" />
  <circle cx="74" cy="30" r="2.5" fill="#10B981" />
  <!-- Orange Code Badge </ > -->
  <rect x="116" y="28" width="24" height="16" rx="4" fill="#FF6B4A" />
  <text x="120" y="40" font-family="monospace" font-size="9" font-weight="700" fill="#FFFFFF">&lt;/&gt;</text>
  <!-- Window interior layout wireframes -->
  <rect x="60" y="44" width="46" height="6" rx="2" fill="#38BDF8" opacity="0.8" />
  <rect x="60" y="54" width="34" height="4" rx="2" fill="#94A3B8" />
  <rect x="60" y="62" width="40" height="4" rx="2" fill="#CBD5E1" />
  <rect x="60" y="72" width="22" height="12" rx="3" fill="#EAF3FF" stroke="#1683E8" stroke-width="1.2" />
  <rect x="86" y="72" width="22" height="12" rx="3" fill="#EAF3FF" stroke="#1683E8" stroke-width="1.2" />

  <!-- Developer at laptop -->
  <ellipse cx="32" cy="50" rx="9" ry="11" fill="#FCD34D" stroke="#102A43" stroke-width="1.8" />
  <path d="M 24 48 C 22 38 34 35 41 38 C 45 42 42 50 41 52 C 36 49 30 49 24 53 Z" fill="#102A43" />
  <path d="M 20 76 C 18 64 22 62 34 62 C 44 62 48 64 46 76 Z" fill="#102A43" stroke="#102A43" stroke-width="1.8" />
  <!-- Laptop base & screen -->
  <path d="M 32 76 L 46 76" stroke="#102A43" stroke-width="2" stroke-linecap="round" />
  <path d="M 42 76 L 46 64 L 56 64 L 52 76 Z" fill="#1683E8" stroke="#102A43" stroke-width="1.4" />
</svg>`,

  // ── 4. Data Science & Machine Learning (1 Year) ──
  "1y-datascience.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- Data Chart Board -->
  <rect x="58" y="24" width="88" height="70" rx="8" fill="#FFFFFF" stroke="#102A43" stroke-width="1.8" />
  <!-- Rising Bar Chart -->
  <rect x="68" y="58" width="10" height="26" rx="2" fill="#EAF3FF" stroke="#1683E8" stroke-width="1.2" />
  <rect x="82" y="46" width="10" height="38" rx="2" fill="#38BDF8" stroke="#1683E8" stroke-width="1.2" />
  <rect x="96" y="36" width="10" height="48" rx="2" fill="#1683E8" />
  <!-- Line chart overlay -->
  <path d="M 68 54 Q 85 44 115 32 Q 130 28 138 26" stroke="#FF6B4A" stroke-width="2" stroke-linecap="round" fill="none" />
  <circle cx="115" cy="32" r="3" fill="#FF6B4A" />
  <circle cx="138" cy="26" r="3" fill="#10B981" />

  <!-- Data Scientist Inspecting -->
  <ellipse cx="32" cy="52" rx="9" ry="11" fill="#FCD34D" stroke="#102A43" stroke-width="1.8" />
  <path d="M 24 50 C 23 40 33 37 41 40 C 44 43 43 50 42 52 C 37 50 31 50 24 54 Z" fill="#102A43" />
  <path d="M 22 78 C 20 66 24 63 35 63 C 45 63 48 66 46 78 Z" fill="#1683E8" stroke="#102A43" stroke-width="1.8" />
  <!-- Arm holding stylus -->
  <path d="M 42 68 L 62 58" stroke="#102A43" stroke-width="2" stroke-linecap="round" />
  <circle cx="63" cy="57" r="2.5" fill="#FCD34D" />
</svg>`,

  // ── 5. Data Analytics & Business Intelligence (1 Year) ──
  "1y-dataanalytics.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- Analytics Dashboard Board -->
  <rect x="56" y="22" width="90" height="72" rx="8" fill="#FFFFFF" stroke="#102A43" stroke-width="1.8" />
  <!-- Pie Chart with clean sectors -->
  <circle cx="118" cy="46" r="16" fill="#1683E8" />
  <path d="M 118 46 L 118 30 A 16 16 0 0 1 134 46 Z" fill="#FF6B4A" />
  <path d="M 118 46 L 134 46 A 16 16 0 0 1 126 60 Z" fill="#F59E0B" />
  <circle cx="118" cy="46" r="7" fill="#FFFFFF" />
  <!-- Multi-bar report -->
  <rect x="68" y="60" width="8" height="24" rx="2" fill="#1683E8" />
  <rect x="80" y="48" width="8" height="36" rx="2" fill="#38BDF8" />
  <rect x="92" y="38" width="8" height="46" rx="2" fill="#102A43" />
  <line x1="64" y1="84" x2="138" y2="84" stroke="#CBD5E1" stroke-width="1.2" />

  <!-- Analyst Character with clipboard -->
  <ellipse cx="30" cy="50" rx="9" ry="11" fill="#FCD34D" stroke="#102A43" stroke-width="1.8" />
  <path d="M 22 48 C 20 38 32 35 39 38 C 43 42 41 50 40 52 C 34 49 28 49 22 53 Z" fill="#102A43" />
  <path d="M 18 78 C 16 66 20 62 32 62 C 42 62 46 64 44 78 Z" fill="#102A43" stroke="#102A43" stroke-width="1.8" />
  <path d="M 36 68 L 52 64" stroke="#102A43" stroke-width="2" stroke-linecap="round" />
</svg>`,

  // ── 6. Cloud Computing & DevOps Architecture (1 Year) ──
  "1y-cloud.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- Prominent Cloud SVG shape -->
  <path d="M 80 44 C 80 34 88 26 98 26 C 106 26 113 31 115 38 C 118 36 122 36 125 38 C 131 40 134 46 133 52 C 137 54 139 58 138 63 C 137 68 132 72 126 72 L 78 72 C 70 72 64 66 64 58 C 64 51 69 45 76 44 C 77 44 79 44 80 44 Z" fill="#38BDF8" stroke="#102A43" stroke-width="1.8" />
  <path d="M 86 48 C 86 40 92 34 100 34 C 106 34 111 38 113 44 C 115 42 118 42 121 44 C 125 46 127 50 126 55 L 84 55 Z" fill="#FFFFFF" opacity="0.6" />

  <!-- Stacked Server Racks below Cloud -->
  <g transform="translate(94, 68)">
    <rect x="0" y="0" width="42" height="13" rx="3" fill="#102A43" stroke="#102A43" stroke-width="1.2" />
    <circle cx="8" cy="6.5" r="1.8" fill="#10B981" />
    <line x1="16" y1="6.5" x2="36" y2="6.5" stroke="#64748B" stroke-width="1.2" />

    <rect x="0" y="16" width="42" height="13" rx="3" fill="#102A43" stroke="#102A43" stroke-width="1.2" />
    <circle cx="8" cy="22.5" r="1.8" fill="#38BDF8" />
    <line x1="16" y1="22.5" x2="36" y2="22.5" stroke="#64748B" stroke-width="1.2" />
  </g>

  <!-- Kubernetes/Docker Helm Emblem on left -->
  <circle cx="44" cy="58" r="18" fill="#EAF3FF" stroke="#1683E8" stroke-width="1.8" />
  <circle cx="44" cy="58" r="6" fill="#1683E8" />
  <!-- Gear spokes -->
  <line x1="44" y1="36" x2="44" y2="42" stroke="#1683E8" stroke-width="2.5" stroke-linecap="round" />
  <line x1="44" y1="74" x2="44" y2="80" stroke="#1683E8" stroke-width="2.5" stroke-linecap="round" />
  <line x1="22" y1="58" x2="28" y2="58" stroke="#1683E8" stroke-width="2.5" stroke-linecap="round" />
  <line x1="60" y1="58" x2="66" y2="58" stroke="#1683E8" stroke-width="2.5" stroke-linecap="round" />
  
  <!-- Pipeline connection line -->
  <path d="M 62 58 L 78 58 L 94 74" stroke="#1683E8" stroke-width="1.8" stroke-dasharray="3 3" fill="none" />
</svg>`,

  // ── 7. Data Structures & Algorithms (1 Year) ──
  "1y-dsa.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- Binary Tree Node Network -->
  <!-- Root Node -->
  <circle cx="88" cy="30" r="10" fill="#1683E8" stroke="#102A43" stroke-width="1.8" />
  <text x="85" y="34" font-family="monospace" font-size="10" font-weight="700" fill="#FFFFFF">7</text>
  <!-- Level 1 Left -->
  <line x1="82" y1="37" x2="62" y2="55" stroke="#102A43" stroke-width="1.8" />
  <circle cx="58" cy="60" r="9" fill="#38BDF8" stroke="#102A43" stroke-width="1.8" />
  <text x="55" y="64" font-family="monospace" font-size="9" font-weight="700" fill="#102A43">3</text>
  <!-- Level 1 Right -->
  <line x1="94" y1="37" x2="114" y2="55" stroke="#102A43" stroke-width="1.8" />
  <circle cx="118" cy="60" r="9" fill="#FF6B4A" stroke="#102A43" stroke-width="1.8" />
  <text x="115" y="64" font-family="monospace" font-size="9" font-weight="700" fill="#FFFFFF">9</text>
  <!-- Level 2 Leaves -->
  <line x1="53" y1="67" x2="42" y2="82" stroke="#102A43" stroke-width="1.6" />
  <circle cx="38" cy="88" r="8" fill="#EAF3FF" stroke="#102A43" stroke-width="1.6" />
  <text x="35" y="91" font-family="monospace" font-size="8" font-weight="700" fill="#1683E8">1</text>
  <line x1="63" y1="67" x2="74" y2="82" stroke="#102A43" stroke-width="1.6" />
  <circle cx="78" cy="88" r="8" fill="#EAF3FF" stroke="#102A43" stroke-width="1.6" />
  <text x="75" y="91" font-family="monospace" font-size="8" font-weight="700" fill="#1683E8">5</text>
  <!-- Level 2 Right leaf -->
  <line x1="123" y1="67" x2="134" y2="82" stroke="#102A43" stroke-width="1.6" />
  <circle cx="138" cy="88" r="8" fill="#102A43" stroke="#102A43" stroke-width="1.6" />
  <text x="135" y="91" font-family="monospace" font-size="8" font-weight="700" fill="#FFFFFF">12</text>

  <!-- Big O Complexity Badge -->
  <rect x="18" y="24" width="36" height="18" rx="4" fill="#102A43" />
  <text x="23" y="36" font-family="sans-serif" font-size="9" font-weight="700" fill="#FCD34D">O(log N)</text>
</svg>`,

  // ── 8. Internet of Things (IoT) & Embedded Systems (1 Year) ──
  "1y-iot.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- Microcontroller Board (ESP32 / PCB) -->
  <rect x="42" y="28" width="76" height="64" rx="6" fill="#102A43" stroke="#102A43" stroke-width="1.8" />
  <!-- Copper traces on PCB -->
  <line x1="42" y1="40" x2="54" y2="40" stroke="#F59E0B" stroke-width="1.5" />
  <line x1="42" y1="50" x2="56" y2="50" stroke="#F59E0B" stroke-width="1.5" />
  <line x1="42" y1="60" x2="54" y2="60" stroke="#F59E0B" stroke-width="1.5" />
  <line x1="42" y1="70" x2="56" y2="70" stroke="#F59E0B" stroke-width="1.5" />
  <line x1="106" y1="40" x2="118" y2="40" stroke="#F59E0B" stroke-width="1.5" />
  <line x1="104" y1="50" x2="118" y2="50" stroke="#F59E0B" stroke-width="1.5" />
  <line x1="106" y1="60" x2="118" y2="60" stroke="#F59E0B" stroke-width="1.5" />
  <line x1="104" y1="70" x2="118" y2="70" stroke="#F59E0B" stroke-width="1.5" />
  <!-- Microchip Processor -->
  <rect x="62" y="42" width="36" height="36" rx="4" fill="#1683E8" stroke="#FFFFFF" stroke-width="1.2" />
  <text x="68" y="64" font-family="monospace" font-size="8" font-weight="700" fill="#FFFFFF">ESP32</text>
  
  <!-- Antenna & Wireless Signal Arcs -->
  <circle cx="80" cy="20" r="3" fill="#FF6B4A" />
  <path d="M 72 16 A 12 12 0 0 1 88 16" stroke="#1683E8" stroke-width="1.8" stroke-linecap="round" fill="none" />
  <path d="M 66 11 A 18 18 0 0 1 94 11" stroke="#38BDF8" stroke-width="1.6" stroke-linecap="round" fill="none" />
  
  <!-- Sensor Node Indicator -->
  <circle cx="26" cy="74" r="10" fill="#EAF3FF" stroke="#1683E8" stroke-width="1.5" />
  <circle cx="26" cy="74" r="4" fill="#10B981" />
  <line x1="36" y1="74" x2="42" y2="74" stroke="#1683E8" stroke-width="1.5" />
</svg>`,

  // ── 9. Digital Marketing & Growth Engineering (1 Year) ──
  "1y-marketing.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- Growth Funnel & Campaign Graph -->
  <rect x="48" y="24" width="98" height="70" rx="8" fill="#FFFFFF" stroke="#102A43" stroke-width="1.8" />
  <!-- Megaphone Icon -->
  <path d="M 22 56 L 36 46 L 36 68 Z" fill="#FF6B4A" stroke="#102A43" stroke-width="1.8" />
  <rect x="16" y="52" width="8" height="12" rx="2" fill="#102A43" />
  <path d="M 36 50 L 44 46 L 44 70 L 36 66 Z" fill="#F59E0B" stroke="#102A43" stroke-width="1.5" />
  <path d="M 24 64 L 28 78 L 22 80 L 18 66" fill="#102A43" />

  <!-- Rising Growth Curve & Metrics -->
  <path d="M 58 78 Q 78 72 96 52 Q 114 42 136 32" stroke="#1683E8" stroke-width="2.5" stroke-linecap="round" fill="none" />
  <!-- Upward Arrow Target -->
  <circle cx="136" cy="32" r="4" fill="#10B981" />
  <path d="M 132 30 L 138 28 L 138 34" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" fill="none" />

  <!-- Funnel Stage Pills inside board -->
  <rect x="58" y="32" width="30" height="7" rx="3" fill="#EAF3FF" />
  <rect x="58" y="42" width="22" height="7" rx="3" fill="#38BDF8" opacity="0.7" />
  <rect x="58" y="52" width="16" height="7" rx="3" fill="#1683E8" />
  <text x="100" y="76" font-family="sans-serif" font-size="9" font-weight="700" fill="#10B981">+248%</text>
</svg>`,

  // ── 10. Generative AI & LLM Applications (6 Months) ──
  "6m-genai.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- Chatbot dialogue prompts -->
  <rect x="76" y="24" width="68" height="26" rx="6" fill="#EAF3FF" stroke="#1683E8" stroke-width="1.5" />
  <line x1="84" y1="32" x2="128" y2="32" stroke="#1683E8" stroke-width="2" stroke-linecap="round" />
  <line x1="84" y1="40" x2="114" y2="40" stroke="#94A3B8" stroke-width="1.8" stroke-linecap="round" />
  
  <!-- Response Bubble with Lightbulb -->
  <rect x="76" y="56" width="68" height="32" rx="6" fill="#102A43" stroke="#102A43" stroke-width="1.5" />
  <circle cx="92" cy="72" r="8" fill="#F59E0B" />
  <path d="M 90 70 L 94 70 L 92 75 Z" fill="#FFFFFF" />
  <line x1="106" y1="68" x2="134" y2="68" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
  <line x1="106" y1="76" x2="124" y2="76" stroke="#38BDF8" stroke-width="1.8" stroke-linecap="round" />

  <!-- Builder Character communicating with AI -->
  <ellipse cx="36" cy="54" rx="9" ry="11" fill="#FCD34D" stroke="#102A43" stroke-width="1.8" />
  <path d="M 28 52 C 27 42 37 39 45 42 C 48 45 47 52 45 54 C 40 52 34 52 28 56 Z" fill="#102A43" />
  <path d="M 24 82 C 22 70 26 66 38 66 C 48 66 52 70 50 82 Z" fill="#1683E8" stroke="#102A43" stroke-width="1.8" />
  <!-- Speech line -->
  <path d="M 48 60 Q 62 48 76 38" stroke="#1683E8" stroke-width="1.5" stroke-dasharray="2 2" fill="none" />
</svg>`,

  // ── 11. Full Stack Web Development (6 Months) ──
  "6m-fullstack.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- Responsive Desktop Screen -->
  <rect x="42" y="24" width="76" height="54" rx="6" fill="#FFFFFF" stroke="#102A43" stroke-width="1.8" />
  <rect x="42" y="24" width="76" height="12" rx="6" fill="#102A43" />
  <circle cx="48" cy="30" r="2" fill="#FF6B4A" />
  <circle cx="54" cy="30" r="2" fill="#F59E0B" />
  <!-- Screen grid layout wireframe -->
  <rect x="48" y="42" width="20" height="28" rx="2" fill="#EAF3FF" stroke="#1683E8" stroke-width="1" />
  <rect x="72" y="42" width="40" height="12" rx="2" fill="#38BDF8" opacity="0.8" />
  <rect x="72" y="58" width="40" height="12" rx="2" fill="#E2E8F0" />
  
  <!-- Mobile screen in front -->
  <rect x="106" y="44" width="34" height="54" rx="5" fill="#FFFFFF" stroke="#102A43" stroke-width="1.8" />
  <rect x="110" y="50" width="26" height="16" rx="2" fill="#1683E8" />
  <rect x="110" y="70" width="26" height="6" rx="2" fill="#CBD5E1" />
  <circle cx="123" cy="92" r="2" fill="#102A43" />

  <!-- Code bracket accent -->
  <text x="18" y="64" font-family="monospace" font-size="22" font-weight="800" fill="#1683E8">&lt;/&gt;</text>
</svg>`,

  // ── 12. Data Science & Machine Learning (6 Months) ──
  "6m-datascience.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- Data Table & Correlation Matrix -->
  <rect x="52" y="26" width="94" height="68" rx="8" fill="#FFFFFF" stroke="#102A43" stroke-width="1.8" />
  <!-- Table Header -->
  <rect x="52" y="26" width="94" height="14" rx="8" fill="#EAF3FF" />
  <text x="58" y="36" font-family="monospace" font-size="7" font-weight="700" fill="#1683E8">X1</text>
  <text x="82" y="36" font-family="monospace" font-size="7" font-weight="700" fill="#1683E8">X2</text>
  <text x="106" y="36" font-family="monospace" font-size="7" font-weight="700" fill="#1683E8">Y_PRED</text>
  <!-- Scatter clusters -->
  <circle cx="68" cy="52" r="3" fill="#1683E8" />
  <circle cx="78" cy="62" r="3" fill="#1683E8" />
  <circle cx="86" cy="56" r="3" fill="#1683E8" />
  <circle cx="114" cy="68" r="3" fill="#FF6B4A" />
  <circle cx="126" cy="62" r="3" fill="#FF6B4A" />
  <circle cx="132" cy="74" r="3" fill="#FF6B4A" />
  <!-- Decision Boundary -->
  <line x1="60" y1="78" x2="136" y2="44" stroke="#10B981" stroke-width="2" stroke-linecap="round" />

  <!-- Python Flask / Formula badge -->
  <rect x="16" y="44" width="32" height="32" rx="6" fill="#102A43" />
  <text x="21" y="64" font-family="monospace" font-size="14" font-weight="800" fill="#FCD34D">f(x)</text>
</svg>`,

  // ── 13. Data Analytics & BI Dashboards (6 Months) ──
  "6m-dataanalytics.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- Executive Dashboard Screen -->
  <rect x="44" y="22" width="102" height="72" rx="8" fill="#FFFFFF" stroke="#102A43" stroke-width="1.8" />
  <!-- Top KPI Cards -->
  <rect x="52" y="30" width="26" height="18" rx="4" fill="#EAF3FF" />
  <text x="56" y="42" font-family="sans-serif" font-size="8" font-weight="800" fill="#1683E8">94.8%</text>
  <rect x="82" y="30" width="26" height="18" rx="4" fill="#FEF3F2" />
  <text x="86" y="42" font-family="sans-serif" font-size="8" font-weight="800" fill="#FF6B4A">$1.2M</text>
  <rect x="112" y="30" width="26" height="18" rx="4" fill="#ECFDF5" />
  <text x="116" y="42" font-family="sans-serif" font-size="8" font-weight="800" fill="#10B981">+32%</text>
  
  <!-- Trend Chart with Area Fill -->
  <path d="M 52 76 Q 72 68 92 60 Q 112 70 138 52 L 138 82 L 52 82 Z" fill="#EAF3FF" />
  <path d="M 52 76 Q 72 68 92 60 Q 112 70 138 52" stroke="#1683E8" stroke-width="2" stroke-linecap="round" fill="none" />
  
  <!-- Bar chart icon on left -->
  <rect x="16" y="42" width="8" height="36" rx="2" fill="#102A43" />
  <rect x="28" y="54" width="8" height="24" rx="2" fill="#38BDF8" />
</svg>`,

  // ── 14. Cloud Computing & AWS Administration (6 Months) ──
  "6m-cloud.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- AWS Cloud Shield -->
  <path d="M 88 22 L 126 34 L 126 58 C 126 76 108 90 88 96 C 68 90 50 76 50 58 L 50 34 Z" fill="#EAF3FF" stroke="#102A43" stroke-width="1.8" />
  <!-- Inner Cloud on Shield -->
  <path d="M 74 54 C 74 48 79 44 85 44 C 90 44 94 47 96 51 C 98 50 100 50 102 51 C 105 53 107 56 106 60 C 109 61 110 64 110 67 C 109 70 106 72 102 72 L 74 72 C 69 72 65 68 65 63 C 65 58 69 54 74 54 Z" fill="#1683E8" />
  <!-- AWS Server Stack on right -->
  <rect x="118" y="64" width="28" height="12" rx="3" fill="#102A43" />
  <circle cx="123" cy="70" r="1.5" fill="#10B981" />
  <rect x="118" y="78" width="28" height="12" rx="3" fill="#102A43" />
  <circle cx="123" cy="84" r="1.5" fill="#F59E0B" />
  <!-- Terminal Prompt badge on left -->
  <rect x="16" y="34" width="28" height="24" rx="4" fill="#102A43" />
  <text x="21" y="49" font-family="monospace" font-size="10" font-weight="700" fill="#38BDF8">&gt;_</text>
</svg>`,

  // ── 15. Data Structures & Algorithms (6 Months) ──
  "6m-dsa.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- Graph Structure with BFS Traversal -->
  <circle cx="50" cy="38" r="9" fill="#1683E8" stroke="#102A43" stroke-width="1.8" />
  <text x="47" y="42" font-family="monospace" font-size="9" font-weight="700" fill="#FFFFFF">A</text>
  <circle cx="94" cy="38" r="9" fill="#38BDF8" stroke="#102A43" stroke-width="1.8" />
  <text x="91" y="42" font-family="monospace" font-size="9" font-weight="700" fill="#102A43">B</text>
  <circle cx="72" cy="74" r="9" fill="#102A43" stroke="#102A43" stroke-width="1.8" />
  <text x="69" y="78" font-family="monospace" font-size="9" font-weight="700" fill="#FFFFFF">C</text>
  <circle cx="122" cy="74" r="9" fill="#FF6B4A" stroke="#102A43" stroke-width="1.8" />
  <text x="119" y="78" font-family="monospace" font-size="9" font-weight="700" fill="#FFFFFF">D</text>

  <line x1="59" y1="38" x2="85" y2="38" stroke="#102A43" stroke-width="1.8" />
  <line x1="56" y1="44" x2="66" y2="68" stroke="#102A43" stroke-width="1.8" />
  <line x1="88" y1="44" x2="78" y2="68" stroke="#102A43" stroke-width="1.8" />
  <line x1="102" y1="44" x2="114" y2="68" stroke="#102A43" stroke-width="1.8" />
  <line x1="81" y1="74" x2="113" y2="74" stroke="#102A43" stroke-width="1.8" stroke-dasharray="2 2" />

  <!-- Code Recursion Stack on left -->
  <rect x="18" y="32" width="22" height="12" rx="3" fill="#EAF3FF" stroke="#1683E8" stroke-width="1.2" />
  <rect x="18" y="48" width="22" height="12" rx="3" fill="#EAF3FF" stroke="#1683E8" stroke-width="1.2" />
  <rect x="18" y="64" width="22" height="12" rx="3" fill="#1683E8" />
  <text x="21" y="73" font-family="monospace" font-size="7" font-weight="700" fill="#FFFFFF">POP</text>
</svg>`,

  // ── 16. Internet of Things (IoT) Prototyping (6 Months) ──
  "6m-iot.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- IoT Breadboard Setup -->
  <rect x="40" y="30" width="84" height="60" rx="6" fill="#FFFFFF" stroke="#102A43" stroke-width="1.8" />
  <!-- Pin rows -->
  <circle cx="50" cy="40" r="1.5" fill="#64748B" />
  <circle cx="58" cy="40" r="1.5" fill="#64748B" />
  <circle cx="66" cy="40" r="1.5" fill="#64748B" />
  <circle cx="74" cy="40" r="1.5" fill="#64748B" />
  <circle cx="82" cy="40" r="1.5" fill="#64748B" />
  <circle cx="50" cy="50" r="1.5" fill="#64748B" />
  <circle cx="58" cy="50" r="1.5" fill="#64748B" />
  <circle cx="66" cy="50" r="1.5" fill="#64748B" />
  <!-- Wire connections -->
  <path d="M 58 50 Q 72 20 86 50" stroke="#FF6B4A" stroke-width="2" stroke-linecap="round" fill="none" />
  <path d="M 66 50 Q 82 82 98 50" stroke="#1683E8" stroke-width="2" stroke-linecap="round" fill="none" />
  <!-- LED diode -->
  <circle cx="106" cy="46" r="6" fill="#10B981" stroke="#102A43" stroke-width="1.4" />
  <!-- Wireless signal waves -->
  <path d="M 128 26 A 14 14 0 0 1 140 38" stroke="#1683E8" stroke-width="2" stroke-linecap="round" fill="none" />
  <path d="M 124 22 A 20 20 0 0 1 144 42" stroke="#38BDF8" stroke-width="1.8" stroke-linecap="round" fill="none" />
</svg>`,

  // ── 17. Digital Marketing & Performance Media (6 Months) ──
  "6m-marketing.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- Ad Campaign Card -->
  <rect x="46" y="24" width="98" height="68" rx="8" fill="#FFFFFF" stroke="#102A43" stroke-width="1.8" />
  <rect x="54" y="32" width="22" height="18" rx="3" fill="#1683E8" />
  <path d="M 60 41 L 64 45 L 70 37" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  <line x1="82" y1="36" x2="132" y2="36" stroke="#102A43" stroke-width="2" stroke-linecap="round" />
  <line x1="82" y1="44" x2="118" y2="44" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" />
  
  <!-- Conversion Funnel Bars -->
  <rect x="54" y="60" width="80" height="7" rx="3" fill="#EAF3FF" />
  <rect x="54" y="70" width="56" height="7" rx="3" fill="#38BDF8" />
  <rect x="54" y="80" width="34" height="7" rx="3" fill="#10B981" />
  <!-- Click / Conversion Cursor -->
  <path d="M 28 62 L 32 76 L 36 72 L 42 78 L 45 75 L 39 69 L 44 67 Z" fill="#FF6B4A" stroke="#102A43" stroke-width="1.4" />
</svg>`,

  // ── 18. Generative AI Foundations & Prompting (3 Months) ──
  "3m-genai.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- Prompt Input Box -->
  <rect x="36" y="26" width="108" height="38" rx="8" fill="#FFFFFF" stroke="#1683E8" stroke-width="1.8" />
  <text x="44" y="42" font-family="sans-serif" font-size="9" font-weight="700" fill="#102A43">Prompt: &quot;Build an AI agent...&quot;</text>
  <rect x="124" y="38" width="14" height="14" rx="4" fill="#1683E8" />
  <path d="M 128 45 L 134 45 M 131 42 L 134 45 L 131 48" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
  
  <!-- AI Output Sparks & Tags -->
  <rect x="50" y="72" width="42" height="20" rx="5" fill="#EAF3FF" stroke="#1683E8" stroke-width="1.2" />
  <text x="56" y="85" font-family="sans-serif" font-size="8" font-weight="700" fill="#1683E8">LLM TOKEN</text>
  <rect x="98" y="72" width="46" height="20" rx="5" fill="#ECFDF5" stroke="#10B981" stroke-width="1.2" />
  <text x="103" y="85" font-family="sans-serif" font-size="8" font-weight="700" fill="#10B981">RAG VALID</text>
  
  <path d="M 22 42 L 28 42 M 25 39 L 25 45" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" />
</svg>`,

  // ── 19. Full Stack Web Development Sprint (3 Months) ──
  "3m-fullstack.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- Rapid Sprint Web Window -->
  <rect x="46" y="26" width="96" height="66" rx="8" fill="#FFFFFF" stroke="#102A43" stroke-width="1.8" />
  <rect x="46" y="26" width="96" height="12" rx="8" fill="#E2E8F0" />
  <circle cx="54" cy="32" r="2" fill="#FF6B4A" />
  <circle cx="60" cy="32" r="2" fill="#F59E0B" />
  <!-- Fast Sprint Blocks -->
  <rect x="54" y="44" width="38" height="18" rx="4" fill="#EAF3FF" stroke="#1683E8" stroke-width="1" />
  <text x="60" y="56" font-family="monospace" font-size="8" font-weight="700" fill="#1683E8">React</text>
  <rect x="98" y="44" width="36" height="18" rx="4" fill="#102A43" />
  <text x="104" y="56" font-family="monospace" font-size="8" font-weight="700" fill="#FFFFFF">Node</text>
  <!-- Live Deploy tag -->
  <rect x="54" y="70" width="80" height="14" rx="4" fill="#10B981" />
  <text x="68" y="80" font-family="sans-serif" font-size="8" font-weight="800" fill="#FFFFFF">LIVE DEPLOY ↗</text>
  <!-- Sprint rocket on left -->
  <circle cx="26" cy="60" r="14" fill="#EAF3FF" stroke="#1683E8" stroke-width="1.5" />
  <path d="M 22 66 L 30 54 L 32 60 L 26 66 Z" fill="#1683E8" />
</svg>`,

  // ── 20. Applied Data Science Sprint (3 Months) ──
  "3m-datascience.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- Data Chart Board -->
  <rect x="48" y="26" width="96" height="66" rx="8" fill="#FFFFFF" stroke="#102A43" stroke-width="1.8" />
  <!-- Scatter Plot with Trend -->
  <circle cx="62" cy="72" r="3.5" fill="#1683E8" />
  <circle cx="76" cy="62" r="3.5" fill="#1683E8" />
  <circle cx="92" cy="56" r="3.5" fill="#38BDF8" />
  <circle cx="106" cy="46" r="3.5" fill="#1683E8" />
  <circle cx="124" cy="38" r="3.5" fill="#FF6B4A" />
  <line x1="56" y1="78" x2="132" y2="34" stroke="#102A43" stroke-width="1.8" stroke-linecap="round" />
  
  <!-- Python Logo Symbol on left -->
  <circle cx="26" cy="58" r="14" fill="#102A43" />
  <path d="M 21 54 C 21 51 25 51 27 51 L 29 51 L 29 55 L 23 55 Z" fill="#38BDF8" />
  <path d="M 31 62 C 31 65 27 65 25 65 L 23 65 L 23 61 L 29 61 Z" fill="#FCD34D" />
</svg>`,

  // ── 21. Data Analytics Sprint (3 Months) ──
  "3m-dataanalytics.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- SQL Query Editor -->
  <rect x="46" y="24" width="98" height="68" rx="8" fill="#FFFFFF" stroke="#102A43" stroke-width="1.8" />
  <rect x="46" y="24" width="98" height="16" rx="8" fill="#102A43" />
  <text x="54" y="35" font-family="monospace" font-size="8" font-weight="700" fill="#FCD34D">SELECT * FROM DATA</text>
  <!-- Mini Bar Chart Inside -->
  <rect x="58" y="58" width="10" height="24" rx="2" fill="#EAF3FF" stroke="#1683E8" stroke-width="1.2" />
  <rect x="74" y="48" width="10" height="34" rx="2" fill="#38BDF8" />
  <rect x="90" y="42" width="10" height="40" rx="2" fill="#1683E8" />
  <rect x="106" y="52" width="10" height="30" rx="2" fill="#10B981" />
  
  <!-- Database Cylinder on left -->
  <ellipse cx="26" cy="46" rx="12" ry="5" fill="#38BDF8" stroke="#102A43" stroke-width="1.5" />
  <path d="M 14 46 L 14 66 C 14 69 19 71 26 71 C 33 71 38 69 38 66 L 38 46" fill="#1683E8" stroke="#102A43" stroke-width="1.5" />
</svg>`,

  // ── 22. Cloud Computing Fundamentals (3 Months) ──
  "3m-cloud.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- Cloud Storage Node -->
  <path d="M 54 50 C 54 42 60 36 68 36 C 73 36 78 39 80 43 C 82 41 85 41 88 43 C 92 45 94 49 93 54 C 97 55 99 59 98 63 C 97 67 93 70 88 70 L 54 70 C 47 70 42 65 42 58 C 42 53 47 49 52 49 Z" fill="#38BDF8" stroke="#102A43" stroke-width="1.8" />
  
  <!-- Server Drive on right -->
  <rect x="106" y="38" width="36" height="14" rx="3" fill="#102A43" />
  <circle cx="112" cy="45" r="2" fill="#10B981" />
  <rect x="106" y="56" width="36" height="14" rx="3" fill="#102A43" />
  <circle cx="112" cy="63" r="2" fill="#38BDF8" />
  <line x1="88" y1="58" x2="106" y2="58" stroke="#1683E8" stroke-width="1.8" stroke-dasharray="2 2" />

  <!-- Cloud Key Security Icon on left -->
  <circle cx="26" cy="58" r="12" fill="#EAF3FF" stroke="#1683E8" stroke-width="1.5" />
  <path d="M 24 54 L 28 54 L 28 62 L 24 62 Z" fill="#1683E8" />
</svg>`,

  // ── 23. Data Structures & Problem Solving (3 Months) ──
  "3m-dsa.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- Array Sliding Window -->
  <rect x="34" y="38" width="112" height="28" rx="6" fill="#FFFFFF" stroke="#102A43" stroke-width="1.8" />
  <line x1="62" y1="38" x2="62" y2="66" stroke="#E2E8F0" stroke-width="1.5" />
  <line x1="90" y1="38" x2="90" y2="66" stroke="#E2E8F0" stroke-width="1.5" />
  <line x1="118" y1="38" x2="118" y2="66" stroke="#E2E8F0" stroke-width="1.5" />
  <text x="44" y="56" font-family="monospace" font-size="11" font-weight="700" fill="#102A43">2</text>
  <text x="72" y="56" font-family="monospace" font-size="11" font-weight="700" fill="#1683E8">5</text>
  <text x="100" y="56" font-family="monospace" font-size="11" font-weight="700" fill="#1683E8">8</text>
  <text x="128" y="56" font-family="monospace" font-size="11" font-weight="700" fill="#102A43">1</text>
  
  <!-- Highlight Window Frame -->
  <rect x="62" y="34" width="56" height="36" rx="4" fill="none" stroke="#FF6B4A" stroke-width="2.5" />
  <text x="74" y="85" font-family="monospace" font-size="9" font-weight="700" fill="#FF6B4A">SUM: 13</text>
  <!-- Two Pointer Pointers -->
  <path d="M 72 26 L 72 32 M 70 29 L 72 32 L 74 29" stroke="#1683E8" stroke-width="1.8" />
  <path d="M 100 26 L 100 32 M 98 29 L 100 32 L 102 29" stroke="#1683E8" stroke-width="1.8" />
</svg>`,

  // ── 24. IoT Fundamentals & Hardware (3 Months) ──
  "3m-iot.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- Microcontroller Board -->
  <rect x="50" y="28" width="70" height="62" rx="6" fill="#1683E8" stroke="#102A43" stroke-width="1.8" />
  <rect x="64" y="42" width="28" height="28" rx="4" fill="#102A43" />
  <circle cx="70" cy="48" r="1.5" fill="#FFFFFF" />
  <circle cx="106" cy="40" r="3" fill="#10B981" />
  <circle cx="106" cy="52" r="3" fill="#F59E0B" />
  
  <!-- Analog Sensor Waves on left -->
  <circle cx="26" cy="58" r="12" fill="#FFFFFF" stroke="#102A43" stroke-width="1.5" />
  <path d="M 18 58 Q 22 50 26 58 Q 30 66 34 58" stroke="#FF6B4A" stroke-width="2" stroke-linecap="round" fill="none" />
  <line x1="38" y1="58" x2="50" y2="58" stroke="#102A43" stroke-width="1.6" />
</svg>`,

  // ── 25. Digital Marketing Foundations (3 Months) ──
  "3m-marketing.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#F8FAFC" />
  <!-- Social Media & Audience Growth Chart -->
  <rect x="48" y="26" width="96" height="66" rx="8" fill="#FFFFFF" stroke="#102A43" stroke-width="1.8" />
  <!-- Upward Trend Line -->
  <path d="M 58 74 Q 82 66 100 48 Q 118 36 134 32" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" fill="none" />
  <circle cx="134" cy="32" r="4" fill="#10B981" />
  <!-- Growth Bars -->
  <rect x="62" y="62" width="8" height="20" rx="2" fill="#EAF3FF" />
  <rect x="76" y="52" width="8" height="30" rx="2" fill="#38BDF8" />
  <rect x="90" y="44" width="8" height="38" rx="2" fill="#1683E8" />
  
  <!-- Heart / Like badge on left -->
  <circle cx="26" cy="56" r="14" fill="#FF6B4A" />
  <path d="M 26 59 L 21 54 C 19 52 19 49 22 47 C 24 45 26 47 26 47 C 26 47 28 45 30 47 C 33 49 33 52 31 54 Z" fill="#FFFFFF" />
</svg>`,

  // ── 26. Data Analytics Fast-Track Curriculum (45 Days) ──
  "45d-analytics.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#FEF3F2" />
  <!-- 45-Days Fast-Track Card -->
  <rect x="46" y="24" width="98" height="68" rx="8" fill="#FFFFFF" stroke="#D92D20" stroke-width="1.8" />
  <rect x="46" y="24" width="98" height="15" rx="8" fill="#FEE4E2" />
  <text x="54" y="35" font-family="sans-serif" font-size="8" font-weight="800" fill="#D92D20">45-DAY SPRINT</text>
  <!-- Rapid Bar Chart -->
  <rect x="58" y="56" width="12" height="26" rx="2" fill="#FEE4E2" stroke="#D92D20" stroke-width="1" />
  <rect x="76" y="46" width="12" height="36" rx="2" fill="#F04438" />
  <rect x="94" y="38" width="12" height="44" rx="2" fill="#D92D20" />
  <!-- Lightning Bolt for Fast-Track on left -->
  <circle cx="26" cy="58" r="15" fill="#D92D20" />
  <path d="M 28 47 L 21 59 L 26 59 L 24 69 L 32 56 L 27 56 Z" fill="#FFFFFF" />
</svg>`,

  // ── 27. Web Development Fast-Track Curriculum (45 Days) ──
  "45d-webdev.svg": `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="144" height="96" rx="12" fill="#FEF3F2" />
  <!-- Fast-Track Code Browser -->
  <rect x="46" y="24" width="98" height="68" rx="8" fill="#FFFFFF" stroke="#D92D20" stroke-width="1.8" />
  <rect x="46" y="24" width="98" height="15" rx="8" fill="#FEE4E2" />
  <text x="54" y="35" font-family="monospace" font-size="8" font-weight="800" fill="#D92D20">&lt;FAST_TRACK /&gt;</text>
  <!-- Live Project Browser Mockup -->
  <rect x="56" y="46" width="38" height="36" rx="3" fill="#EAF3FF" stroke="#1683E8" stroke-width="1" />
  <rect x="60" y="52" width="22" height="5" rx="1.5" fill="#1683E8" />
  <rect x="60" y="60" width="30" height="3" rx="1" fill="#94A3B8" />
  <rect x="100" y="46" width="36" height="36" rx="3" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1" />
  <circle cx="118" cy="62" r="6" fill="#10B981" />
  
  <!-- Lightning Bolt icon on left -->
  <circle cx="26" cy="58" r="15" fill="#D92D20" />
  <path d="M 28 47 L 21 59 L 26 59 L 24 69 L 32 56 L 27 56 Z" fill="#FFFFFF" />
</svg>`,
};

for (const [filename, svgContent] of Object.entries(illustrations)) {
  const filePath = path.join(outDir, filename);
  fs.writeFileSync(filePath, svgContent.trim());
  console.log("Wrote:", filename);
}

console.log("All 27 course illustrations generated successfully!");
