# ⚡ Remixicon Gyors Telepítés

**A DÁP Design System Remixicon ikonkönyvtárat használ** (2700+ icon)

---

## 🚀 Gyors Start (3 lépés)

### 1️⃣ Telepítés (NPM)

```bash
npm install remixicon
```

**VAGY CDN** (azonnali használat):

```html
<link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
```

---

### 2️⃣ CSS Import

```css
/* CSS fájlban */
@import 'remixicon/fonts/remixicon.css';
```

**VAGY** HTML-ben:

```html
<link rel="stylesheet" href="node_modules/remixicon/fonts/remixicon.css">
```

---

### 3️⃣ Használat

```html
<!-- Alapértelmezett -->
<i class="ri-home-line"></i>
<i class="ri-heart-fill"></i>

<!-- Design System tokenekkel -->
<i class="ri-home-line icon-md icon-brand"></i>
<i class="ri-heart-fill icon-lg icon-negative"></i>

<!-- Button-ben -->
<button class="btn-primary">
  <i class="ri-add-line icon-md icon-inverted"></i>
  <span>Add Item</span>
</button>
```

---

## 📦 React Komponens

### Telepítés

```bash
npm install remixicon
```

### Komponens (másolható)

```jsx
// components/RemixIcon.jsx
import React from 'react';

const RemixIcon = ({ name, size = 'md', color = 'default', className = '' }) => {
  return (
    <i className={`ri-${name} icon-${size} icon-${color} ${className}`} />
  );
};

export default RemixIcon;

// Használat:
<RemixIcon name="home-line" size="md" color="brand" />
```

**Teljes komponens**: `components/RemixIcon.jsx`

---

## 🎨 Vue Komponens

### Komponens (másolható)

```vue
<!-- components/RemixIcon.vue -->
<template>
  <i :class="`ri-${name} icon-${size} icon-${color} ${className}`" />
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  size: { type: String, default: 'md' },
  color: { type: String, default: 'default' },
  className: { type: String, default: '' }
});
</script>

<!-- Használat: -->
<RemixIcon name="home-line" size="md" color="brand" />
```

**Teljes komponens**: `components/RemixIcon.vue`

---

## 🎯 Népszerű Ikonok

| Művelet | Icon Név | Line | Fill |
|---------|----------|------|------|
| Hozzáadás | `add` | `ri-add-line` | `ri-add-fill` |
| Szerkesztés | `edit` | `ri-edit-line` | `ri-edit-fill` |
| Törlés | `delete-bin` | `ri-delete-bin-line` | `ri-delete-bin-fill` |
| Mentés | `save` | `ri-save-line` | `ri-save-fill` |
| Keresés | `search` | `ri-search-line` | `ri-search-fill` |
| Beállítások | `settings` | `ri-settings-line` | `ri-settings-fill` |
| Home | `home` | `ri-home-line` | `ri-home-fill` |
| Felhasználó | `user` | `ri-user-line` | `ri-user-fill` |
| Szív | `heart` | `ri-heart-line` | `ri-heart-fill` |
| Csillag | `star` | `ri-star-line` | `ri-star-fill` |
| Siker | `checkbox-circle` | `ri-checkbox-circle-line` | `ri-checkbox-circle-fill` |
| Hiba | `error-warning` | `ri-error-warning-line` | `ri-error-warning-fill` |
| Figyelmeztetés | `alert` | `ri-alert-line` | `ri-alert-fill` |
| Info | `information` | `ri-information-line` | `ri-information-fill` |

