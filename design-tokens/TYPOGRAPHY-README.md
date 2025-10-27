# 🔤 DÁP Design System - Typography

Teljes tipográfiai rendszer a DÁP Design System UI Kit 1.2-ből.

## 📋 Tartalomjegyzék

- [Font Családok](#font-családok)
- [Font Méretek](#font-méretek)
- [Font Vastagságok](#font-vastagságok)
- [Line Heights](#line-heights)
- [Használat](#használat)
- [Szemantikus Stílusok](#szemantikus-stílusok)

---

## 🔤 Font Családok

### Primary & Secondary
```css
--family-primary: 'Inter', sans-serif;
--family-secondary: 'Inter', sans-serif;
```

**Inter** - Modern, olvasható, professzionális sans-serif betűtípus.

---

## 📏 Font Méretek

Teljes skála **17 mérettel** (2xs-től 12xl-ig):

| Token | Méret | Használat | CSS Változó |
|-------|-------|-----------|-------------|
| **2xs** | 10px | Apró jelölések | `--size-2xs` |
| **xs** | 12px | Kis címkék, badges | `--size-xs` |
| **sm** | 14px | Body text (kis), form mezők | `--size-sm` |
| **base** | 16px | Alapértelmezett body text | `--size-base` |
| **lg** | 18px | Nagy body text | `--size-lg` |
| **xl** | 20px | Alcímek | `--size-xl` |
| **2xl** | 22px | Kiemelések | `--size-2xl` |
| **3xl** | 24px | H3 címsorok | `--size-3xl` |
| **4xl** | 28px | H2 címsorok | `--size-4xl` |
| **5xl** | 32px | H1 címsorok | `--size-5xl` |
| **6xl** | 36px | Nagy címsorok | `--size-6xl` |
| **7xl** | 40px | Hero alcímek | `--size-7xl` |
| **8xl** | 46px | Hero címek | `--size-8xl` |
| **9xl** | 52px | Display text | `--size-9xl` |
| **10xl** | 58px | Kiemelt display | `--size-10xl` |
| **11xl** | 66px | Marketing címek | `--size-11xl` |
| **12xl** | 74px | Legnagyobb (hero) | `--size-12xl` |

### Aliasok
```css
--size-heading-1: 32px;  /* = 5xl */
--size-heading-2: 28px;  /* = 4xl */
```

---

## ⚖️ Font Vastagságok

| Token | Érték | Használat |
|-------|-------|-----------|
| **medium** | 500 | Body text, normál szöveg |
| **bold** | 700 | Címsorok, kiemelések |
| **medium-italic** | 500 + italic | Dőlt body text |
| **bold-italic** | 700 + italic | Dőlt címsorok |

---

## 📐 Line Heights

| Token | Érték | Használat |
|-------|-------|-----------|
| **heading** | 1.25 | Címsorok |
| **body** | 1.5 | Body text |
| **tight** | 1.2 | Sűrű szöveg, UI elemek |
| **relaxed** | 1.6 | Lazább olvashatóság |

---

## 🚀 Használat

### CSS

```css
/* Importáld a fájlt */
@import 'design-tokens/typography.css';

/* Használd a változókat */
h1 {
  font-family: var(--family-primary);
  font-size: var(--size-5xl);
  font-weight: var(--weight-bold);
  line-height: var(--line-height-heading);
}

p {
  font-family: var(--family-primary);
  font-size: var(--size-base);
  font-weight: var(--weight-medium);
  line-height: var(--line-height-body);
}

/* Vagy használd a utility osztályokat */
<h1 class="heading-1">Címsor</h1>
<p class="body-base">Bekezdés</p>
```

### SCSS

```scss
@import 'design-tokens/typography.scss';

// Használd a változókat
.title {
  font-family: $family-primary;
  font-size: $size-4xl;
  font-weight: $weight-bold;
}

// Vagy használd a mixineket
h1 {
  @include heading-1;
}

h2 {
  @include heading-2;
}

p {
  @include body-base;
}

// Responsive tipográfia
.hero-title {
  @include responsive-font(32px, 74px);
  @include font-smooth;
}

// Szöveg levágás
.card-title {
  @include text-truncate;
}

// Multi-line clamp
.description {
  @include text-clamp(3); // 3 sor után vágás
}
```

### Tailwind CSS

```jsx
// Minden méret elérhető Tailwind osztályként
<h1 className="text-5xl font-bold leading-heading">
  Nagy Címsor
</h1>

<p className="text-base font-medium leading-body">
  Normál bekezdés szöveg
</p>

// Font családok
<div className="font-primary">Inter betűtípus</div>

// Responsive méretek
<h1 className="text-4xl md:text-6xl lg:text-8xl">
  Responsive címsor
</h1>
```

### React / JavaScript

```javascript
import tokens from './design-tokens/design-tokens.json';

const heading1 = tokens.typography.heading["heading-1"].$value;
// {fontFamily: "Inter", fontSize: "32px", fontWeight: 700, ...}

const fontSize = tokens.typography.fontSize["2xl"].$value; // "22"
```

---

## 🎯 Szemantikus Stílusok

### Címsorok (Headings)

#### H1 - Fő Címsor
```css
.heading-1 {
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.64px;
}
```

#### H2 - Másodlagos Címsor
```css
.heading-2 {
  font-family: Inter;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.25;
}
```

#### H3 - H6
- **H3**: 24px, bold
- **H4**: 20px, bold
- **H5**: 18px, bold
- **H6**: 16px, bold

### Body Text

#### Body Large
```css
.body-large {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
}
```

#### Body Base (Alapértelmezett)
```css
.body-base {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
}
```

#### Body Small
```css
.body-small {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
}
```

### Labels / UI Text

#### Label (Alapértelmezett)
```css
.label {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
}
```

#### Label Small
```css
.label-small {
  font-size: 12px;
  font-weight: 700;
  line-height: 1.2;
}
```

---

## 💡 Best Practices

### 1. Méretválasztás

```
📱 Mobile UI:
- Body: sm (14px)
- Headings: xl-3xl (20-24px)

💻 Desktop UI:
- Body: base-lg (16-18px)
- Headings: 2xl-5xl (22-32px)

🎯 Hero Sections:
- Heading: 6xl-12xl (36-74px)
- Subheading: xl-3xl (20-24px)
```

### 2. Line Height Használat

```css
/* Címsoroknál */
h1 { line-height: var(--line-height-heading); } /* 1.25 */

/* Body textnél */
p { line-height: var(--line-height-body); } /* 1.5 */

/* UI elemeknél (gombok, labelek) */
.button { line-height: var(--line-height-tight); } /* 1.2 */
```

### 3. Responsive Stratégia

```scss
// Mobil alapértelmezett
.title {
  @include heading-3; // 24px
}

// Tablet
@media (min-width: 768px) {
  .title {
    @include heading-2; // 28px
  }
}

// Desktop
@media (min-width: 1024px) {
  .title {
    @include heading-1; // 32px
  }
}

// Vagy fluid/responsive
.hero-title {
  @include responsive-font(24px, 74px);
}
```

### 4. Accessibility

```css
/* Minimum méret olvashatósághoz */
body {
  font-size: var(--size-base); /* 16px minimum */
}

/* Kontrasztok figyelése */
.text-on-dark {
  color: var(--text-neutral-inverted);
  font-weight: var(--weight-medium); /* Ne legyen túl vékony */
}

/* Line-height a jobb olvashatóságért */
.long-text {
  line-height: var(--line-height-relaxed); /* 1.6 */
}
```

---

## 📊 Tipográfiai Skála Vizuálisan

```
12xl (74px) ████████████████████████ Hero
11xl (66px) ██████████████████████ Marketing
10xl (58px) ████████████████████ Large Display
9xl (52px)  ██████████████████ Display
8xl (46px)  ████████████████ Hero Title
7xl (40px)  ██████████████ Hero Subtitle
6xl (36px)  ████████████ Large Heading
5xl (32px)  ██████████ H1
4xl (28px)  ████████ H2
3xl (24px)  ██████ H3
2xl (22px)  ████ Large Text
xl (20px)   ███ H4 / Subtitle
lg (18px)   ██ Body Large
base (16px) ██ Body Base
sm (14px)   █ Body Small / Label
xs (12px)   ▓ Small Label
2xs (10px)  ░ Tiny Text
```

---

## 🔄 Frissítés Figmából

Ha a tipográfia változik a Figmában:

1. Nyisd meg a **Typography** oldalt a Figma Desktop-ban
2. Válaszd ki az oldalt
3. Futtasd újra a token extractort
4. A fájlok automatikusan frissülnek

---

**Generálva**: Figma MCP Server  
**Verzió**: 1.2.0  
**Font**: Inter (Google Fonts)  
**Utolsó frissítés**: 2025. október 27.

