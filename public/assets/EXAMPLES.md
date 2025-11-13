# Eksempler på filnavn og bruk

## 📸 Bilder - Eksempler

### Board medlemmer:
```
/assets/images/board/
├── board-chairman-ahmed-yusuf.jpg
├── board-secretary-fatima-alami.jpg
├── board-treasurer-mohammed-ali.jpg
└── board-member-maria-hansen.jpg
```

### Moske bilder:
```
/assets/images/mosque/
├── exterior-main-entrance.jpg
├── exterior-building-facade.jpg
├── interior-prayer-hall-wide.jpg
├── interior-prayer-hall-detail.jpg
├── interior-wudu-area.jpg
├── interior-classroom-quran.jpg
├── interior-library.jpg
└── interior-community-hall.jpg
```

### Arrangementer:
```
/assets/images/events/
├── ramadan-2024-iftar-1.jpg
├── ramadan-2024-iftar-2.jpg
├── eid-al-fitr-2024-prayer.jpg
├── eid-al-fitr-2024-celebration.jpg
├── quran-school-graduation-2024.jpg
├── community-gathering-summer-2024.jpg
└── interfaith-dialogue-2024.jpg
```

### Galleri bilder:
```
/assets/images/gallery/
├── gallery-01-prayer-hall.jpg
├── gallery-02-community.jpg
├── gallery-03-children-activities.jpg
├── gallery-04-ramadan.jpg
├── gallery-05-exterior.jpg
└── gallery-06-interior.jpg
```

## 📄 CSV-filer - Eksempler

### Bønnetider:
```
/public/data/
├── Bonnetid_Lillehammer_2025-11.csv
├── Bonnetid_Lillehammer_2025-12.csv
├── Bonnetid_Lillehammer_2026-01.csv
└── Bonnetid_Lillehammer_2026-02.csv
```

## 🎨 Logoer og ikoner - Eksempler

### Logoer:
```
/assets/logos/
├── lillehammer-moske-logo.svg
├── lillehammer-moske-logo-white.svg
├── lillehammer-moske-logo-horizontal.svg
└── lillehammer-moske-icon.svg
```

### Ikoner:
```
/assets/icons/
├── prayer-times.svg
├── quran-school.svg
├── donation.svg
├── community.svg
├── mosque-building.svg
└── calendar.svg
```

## 💻 Kode-eksempler

### Bruk i React komponenter:
```tsx
// Board bilde
<img 
  src="/assets/images/board/board-chairman-ahmed-yusuf.jpg" 
  alt="Ahmed Yusuf, Leder av Lillehammer Moske" 
  className="w-32 h-32 rounded-full object-cover"
/>

// Moske bilde
<img 
  src="/assets/images/mosque/exterior-main-entrance.jpg" 
  alt="Hovedinngangen til Lillehammer Moske" 
  className="w-full h-64 object-cover rounded-lg"
/>

// Logo
<img 
  src="/assets/logos/lillehammer-moske-logo.svg" 
  alt="Lillehammer Moske Logo" 
  className="h-10 w-auto"
/>

// Ikon
<img 
  src="/assets/icons/prayer-times.svg" 
  alt="Bønnetider" 
  className="w-6 h-6"
/>
```

### Bruk i CSS:
```css
.hero-section {
  background-image: url('/assets/images/mosque/exterior-building-facade.jpg');
  background-size: cover;
  background-position: center;
}

.board-member-image {
  background-image: url('/assets/images/board/board-chairman-ahmed-yusuf.jpg');
}
```

## 📝 Tips for filnavn

1. **Bruk små bokstaver**: `board-member.jpg` (ikke `Board-Member.jpg`)
2. **Bruk bindestrek**: `community-gathering.jpg` (ikke `community gathering.jpg`)
3. **Vær deskriptiv**: `ramadan-2024-iftar.jpg` (ikke `img001.jpg`)
4. **Inkluder dato**: `eid-2024-celebration.jpg`
5. **Unike navn**: Unngå duplikater i forskjellige mapper

## 🚀 Beste praksis

1. **Komprimer bilder**: Bruk verktøy som TinyPNG eller Squoosh
2. **Bruk riktig format**: WebP for bedre ytelse, SVG for logoer
3. **Alt-text**: Alltid beskrivende alt-text for tilgjengelighet
4. **Responsive**: Bruk riktig størrelse for ulike skjermstørrelser
5. **Organisering**: Hold mapper ryddige, slett ubrukte filer
