# DÁP Design System - Design Tokens

🎨 **Teljes színpaletta és design tokenek** a DÁP Design System UI Kit 1.2-ből automatikusan kinyerve a Figmából.

## 📦 Tartalom

Ez a könyvtár tartalmazza a DÁP Design System összes design tokenjét különböző formátumokban:

- **`colors.css`** - CSS változók (378+ szín)
- **`colors.scss`** - SCSS változók + mixinek
- **`typography.css`** - Tipográfiai tokenek
- **`spacing.css`** - Távolság tokenek
- **`design-tokens.json`** - Design Tokens Community Group formátum
- **`tailwind.config.js`** - Tailwind CSS konfiguráció

## 🎨 Színrendszer

### Szemantikus Színek

#### 🟢 Semantic Green (Siker/Success)
- **20 árnyalat**: 100-2000
- **11 alpha változat**: 5-100
- **Használat**: Sikeres műveletek, pozitív visszajelzések
- **Fő szín**: `#007b24` (1000)

```css
/* CSS */
.success { background-color: var(--semantic-green-700); }

/* Tailwind */
<div class="bg-semantic-green-700">Siker!</div>

/* SCSS */
.success { @include success-bg; @include success-text; }
```

#### 🔵 Semantic Blue (Információ)
- **20 árnyalat**: 100-2000
- **11 alpha változat**: 5-100
- **Használat**: Információs üzenetek, linkek
- **Fő szín**: `#006faa` (1000)

#### 🟠 Semantic Orange (Figyelmeztetés)
- **20 árnyalat**: 100-2000
- **11 alpha változat**: 5-100
- **Használat**: Figyelmeztetések, fontos információk
- **Fő szín**: `#a65200` (1000)

#### 🔴 Semantic Red (Hiba)
- **20 árnyalat**: 100-2000
- **11 alpha változat**: 5-100
- **Használat**: Hibaüzenetek, veszélyes műveletek
- **Fő szín**: `#d40d00` (1000)

### Márka Színek

#### 🟣 Indigo (Elsődleges márka szín)
- **20 árnyalat**: 100-2000
- **11 alpha változat**: 5-100
- **Fő szín**: `#4258ed` (1000)
- **Használat**: Elsődleges gombok, kiemelések

#### 💜 Violet
- **20 árnyalat**: 100-2000
- **11 alpha változat**: 5-100
- **Fő szín**: `#8445db` (1000)
- **Használat**: Akcentusok, gradiensek

### Semleges Színek

#### 🌫️ Cold Grey
- **20 árnyalat**: 100-2000
- **11 alpha változat**: 5-100
- **Használat**: Szövegek, háttér, szegélyek
- **Leggyakoribb árnyalatok**:
  - 100: `#f5f7fa` - Világos háttér
  - 700: `#a3abba` - Placeholder szöveg
  - 1000: `#606b7a` - Normál szöveg
  - 1700: `#1c1f26` - Erős szöveg
  - 1800: `#181b22` - Legsötétebb

#### ⚫ Black & ⚪ White
- **11 alpha változat mindkettőnél**: 5-100
- **Használat**: Átlátszóságok, overlay-ek

### Extra Színek

#### 🐚 Teal
- **20 árnyalat + 11 alpha**
- **Fő szín**: `#027671` (1000)

#### 🔷 Azure
- **20 árnyalat + 11 alpha**
- **Fő szín**: `#01719d` (1000)

## 📊 Teljes statisztika

- **Összes szín**: 370+
- **Színcsaládok**: 10
- **Alpha változatok**: 88
- **Semantic színek**: 4 kategória
- **Márkaszínek**: 2 kategória

## 🚀 Használat

### CSS

```css
/* Importáld a színeket */
@import 'design-tokens/colors.css';

/* Használd a változókat */
.button-primary {
  background-color: var(--indigo-1000);
  color: var(--white-100);
  border-radius: var(--radius-large);
  padding: var(--spacing-400) var(--spacing-600);
}

.alert-success {
  background-color: var(--semantic-green-100);
  color: var(--semantic-green-700);
  border-left: 4px solid var(--semantic-green-500);
}
```

