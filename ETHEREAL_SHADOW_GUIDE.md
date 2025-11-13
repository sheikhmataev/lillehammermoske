# EtherealShadow Komponent Integrasjon

## 🎨 Komponent Oversikt

`EtherealShadow` er en animert bakgrunnskomponent som gir en subtil, etisk skyggeeffekt med flytende bevegelse. Komponenten er fullt integrert og tilpasset Lillehammer Moske designet.

## 📁 Filer Opprettet

```
src/components/ui/
├── EtherealShadow.tsx           # Hovedkomponent
├── EtherealShadowDemo.tsx       # Demo varianter
└── index.ts                      # Eksporter oppdatert

src/app/(pages)/ethereal-demo/
└── page.tsx                      # Demo side
```

## 🚀 Rask Start

### 1. Importer komponenten
```tsx
import { EtherealShadow } from '@/components/ui/EtherealShadow';
```

### 2. Bruk i din komponent
```tsx
<EtherealShadow
  color="rgba(16, 185, 129, 0.08)"
  animation={{ scale: 50, speed: 60 }}
  noise={{ opacity: 0.3, scale: 1.0 }}
  sizing="fill"
  className="w-full h-full"
>
  <DittInnhold />
</EtherealShadow>
```

## 🎛️ Props og Konfigurasjon

### Basic Props
- `color`: Bakgrunnsfarge (default: emerald med lav opacity)
- `className`: Tailwind CSS klasser
- `style`: Inline styles
- `children`: Innhold som vises over animasjonen

### Animation Props
```tsx
animation: {
  scale: number,  // 1-100 (hvor mye bevegelse)
  speed: number   // 1-100 (hvor rask bevegelse)
}
```

### Noise Props
```tsx
noise: {
  opacity: number, // 0-1 (hvor mye støy)
  scale: number    // 0.5-2.0 (støy-størrelse)
}
```

### Sizing Props
- `sizing`: "fill" | "stretch" (hvordan mask skal skalere)

## 🎨 Forhåndsdefinerte Varianter

### 1. Full Skjerm Effekt
```tsx
import { EtherealShadowDemo } from '@/components/ui/EtherealShadowDemo';

<EtherealShadowDemo />
```
- Bruker: Landingssider, hero seksjoner
- Animation: Medium (50, 60)
- Noise: Subtle (0.3, 1.0)

### 2. Hero Sekjon
```tsx
import { MosqueHeroWithShadow } from '@/components/ui/EtherealShadowDemo';

<MosqueHeroWithShadow />
```
- Bruker: Toppseksjoner, headers
- Animation: Gentle (30, 40)
- Noise: Minimal (0.2, 0.8)

### 3. Subtittel Bakgrunn
```tsx
import { SubtleEtherealBackground } from '@/components/ui/EtherealShadowDemo';

<SubtleEtherealBackground>
  <DittInnhold />
</SubtleEtherealBackground>
```
- Bruker: Innholdsseksjoner, mellomtitler
- Animation: Very Gentle (20, 80)
- Noise: Very Subtle (0.1, 1.5)

## 🎯 Brukseksempler

### Hero Seksjon
```tsx
<section className="w-full h-[600px]">
  <EtherealShadow
    color="rgba(16, 185, 129, 0.12)"
    animation={{ scale: 30, speed: 40 }}
    noise={{ opacity: 0.2, scale: 0.8 }}
    sizing="fill"
    className="w-full h-full"
  >
    <h1>Lillehammer Moske</h1>
    <p>The Muslim Cultural Center</p>
  </EtherealShadow>
</section>
```

### Bønnetider Seksjon
```tsx
<Card variant="elevated">
  <EtherealShadow
    color="rgba(16, 185, 129, 0.06)"
    animation={{ scale: 20, speed: 70 }}
    noise={{ opacity: 0.15, scale: 1.2 }}
    sizing="fill"
    className="w-full h-[400px]"
  >
    <PrayerTimesWidget />
  </EtherealShadow>
</Card>
```

### Om Oss Seksjon
```tsx
<section className="py-16">
  <EtherealShadow
    color="rgba(217, 119, 6, 0.08)" // Gold color
    animation={{ scale: 25, speed: 50 }}
    noise={{ opacity: 0.2, scale: 1.0 }}
    sizing="fill"
    className="w-full h-[500px]"
  >
    <AboutContent />
  </EtherealShadow>
</section>
```

## 🎨 Fargekombinasjoner

### Moske Tema
```tsx
// Emerald (hovedfarge)
color="rgba(16, 185, 129, 0.08)"

// Gold (sekundærfarge)
color="rgba(217, 119, 6, 0.08)"

// Mint (lys bakgrunn)
color="rgba(167, 243, 208, 0.12)"
```

### Sesongbaserte Farger
```tsx
// Ramadan (dypere)
color="rgba(16, 185, 129, 0.15)"

// Eid (festlig)
color="rgba(217, 119, 6, 0.12)"

// Vinter (kald)
color="rgba(59, 130, 246, 0.08)"
```

## ⚡ Ytelse og Optimalisering

### Tips for best ytelse:
1. **Bruk lav opacity**: Hold opacity under 0.15 for beste ytelse
2. **Moderat animasjon**: Scale 20-50 og speed 40-80 er optimalt
3. **Begrenset bruk**: Bruk på maks 2-3 steder per side
4. **Mobile**: Vurder å skru av animasjon på mobile

### Responsiv tilpasning:
```tsx
<EtherealShadow
  animation={{
    scale: window.innerWidth < 768 ? 20 : 50,
    speed: window.innerWidth < 768 ? 80 : 60
  }}
  // ... andre props
/>
```

## 🔧 Feilsøking

### Vanlige problemer:
1. **Komponenten vises ikke**: Sjekk at `framer-motion` er installert
2. **Animasjon er for aggressiv**: Reduser `scale` eller øk `speed`
3. **Farge passer ikke**: Juster `color` opacity til 0.05-0.15
4. **Performance issues**: Reduser `noise.opacity` eller skru av animasjon

### Browser kompatibilitet:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🌐 Demo Side

Besøk `/ethereal-demo` for å se alle varianter i aksjon:
- Full skjerm demo
- Hero seksjon demo
- Subtittel bakgrunn demo
- Implementering guide

## 📝 Avansert Bruk

### Custom mask image:
```tsx
<EtherealShadow
  // ... andre props
  style={{
    // Du kan override mask image hvis nødvendig
  }}
/>
```

### Dynamiske animasjoner:
```tsx
const [animationConfig, setAnimationConfig] = useState({
  scale: 30,
  speed: 50
});

<EtherealShadow
  animation={animationConfig}
  // ... andre props
/>
```

Komponenten er nå klar for bruk i hele Lillehammer Moske nettsiden! 🚀