**Teljes lista**: [remixicon.com](https://remixicon.com/)

---

## 💻 Példa Kód

### HTML + Design Tokens

```html
<!-- Buttons -->
<button class="btn-primary">
  <i class="ri-add-line icon-md icon-inverted"></i>
  <span>Add Item</span>
</button>

<button class="btn-outline">
  <i class="ri-edit-line icon-md icon-brand"></i>
  <span>Edit</span>
</button>

<!-- Banners -->
<div class="banner positive">
  <i class="ri-checkbox-circle-line icon-lg icon-inverted"></i>
  <span>Success message!</span>
</div>

<div class="banner negative">
  <i class="ri-error-warning-line icon-lg icon-inverted"></i>
  <span>Error message!</span>
</div>

<!-- Icon Buttons -->
<button class="icon-btn" aria-label="Delete">
  <i class="ri-delete-bin-line icon-md"></i>
</button>

<!-- Navigation -->
<nav class="nav">
  <a href="#" class="nav-item">
    <i class="ri-home-line icon-md"></i>
    <span>Home</span>
  </a>
  <a href="#" class="nav-item">
    <i class="ri-dashboard-line icon-md"></i>
    <span>Dashboard</span>
  </a>
</nav>
```

### React

```jsx
import RemixIcon from './components/RemixIcon';

function MyComponent() {
  return (
    <>
      <button className="btn-primary">
        <RemixIcon name="add-line" size="md" color="inverted" />
        <span>Add Item</span>
      </button>
      
      <div className="banner positive">
        <RemixIcon name="checkbox-circle-line" size="lg" color="inverted" />
        <span>Success message!</span>
      </div>
    </>
  );
}
```

### Vue

```vue
<template>
  <button class="btn-primary">
    <RemixIcon name="add-line" size="md" color="inverted" />
    <span>Add Item</span>
  </button>
  
  <div class="banner positive">
    <RemixIcon name="checkbox-circle-line" size="lg" color="inverted" />
    <span>Success message!</span>
  </div>
</template>

<script setup>
import RemixIcon from './components/RemixIcon.vue';
</script>
```

---

## 🎨 Design System Token Méretek

| Class | Méret | CSS Változó |
|-------|-------|-------------|
| `icon-xs` | 12px | `var(--icon-size-xs)` |
| `icon-sm` | 16px | `var(--icon-size-sm)` |
| `icon-md` | 20px | `var(--icon-size-md)` |
| `icon-lg` | 24px | `var(--icon-size-lg)` |
| `icon-xl` | 32px | `var(--icon-size-xl)` |
| `icon-2xl` | 48px | `var(--icon-size-2xl)` |
| `icon-3xl` | 64px | `var(--icon-size-3xl)` |

## 🎨 Design System Token Színek

| Class | Szín | Használat |
|-------|------|-----------|
| `icon-default` | Neutral szürke | Alapértelmezett |
| `icon-brand` | Brand kék | Márka színnel |
| `icon-positive` | Zöld | Siker, pozitív |
| `icon-negative` | Piros | Hiba, negatív |
| `icon-warning` | Narancs | Figyelmeztetés |
| `icon-info` | Kék | Információ |
| `icon-inverted` | Fehér | Sötét háttéren |
| `icon-disabled` | Világos szürke | Letiltott |

---

## 🎯 Demo

**Nyisd meg böngészőben**: `design-tokens/remixicon-demo.html`

Demo tartalmaz:
- ✅ Összes icon méret példa
- ✅ Összes icon szín példa
- ✅ Button komponensek Remixicon-nal
- ✅ Banner komponensek Remixicon-nal
- ✅ Form fields Remixicon-nal
- ✅ Navigation Remixicon-nal
- ✅ Népszerű ikonok showcase

---

## 📚 Dokumentáció

- **Részletes útmutató**: `REMIXICON-SETUP.md`
- **Icon tokenek**: `design-tokens/icons.css`
- **React komponens**: `components/RemixIcon.jsx`
- **Vue komponens**: `components/RemixIcon.vue`
- **Demo**: `design-tokens/remixicon-demo.html`
- **Remixicon honlap**: [remixicon.com](https://remixicon.com/)

---

## ✅ Checklist

- [ ] `npm install remixicon` (vagy CDN)
- [ ] CSS import (`remixicon.css`)
- [ ] Design System token CSS import (`icons.css`)
- [ ] React/Vue komponens (opcionális)
- [ ] Demo kipróbálása
- [ ] Icon lista böngészése: [remixicon.com](https://remixicon.com/)

---

**Remixicon**: 2700+ icon | Apache 2.0 License | Line + Fill variánsok  
**Design System**: 931 token (17 icon token + 465 component token + 449 foundation token)  
**Státusz**: ✅ Production Ready