### SCSS

```scss
@import 'design-tokens/colors.scss';

.button-primary {
  background-color: $indigo-1000;
  color: $white-100;
  
  &:hover {
    background-color: $indigo-900;
  }
}

// Használd a mixineket
.alert-success {
  @include success-bg;
  @include success-text;
  @include success-border;
}

// Gradiensek
.hero {
  @include gradient-primary;
}
```

### Tailwind CSS

```jsx
// Telepítsd a Tailwind config-ot
// tailwind.config.js már konfigurálva van!

function Button() {
  return (
    <button className="bg-indigo-1000 hover:bg-indigo-900 text-white-100 px-600 py-400 rounded-large">
      Kattints ide
    </button>
  );
}

function Alert() {
  return (
    <div className="bg-semantic-green-100 text-semantic-green-700 border-l-4 border-semantic-green-500 p-400">
      Sikeres művelet!
    </div>
  );
}
```

### React / JavaScript

```javascript
import tokens from './design-tokens/design-tokens.json';

const primaryColor = tokens.color.indigo["1000"].$value; // "#4258ed"
const spacing = tokens.spacing["400"].$value; // "16"
```

## 🎨 Színválasztási útmutató

### Mikor használj milyen színt?

#### ✅ Sikeres műveletek
```
Háttér: semantic-green-100
Szöveg: semantic-green-700
Border: semantic-green-500
```

#### ℹ️ Információk
```
Háttér: semantic-blue-100
Szöveg: semantic-blue-700
Border: semantic-blue-500
```

#### ⚠️ Figyelmeztetések
```
Háttér: semantic-orange-100
Szöveg: semantic-orange-700
Border: semantic-orange-500
```

#### ❌ Hibák
```
Háttér: semantic-red-100
Szöveg: semantic-red-700
Border: semantic-red-500
```

#### 🔘 Elsődleges gombok
```
Háttér: indigo-1000
Szöveg: white-100
Hover: indigo-900
```

#### 🔲 Másodlagos gombok
```
Háttér: cold-grey-200
Szöveg: cold-grey-1700
Hover: cold-grey-300
```

### Szöveg színek
```
Erős/címsor: cold-grey-1700 (#1c1f26)
Normál: cold-grey-1000 (#606b7a)
Finom: cold-grey-700 (#a3abba)
Placeholder: cold-grey-700 (#a3abba)
```

### Háttér színek
```
Fehér: white-100
Világos: cold-grey-100
Közepes: cold-grey-200
Sötét: cold-grey-1800
```

## 📐 Egyéb Tokenek

### Spacing (Távolságok)
```
0, 100 (4px), 200 (8px), 400 (16px), 600 (24px),
1000 (40px), 1200 (48px), 1600 (64px), 2000 (80px), 3000 (120px)
```

### Border Radius
```
none: 0
small: 4px
large: 16px
rounded: 1000px (teljes kör)
```

### Typography
```
Font: Inter
Méretek: sm (14px), xl (20px), heading-1 (32px), heading-2 (28px), 9xl (52px), 12xl (74px)
Súlyok: medium (500), bold (700)
```

## 🔄 Frissítés Figmából

Ha változnak a design tokenek a Figmában:

1. Nyisd meg a Figma Desktop alkalmazást
2. Navigálj a Color vagy Typography oldalra
3. Válaszd ki az oldalt vagy frame-et
4. Futtasd a token extractor scriptet
5. A fájlok automatikusan frissülnek

## 📚 További információk

- **Figma fájl**: DÁP Design System UI Kit 1.2
- **Formátum**: Design Tokens Community Group
- **Verzió**: 1.2.0

## 💡 Tippek

1. **Konzisztencia**: Mindig a tokeneket használd, ne hardcoded színeket
2. **Dark mode**: Az alpha változatok segítenek átlátszó rétegek létrehozásában
3. **Accessibility**: A 700-1700 árnyalatok megfelelő kontrasztot biztosítanak
4. **Szemantika**: Használd a semantic színeket a megfelelő kontextusban

---

**Generálva**: Figma MCP Server használatával  
**Utolsó frissítés**: 2025. október 27.
