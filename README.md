# 🎨 DÁP Design System UI Kit 1.2

**Verzió**: 1.2.0  
**Utolsó frissítés**: 2025. október 27.  
**Státusz**: ✅ Production Ready

---

## 📦 Mi ez a projekt?

Ez a repository a **DÁP Design System UI Kit 1.2** teljes implementációját tartalmazza:

- ✅ **931 design token** (Foundation + Component tokenek)
- ✅ **Button komponens** (React, Vue, HTML/CSS)
- ✅ **Remixicon integráció** (2700+ ikon)
- ✅ **6 output formátum** (CSS, SCSS, Tailwind, JSON, React, Vue)
- ✅ **Figma MCP szerver integráció**

**Forrás**: [Figma - DÁP Design System UI Kit 1.2](https://www.figma.com/design/wlzFe2hkjpLnBYiNfZbLBM/D%C3%81P_Design_System_UI_Kit_1.2)

---

## 🚀 Gyors Kezdés

### 1. Telepítés

```bash
# NPM install (Remixicon + opcionális React/Vue)
npm install

# Remixicon használat (CDN)
# Lásd: design-tokens/remixicon-demo.html
```

### 2. Design Tokenek Használata

#### CSS Változók
```html
<!-- HTML -->
<link rel="stylesheet" href="design-tokens/colors.css">
<link rel="stylesheet" href="design-tokens/typography.css">
<link rel="stylesheet" href="design-tokens/spacing.css">
<link rel="stylesheet" href="design-tokens/borders.css">
<link rel="stylesheet" href="design-tokens/elevation.css">
<link rel="stylesheet" href="design-tokens/icons.css">
<link rel="stylesheet" href="design-tokens/components.css">
```

```css
/* CSS */
.my-card {
  background-color: var(--background-neutral-strong);
  color: var(--text-neutral-strong);
  padding: var(--spacing-400);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--elevation-200);
}
```

#### SCSS
```scss
// SCSS
@import 'design-tokens/colors.scss';
@import 'design-tokens/typography.scss';

.my-heading {
  @include heading-1; // Heading 1 style
  color: color('text-neutral-strong');
}
```

#### Tailwind CSS
```javascript
// tailwind.config.js
module.exports = require('./tailwind.config.js');
```

```html
<!-- HTML -->
<div class="bg-background-neutral-strong text-text-neutral-strong p-400 rounded-medium shadow-elevation-200">
  My Card
</div>
```

### 3. Button Komponens Használata

#### React
```tsx
import Button from './components/Button/Button';

function App() {
  return (
    <div>
      <Button variant="primary" size="large" icon="add-line">
        Add Item
      </Button>
      <Button variant="outline" color="negative" icon="delete-bin-line">
        Delete
      </Button>
      <Button variant="subtle" quiet icon="more-line" iconOnly />
    </div>
  );
}
```

#### Vue
```vue
<template>
  <div>
    <Button variant="primary" size="large" icon="add-line">
      Add Item
    </Button>
    <Button variant="outline" color="negative" icon="delete-bin-line">
      Delete
    </Button>
    <Button variant="subtle" quiet icon="more-line" iconOnly />
  </div>
</template>

<script setup>
import Button from './components/Button/Button.vue';
</script>
```

#### HTML/CSS
```html
<button class="dap-button dap-button--primary dap-button--large">
  <i class="ri-add-line icon-lg icon-inverted"></i>
  <span>Add Item</span>
</button>
```

---

## 📂 Projekt Struktúra

```
mcp-server-test/
│
├── design-tokens/               # Design tokenek (931 token)
│   ├── colors.css               # 370+ színtoken
│   ├── colors.scss              # SCSS változat
│   ├── typography.css           # 40+ tipográfia token
│   ├── typography.scss          # SCSS változat
│   ├── spacing.css              # 11 spacing token
│   ├── spacing.scss             # SCSS változat
│   ├── borders.css              # 16 border token
│   ├── borders.scss             # SCSS változat
│   ├── elevation.css            # 12 elevation token
│   ├── elevation.scss           # SCSS változat
│   ├── icons.css                # 17 icon token
│   ├── icons.scss               # SCSS változat
│   ├── components.css           # 465 komponens token
│   ├── components.scss          # SCSS változat
│   ├── design-tokens.json       # JSON formátum (DTCG spec)
│   ├── README.md                # Token dokumentáció
│   ├── example.html             # Token példák
│   ├── remixicon-demo.html      # Remixicon demo
│   ├── components-demo.html     # Komponens token demo
│   ├── icons-demo.html          # Icon token demo
│   └── elevation-example.html   # Elevation demo
│
├── components/                  # UI komponensek
│   ├── Button/                  # Button komponens
│   │   ├── Button.tsx           # React komponens
│   │   ├── Button.vue           # Vue komponens
│   │   ├── Button.css           # CSS stílusok
│   │   ├── Button.scss          # SCSS stílusok
│   │   ├── Button.demo.html     # Demo
│   │   └── README.md            # Dokumentáció
│   ├── RemixIcon.jsx            # React ikon wrapper
│   └── RemixIcon.vue            # Vue ikon wrapper
│
├── tailwind.config.js           # Tailwind konfiguráció
├── package.json                 # NPM dependencies
│
├── BUTTON-COMPONENT-SUMMARY.md  # Button komponens teljes dokumentáció
├── COMPLETE-TOKEN-SUMMARY.md    # Összes token összefoglalás
├── TOKEN-CHECKLIST.md           # Token checklist
├── EXTRACTION-SUMMARY.md        # Extraction összefoglaló
├── COMPONENT-TOKENS-SUMMARY.md  # Komponens tokenek
├── ICON-SUMMARY.md              # Icon tokenek
├── ICON-IMPORT-GUIDE.md         # Icon import útmutató
├── REMIXICON-SETUP.md           # Remixicon telepítés
├── REMIXICON-QUICKSTART.md      # Remixicon gyors útmutató
├── ELEVATION-README.md          # Elevation dokumentáció
└── README.md                    # Ez a fájl
```

---

## 🎨 Design Tokenek

### Foundation Tokenek (466 token)

| Kategória | Token Szám | Fájlok |
|-----------|------------|--------|
| **Colors** | 370+ | colors.css, colors.scss |
| **Typography** | 40+ | typography.css, typography.scss |
| **Spacing** | 11 | spacing.css, spacing.scss |
| **Border Radius** | 5 | borders.css, borders.scss |
| **Border Width** | 3 | borders.css, borders.scss |
| **Border Colors** | 8 | borders.css, borders.scss |
| **Elevation** | 12 | elevation.css, elevation.scss |
| **Icons** | 17 | icons.css, icons.scss |

### Component Tokenek (465 token)

| Komponens | Token Szám | Leírás |
|-----------|------------|--------|
| **Button Primary** | 48 | Elsődleges gombok |
| **Button Outline** | 90 | Másodlagos gombok |
| **Button Subtle** | 144 | Harmadlagos gombok |
| **Button Toggle** | 54 | Toggle gombok |
| **Banner** | 69 | Banner komponens |
| **Link** | 36 | Link komponens |
| **Form Fields** | 18 | Input mezők |
| **Subtitle** | 3 | Alfelirat |
| **Title** | 3 | Cím |

---

## 🧩 Komponensek

### ✅ Button

**Státusz**: Teljes implementáció kész

#### Variánsok:
- **Primary** - Elsődleges műveletek (Save, Submit)
- **Outline** - Másodlagos műveletek (Cancel, Back)
- **Subtle** - Harmadlagos műveletek (Filter, Sort) + Quiet variáns
- **Toggle** - Ki/be kapcsolható gombok (Favorite, Star)

#### Méretek:
- Large (48px)
- Medium (40px)
- Small (32px)
- XSmall (24px)

#### Állapotok:
- Enabled, Hover, Pressed, Focused, Disabled, Loading

#### Színek:
- Brand (kék), Negative (piros), Inverted (fehér), Neutral (szürke)

📖 **Dokumentáció**: [BUTTON-COMPONENT-SUMMARY.md](./BUTTON-COMPONENT-SUMMARY.md)  
🎬 **Demo**: `components/Button/Button.demo.html`

---

## 🎨 Ikonok (Remixicon)

**Ikonkönyvtár**: [Remixicon](https://remixicon.com/) (2700+ ikon, Apache 2.0)

### Telepítés

```bash
npm install remixicon
```

**VAGY** CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
```

### Használat

```html
<!-- Alap ikon -->
<i class="ri-home-line"></i>

<!-- Design System tokenekkel -->
<i class="ri-home-line icon-md icon-brand"></i>

<!-- Button-ben -->
<Button icon="add-line">Add Item</Button>
```

📖 **Dokumentáció**: [ICON-SUMMARY.md](./ICON-SUMMARY.md), [REMIXICON-SETUP.md](./REMIXICON-SETUP.md)  
🎬 **Demo**: `design-tokens/remixicon-demo.html`

---

## 📐 Output Formátumok

### 1. **CSS Variables** (.css)
```css
:root {
  --text-neutral-strong: #1c1f26;
  --spacing-400: 16px;
  --border-radius-medium: 8px;
}
```

### 2. **SCSS Variables** (.scss)
```scss
$text-neutral-strong: #1c1f26;
$spacing-400: 16px;

@mixin heading-1 {
  font-size: 32px;
  font-weight: 700;
}
```

### 3. **Tailwind Config** (tailwind.config.js)
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'text-neutral-strong': '#1c1f26',
      },
      spacing: {
        '400': '16px',
      }
    }
  }
}
```

### 4. **JSON (DTCG spec)** (design-tokens.json)
```json
{
  "colors": {
    "text": {
      "neutral": {
        "strong": {
          "$value": "#1c1f26",
          "$type": "color"
        }
      }
    }
  }
}
```

### 5. **React Components** (.tsx)
```tsx
import Button from './components/Button/Button';
import RemixIcon from './components/RemixIcon';
```

### 6. **Vue Components** (.vue)
```vue
<script setup>
import Button from './components/Button/Button.vue';
import RemixIcon from './components/RemixIcon.vue';
</script>
```

---

## 🔗 Figma MCP Szerver

### Mi az a Figma MCP?

A Figma MCP (Model Context Protocol) szerver lehetővé teszi, hogy közvetlenül a Figma Desktop alkalmazásból olvassunk ki design adatokat, komponenseket és változókat.

### Beállítás

1. **Figma Desktop megnyitása** → [DÁP Design System fájl](https://www.figma.com/design/wlzFe2hkjpLnBYiNfZbLBM/D%C3%81P_Design_System_UI_Kit_1.2)
2. **Dev Mode** → **Inspect panel** → **"Enable desktop MCP server"**
3. **Cursor IDE** → `Ctrl+Shift+P` → "MCP: Add Server"
4. **URL**: `http://127.0.0.1:3845/mcp`
5. **Server ID**: `figma-mcp`

📖 **Dokumentáció**: Lásd a repo root-ban a `.cursorrules` fájlt

---

## 📚 Dokumentáció

### Általános
- 📖 [README.md](./README.md) - Ez a fájl
- 📋 [TOKEN-CHECKLIST.md](./TOKEN-CHECKLIST.md) - Token checklist
- ✅ [COMPLETE-TOKEN-SUMMARY.md](./COMPLETE-TOKEN-SUMMARY.md) - Teljes token összefoglaló
- 📊 [EXTRACTION-SUMMARY.md](./EXTRACTION-SUMMARY.md) - Extraction összefoglaló

### Tokenek
- 🎨 [design-tokens/README.md](./design-tokens/README.md) - Token használati útmutató
- 🧩 [COMPONENT-TOKENS-SUMMARY.md](./COMPONENT-TOKENS-SUMMARY.md) - Komponens tokenek
- 🎭 [ELEVATION-README.md](./ELEVATION-README.md) - Elevation tokenek

### Ikonok
- 🖼️ [ICON-SUMMARY.md](./ICON-SUMMARY.md) - Icon token összefoglaló
- 📥 [ICON-IMPORT-GUIDE.md](./ICON-IMPORT-GUIDE.md) - Icon import stratégiák
- ⚡ [REMIXICON-SETUP.md](./REMIXICON-SETUP.md) - Remixicon telepítés
- 🚀 [REMIXICON-QUICKSTART.md](./REMIXICON-QUICKSTART.md) - Remixicon gyors útmutató

### Komponensek
- 🔘 [BUTTON-COMPONENT-SUMMARY.md](./BUTTON-COMPONENT-SUMMARY.md) - Button komponens teljes dokumentáció
- 📖 [components/Button/README.md](./components/Button/README.md) - Button használati útmutató

### Demók
- 🎬 [design-tokens/example.html](./design-tokens/example.html) - Token példák
- 🎬 [design-tokens/remixicon-demo.html](./design-tokens/remixicon-demo.html) - Remixicon demo
- 🎬 [design-tokens/components-demo.html](./design-tokens/components-demo.html) - Komponens tokenek demo
- 🎬 [design-tokens/icons-demo.html](./design-tokens/icons-demo.html) - Icon tokenek demo
- 🎬 [design-tokens/elevation-example.html](./design-tokens/elevation-example.html) - Elevation demo
- 🎬 [components/Button/Button.demo.html](./components/Button/Button.demo.html) - Button demo

---

## 🎯 Használati Példák

### 1. Egyszerű Card Komponens

```html
<div class="card">
  <h2 class="card-title">Card Title</h2>
  <p class="card-text">Card description text</p>
  <button class="dap-button dap-button--primary dap-button--medium">
    <i class="ri-arrow-right-line icon-md icon-inverted"></i>
    <span>Learn More</span>
  </button>
</div>

<style>
.card {
  background-color: var(--background-neutral-strong);
  color: var(--text-neutral-strong);
  padding: var(--spacing-600);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--elevation-200);
}

.card-title {
  font-size: var(--font-size-heading-2);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-300);
}

.card-text {
  font-size: var(--font-size-base);
  line-height: var(--line-height-body);
  margin-bottom: var(--spacing-400);
}
</style>
```

### 2. Form Layout

```html
<form class="form">
  <div class="form-field">
    <label for="name" class="form-label">Név</label>
    <input 
      type="text" 
      id="name" 
      class="form-input"
      style="
        background-color: var(--field-background-default);
        border: var(--border-width-base) solid var(--border-color-neutral-base);
        border-radius: var(--border-radius-small);
        padding: var(--spacing-200) var(--spacing-300);
      "
    />
  </div>
  
  <div class="form-actions">
    <Button variant="outline" color="neutral">
      Cancel
    </Button>
    <Button variant="primary" color="brand" icon="check-line">
      Submit
    </Button>
  </div>
</form>
```

### 3. Banner / Alert

```html
<div class="banner banner-positive">
  <i class="ri-check-circle-line icon-md icon-positive"></i>
  <span>Your changes have been saved successfully!</span>
  <button class="dap-button dap-button--subtle dap-button--quiet dap-button--xsmall">
    <i class="ri-close-line icon-xs icon-default"></i>
  </button>
</div>

<style>
.banner {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-300) var(--spacing-400);
  border-radius: var(--border-radius-small);
}

.banner-positive {
  background-color: var(--banner-background-positive);
  color: var(--text-neutral-strong);
}
</style>
```

---

## ♿ Accessibility

### Focus States
Minden interaktív elem rendelkezik focus ring-el:

```css
:focus-visible {
  outline: none;
  box-shadow: 
    var(--focus-outer-ring) 0px 0px 0px 3px, 
    var(--focus-inner-ring) 0px 0px 0px 5px;
}
```

### ARIA Attribútumok
```html
<!-- Icon only button -->
<button class="dap-button dap-button--primary dap-button--icon-only" aria-label="Add item">
  <i class="ri-add-line icon-md icon-inverted" aria-hidden="true"></i>
</button>

<!-- Toggle button -->
<button 
  class="dap-button dap-button--toggle" 
  aria-pressed="false"
  role="button"
>
  Favorite
</button>
```

### Keyboard Navigation
- **Tab**: Focus következő elemre
- **Shift+Tab**: Focus előző elemre
- **Enter/Space**: Button aktiválás

---

## 🌗 Dark Mode

### Inverted Színek
Dark mode-ban használd az `inverted` színeket:

```html
<div style="background: var(--neutral-1700); padding: 40px;">
  <Button variant="primary" color="inverted">
    Light Button on Dark Background
  </Button>
</div>
```

---

## 📱 Responsive Design

### Breakpoints (Tailwind)
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  }
}
```

### Responsive Button Példa
```tsx
<Button 
  className="btn-small md:btn-medium lg:btn-large"
  variant="primary"
>
  Responsive Button
</Button>
```

---

## 🚀 Performance

- **CSS bundle**: ~30KB (minified + gzipped)
- **Button komponens**: ~2KB (minified + gzipped)
- **Remixicon**: ~50KB (font) vagy ~800KB (SVG sprite)
- **Zero runtime dependencies** (csak icon library)
- **Tree-shakeable** (ESM support)

---

## 🧪 Testing

### React Testing Library

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './components/Button/Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('calls onClick handler', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click</Button>);
  fireEvent.click(screen.getByText('Click'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

---

## 🛠️ Fejlesztés

### Token Update
Ha frissíted a Figma design system-et:

1. Nyisd meg a Figma fájlt
2. Ellenőrizd, hogy a MCP szerver fut (Dev Mode → Inspect)
3. Futtasd újra a token extractiont a Figma MCP szerver segítségével

### Új Komponens Hozzáadása

1. Hozd létre a komponens mappát: `components/MyComponent/`
2. Implementáld: `MyComponent.tsx`, `MyComponent.vue`, `MyComponent.css`
3. Dokumentáld: `MyComponent/README.md`
4. Demó: `MyComponent/MyComponent.demo.html`

---

## 📄 License

**MIT License**

Copyright (c) 2025 DÁP Design Team

---

## 🤝 Contributing

Contributions welcome! Kérlek, nyiss issue-t vagy pull request-et.

---

## 📞 Kapcsolat

- **Design System**: [Figma Link](https://www.figma.com/design/wlzFe2hkjpLnBYiNfZbLBM/D%C3%81P_Design_System_UI_Kit_1.2)
- **Issues**: GitHub Issues
- **Email**: design@dap.com (példa)

---

**Készítette**: AI Assistant + DÁP Design Team  
**Verzió**: 1.2.0  
**Dátum**: 2025. október 27.  
**Státusz**: ✅ Production Ready 🚀
