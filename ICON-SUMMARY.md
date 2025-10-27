# 🎨 Icon Komponensek - Gyors Összefoglaló

**DÁP Design System UI Kit 1.2 + Remixicon (2700+ icons)**

---

## ✅ Amit Létrehoztam

### 📦 Fájlok

1. **`design-tokens/icons.css`** - Icon tokenek (méretek, színek, utility class-ok)
2. **`design-tokens/icons.scss`** - SCSS változók és mixinek
3. **`design-tokens/icons-demo.html`** - Interaktív demo
4. **`ICON-IMPORT-GUIDE.md`** - Részletes útmutató

---

## 🎯 Icon Tokenek

### Méretek (7 méret)
```css
--icon-size-xs: 12px
--icon-size-sm: 16px
--icon-size-md: 20px  /* alapértelmezett */
--icon-size-lg: 24px
--icon-size-xl: 32px
--icon-size-2xl: 48px
--icon-size-3xl: 64px
```

### Színek (10 variáns)
```css
--icon-color-default      /* neutral szürke */
--icon-color-brand        /* brand kék */
--icon-color-positive     /* zöld */
--icon-color-negative     /* piros */
--icon-color-warning      /* narancs */
--icon-color-info         /* kék */
--icon-color-inverted     /* fehér */
--icon-color-subtle       /* világos szürke */
--icon-color-muted        /* nagyon világos */
--icon-color-disabled     /* disabled szürke */
```

### Spacing
```css
--icon-spacing-xs: 4px
--icon-spacing-sm: 8px
--icon-spacing-md: 12px
--icon-spacing-lg: 16px
```

---

## 💻 Használat

### 1. Remixicon + Design Tokens (Ajánlott!)

```html
<!-- Icon Font + Design System Tokenek -->
<i class="ri-home-line icon-md icon-brand"></i>
<i class="ri-heart-fill icon-lg icon-negative"></i>

<!-- Button-ben -->
<button class="btn-primary">
  <i class="ri-add-line icon-md icon-inverted"></i>
  <span>Add Item</span>
</button>

<!-- Banner-ben -->
<div class="banner positive">
  <i class="ri-checkbox-circle-line icon-lg icon-inverted"></i>
  <span>Success!</span>
</div>
```

### 2. HTML + SVG Sprite (Alternatíva)

```html
<!-- Icon -->
<svg class="icon icon-md icon-brand icon-outline">
  <use href="#icon-plus"/>
</svg>

<!-- Button + Icon -->
<button class="btn-primary">
  <svg class="icon icon-md icon-outline icon-inverted">
    <use href="#icon-plus"/>
  </svg>
  <span>Add Item</span>
</button>

<!-- Icon Button -->
<button class="icon-btn" aria-label="Delete">
  <svg class="icon icon-md icon-outline">
    <use href="#icon-trash"/>
  </svg>
</button>
```

### 3. React + Remixicon (Ajánlott)

```bash
npm install remixicon
```

```jsx
import RemixIcon from './components/RemixIcon';

function MyButton() {
  return (
    <button className="btn-primary">
      <RemixIcon name="add-line" size="md" color="inverted" />
      <span>Add Item</span>
    </button>
  );
}
```

**Teljes komponens**: `components/RemixIcon.jsx`

### 4. SCSS Mixinek

```scss
.my-icon {
  @include icon('md', 'brand');
}

.my-button {
  @include icon-with-text('sm');
  
  .icon {
    @include icon('md', 'inverted');
  }
}

.my-icon-button {
  @include icon-button;
}
```

---

## 📚 Utility Class-ok

| Class | Leírás |
|-------|--------|
| `.icon-xs` | 12px icon |
| `.icon-sm` | 16px icon |
| `.icon-md` | 20px icon (alapértelmezett) |
| `.icon-lg` | 24px icon |
| `.icon-xl` | 32px icon |
| `.icon-brand` | Brand kék szín |
| `.icon-positive` | Zöld szín |
| `.icon-negative` | Piros szín |
| `.icon-outline` | Outline stílus (stroke, nem fill) |
| `.icon-with-text` | Icon + text layout (flex + gap) |
| `.icon-btn` | Icon button stílus |
| `.icon-spin` | Forgó animáció (loader) |

---

## 🚀 Icon Forrás

### ✅ Remixicon (Design System Választás)

**A DÁP Design System hivatalosan a Remixicon-t használja!**

```bash
npm install remixicon
```

**VAGY CDN:**
```html
<link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
```

- ✅ **2700+ icon** (Line + Fill variánsok)
- ✅ **Apache 2.0 License** (nyílt forráskód)
- ✅ **Design System integrációval**
- ✅ **React & Vue komponensek**
- ✅ [remixicon.com](https://remixicon.com/)

### Alternatívák:

1. **Heroicons** (Tailwind-hez)
   ```bash
   npm install @heroicons/react
   ```
   - 292 icon
   - [heroicons.com](https://heroicons.com/)

2. **Lucide Icons** (Ajánlott React/Vue-hoz)
   ```bash
   npm install lucide-react
   ```
   - 1000+ icon
   - Modern design
   - [lucide.dev](https://lucide.dev/)

3. **Phosphor Icons**
   ```bash
   npm install phosphor-react
   ```
   - 6000+ icon
   - 6 súly variáns
   - [phosphoricons.com](https://phosphoricons.com/)

### Van Icon oldal a Figmában?
1. Nyisd meg a Figma Desktop-ot
2. Navigálj az "Icons" vagy "Icon Library" oldalra
3. Használd a Figma MCP Server-t az exportáláshoz:
   ```
   "Exportáld ki az összes ikont SVG formátumban"
   ```

---

## 🎨 Demo-k

**Remixicon Demo** (Ajánlott): `design-tokens/remixicon-demo.html`
**Általános Icon Demo**: `design-tokens/icons-demo.html`

A demo-k tartalmaznak:
- ✅ 7 icon méret példa
- ✅ 10 icon szín variáns
- ✅ Icon + text kombinációk
- ✅ Icon button-ok
- ✅ Loading spinner animáció
- ✅ Interaktív SVG sprite példák

---

## 📖 Részletes Dokumentáció

Lásd: **`ICON-IMPORT-GUIDE.md`** - 3 importálási stratégia részletesen

---

## ⚡ Gyors Start (Remixicon)

### 1. Telepítés

```bash
npm install remixicon
```

**VAGY CDN:**
```html
<link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
```

### 2. Import CSS-ek
```html
<!-- Remixicon -->
<link rel="stylesheet" href="node_modules/remixicon/fonts/remixicon.css">

<!-- Design System Icon Tokenek -->
<link rel="stylesheet" href="design-tokens/icons.css">
```

### 3. Használat
```html
<!-- Alapértelmezett -->
<i class="ri-home-line"></i>

<!-- Design System Tokenekkel -->
<i class="ri-home-line icon-md icon-brand"></i>

<!-- Button-ben -->
<button class="btn-primary">
  <i class="ri-add-line icon-md icon-inverted"></i>
  <span>Add Item</span>
</button>
```

### 4. React (Opcionális)
```jsx
import RemixIcon from './components/RemixIcon';

<RemixIcon name="home-line" size="md" color="brand" />
```

**Részletes útmutató**: `REMIXICON-QUICKSTART.md`

---

## ✅ Best Practices

1. ✅ **Mindig használj CSS változókat** az icon méretekhez és színekhez
2. ✅ **Adj hozzá aria-label-t** az icon button-okhoz
3. ✅ **Használj icon-with-text class-t** icon + text kombinációkhoz
4. ✅ **Optimalizáld az SVG-ket** SVGO-val
5. ✅ **Használj icon sprite-ot** a teljesítményért

---

**Státusz**: ✅ Kész + Remixicon Integrálva  
**Tokenek**: 17 icon token (7 méret + 10 szín)  
**Icon Library**: Remixicon (2700+ icons, Apache 2.0)  
**Fájlok**: CSS, SCSS, Demo, React/Vue Komponensek, Útmutatók  
**Dátum**: 2025. október 27.

