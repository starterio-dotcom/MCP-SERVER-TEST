# 🎨 Remixicon Integráció - DÁP Design System

**Remixicon** - 2700+ nyílt forráskódú icon, Apache 2.0 License

---

## 📦 Telepítés

### 1. NPM (Ajánlott)

```bash
npm install remixicon
```

### 2. CDN (Gyors start)

```html
<!-- CSS (Font alapú) -->
<link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">

<!-- VAGY SVG Sprite -->
<script src="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/dist/remixicon.min.js"></script>
```

### 3. Letöltés

```bash
# Remixicon repository letöltése
git clone https://github.com/Remix-Design/RemixIcon.git
```

---

## 🎯 Használati Módok

### Módszer 1: Icon Font (Legegyszerűbb)

#### Import

```html
<!-- HTML -->
<link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
```

```css
/* CSS (NPM esetén) */
@import 'remixicon/fonts/remixicon.css';
```

#### Használat

```html
<!-- Line style (outline) -->
<i class="ri-home-line"></i>
<i class="ri-heart-line"></i>
<i class="ri-user-line"></i>

<!-- Fill style (solid) -->
<i class="ri-home-fill"></i>
<i class="ri-heart-fill"></i>
<i class="ri-user-fill"></i>
```

#### Design System Tokenekkel

```html
<!-- Icon + méret + szín -->
<i class="ri-home-line icon-md icon-brand"></i>
<i class="ri-heart-fill icon-lg icon-negative"></i>
<i class="ri-user-line icon-xl icon-default"></i>

<!-- Button-ben -->
<button class="btn-primary">
  <i class="ri-add-line icon-md icon-inverted"></i>
  <span>Add Item</span>
</button>
```

---

### Módszer 2: SVG Sprite (Teljesítmény)

#### Setup

```html
<!-- Remixicon SVG sprite betöltése -->
<script src="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/dist/remixicon.min.js"></script>
```

#### Használat

```html
<svg class="icon icon-md icon-brand icon-outline">
  <use xlink:href="/path/to/remixicon.symbol.svg#ri-home-line"></use>
</svg>
```

---

### Módszer 3: React Komponensek

#### Telepítés

```bash
npm install @remixicon/react
```

#### Használat

```jsx
import { RiHomeLine, RiHeartFill, RiAddLine } from '@remixicon/react';

function MyComponent() {
  return (
    <>
      {/* Alapértelmezett (24px) */}
      <RiHomeLine />
      
      {/* Custom méret és szín */}
      <RiHomeLine 
        size={20}
        color="var(--icon-color-brand)"
      />
      
      {/* Button-ben */}
      <button className="btn-primary">
        <RiAddLine 
          size={20}
          color="var(--icon-color-inverted)"
        />
        <span>Add Item</span>
      </button>
      
      {/* Design system osztályokkal */}
      <RiHeartFill 
        className="icon-md icon-negative"
      />
    </>
  );
}
```

---

### Módszer 4: Vue Komponensek

```bash
npm install @remixicon/vue
```

```vue
<template>
  <RiHomeLine />
  
  <RiHomeLine 
    :size="20"
    :color="'var(--icon-color-brand)'"
  />
  
  <button class="btn-primary">
    <RiAddLine :size="20" class="icon-inverted" />
    <span>Add Item</span>
  </button>
</template>

<script setup>
import { RiHomeLine, RiAddLine } from '@remixicon/vue';
</script>
```

---

## 🎨 Design System Integráció

### Icon Tokenekkel

```html
<!-- Méret tokenek (icons.css) -->
<i class="ri-home-line icon-xs"></i>   <!-- 12px -->
<i class="ri-home-line icon-sm"></i>   <!-- 16px -->
<i class="ri-home-line icon-md"></i>   <!-- 20px -->
<i class="ri-home-line icon-lg"></i>   <!-- 24px -->
<i class="ri-home-line icon-xl"></i>   <!-- 32px -->

<!-- Szín tokenek (icons.css) -->
<i class="ri-home-line icon-brand"></i>       <!-- Brand kék -->
<i class="ri-home-line icon-positive"></i>    <!-- Zöld -->
<i class="ri-home-line icon-negative"></i>    <!-- Piros -->
<i class="ri-home-line icon-warning"></i>     <!-- Narancs -->
<i class="ri-home-line icon-inverted"></i>    <!-- Fehér -->
```

### CSS Felülírás

```css
/* Custom Remixicon méret CSS változókkal */
.ri-home-line.icon-md {
  font-size: var(--icon-size-md, 20px);
  color: var(--icon-color-brand);
}

/* Vagy globálisan */
.ri-lg {
  font-size: var(--icon-size-lg) !important;
}
```

---

## 🧩 Komponens Példák

### Button Primary + Remixicon

```html
<button class="btn-primary">
  <i class="ri-add-line icon-md icon-inverted"></i>
  <span>Add Item</span>
</button>

<button class="btn-primary destructive">
  <i class="ri-delete-bin-line icon-md icon-inverted"></i>
  <span>Delete</span>
</button>

<button class="btn-outline">
  <i class="ri-edit-line icon-md icon-brand"></i>
  <span>Edit</span>
</button>

<button class="btn-subtle">
  <i class="ri-save-line icon-md icon-brand"></i>
  <span>Save</span>
</button>
```

### Banner + Remixicon

```html
<div class="banner positive">
  <i class="ri-checkbox-circle-line icon-lg icon-inverted"></i>
  <span>Success! Operation completed successfully.</span>
</div>

<div class="banner warning">
  <i class="ri-alert-line icon-lg" style="color: var(--banner-text-warning);"></i>
  <span>Warning: Please review your settings.</span>
</div>

<div class="banner negative">
  <i class="ri-error-warning-line icon-lg icon-inverted"></i>
  <span>Error: Something went wrong.</span>
</div>

<div class="banner informative">
  <i class="ri-information-line icon-lg icon-inverted"></i>
  <span>Info: New updates available.</span>
</div>
```

### Icon Button

```html
<button class="icon-btn" aria-label="Add">
  <i class="ri-add-line icon-md"></i>
</button>

<button class="icon-btn" aria-label="Delete">
  <i class="ri-delete-bin-line icon-md"></i>
</button>

<button class="icon-btn" aria-label="Settings">
  <i class="ri-settings-line icon-md"></i>
</button>

<button class="icon-btn" aria-label="Search">
  <i class="ri-search-line icon-md"></i>
</button>
```

### Form Fields + Remixicon

```html
<div class="field-group">
  <label>
    <i class="ri-user-line icon-sm icon-subtle"></i>
    Username
  </label>
  <input class="field" type="text" placeholder="Enter username">
</div>

<div class="field-group">
  <label>
    <i class="ri-mail-line icon-sm icon-subtle"></i>
    Email
  </label>
  <input class="field" type="email" placeholder="Enter email">
</div>

<div class="field-group">
  <label>
    <i class="ri-lock-line icon-sm icon-subtle"></i>
    Password
  </label>
  <input class="field" type="password" placeholder="Enter password">
</div>
```

### Navigation + Remixicon

```html
<nav class="nav">
  <a href="#" class="nav-item">
    <i class="ri-home-line icon-md"></i>
    <span>Home</span>
  </a>
  
  <a href="#" class="nav-item">
    <i class="ri-dashboard-line icon-md"></i>
    <span>Dashboard</span>
  </a>
  
  <a href="#" class="nav-item">
    <i class="ri-settings-line icon-md"></i>
    <span>Settings</span>
  </a>
  
  <a href="#" class="nav-item">
    <i class="ri-user-line icon-md"></i>
    <span>Profile</span>
  </a>
</nav>
```

---

## 🎯 Népszerű Remixicon Nevek

### Általános Műveletek

| Icon | Név | Használat |
|------|-----|-----------|
| ➕ | `ri-add-line` / `ri-add-fill` | Hozzáadás |
| ✏️ | `ri-edit-line` / `ri-edit-fill` | Szerkesztés |
| 🗑️ | `ri-delete-bin-line` / `ri-delete-bin-fill` | Törlés |
| 💾 | `ri-save-line` / `ri-save-fill` | Mentés |
| 🔍 | `ri-search-line` / `ri-search-fill` | Keresés |
| ⚙️ | `ri-settings-line` / `ri-settings-fill` | Beállítások |
| ✓ | `ri-check-line` / `ri-check-fill` | Megerősítés |
| ✕ | `ri-close-line` / `ri-close-fill` | Bezárás |

### Navigáció

| Icon | Név |
|------|-----|
| 🏠 | `ri-home-line` / `ri-home-fill` |
| 📊 | `ri-dashboard-line` / `ri-dashboard-fill` |
| 👤 | `ri-user-line` / `ri-user-fill` |
| 📧 | `ri-mail-line` / `ri-mail-fill` |
| 🔔 | `ri-notification-line` / `ri-notification-fill` |
| ❤️ | `ri-heart-line` / `ri-heart-fill` |

### Állapot Ikonok

| Icon | Név | Használat |
|------|-----|-----------|
| ✅ | `ri-checkbox-circle-line` | Siker |
| ⚠️ | `ri-alert-line` | Figyelmeztetés |
| ❌ | `ri-error-warning-line` | Hiba |
| ℹ️ | `ri-information-line` | Információ |
| ⏳ | `ri-loader-line` | Töltés (spinner-rel) |

### Nyilak & Irányok

| Icon | Név |
|------|-----|
| ▶ | `ri-arrow-right-line` |
| ◀ | `ri-arrow-left-line` |
| ▲ | `ri-arrow-up-line` |
| ▼ | `ri-arrow-down-line` |
| 〉 | `ri-arrow-right-s-line` (kis nyíl) |

---

## 📚 Teljes Icon Lista

**Online Böngésző**: [remixicon.com](https://remixicon.com/)

**Kategóriák**:
- Business (76 icon)
- Communication (94 icon)
- Design (71 icon)
- Development (85 icon)
- Device (71 icon)
- Document (66 icon)
- Editor (98 icon)
- Finance (32 icon)
- Health & Medical (31 icon)
- Logos (231 icon)
- Map (38 icon)
- Media (72 icon)
- System (179 icon)
- User & Faces (85 icon)
- Weather (26 icon)
- ... és még sok más!

**Összesen: 2700+ icon** 🎉

---

## 🎨 SCSS Helper

```scss
// remixicon-helpers.scss
@mixin remixicon($name, $size: 'md', $color: 'default') {
  @extend .ri-#{$name};
  @include icon-size($size);
  @include icon-color($color);
}

// Használat:
.my-home-icon {
  @include remixicon('home-line', 'lg', 'brand');
}
```

---

## ⚡ React Wrapper Komponens

```jsx
// RemixIcon.jsx
import React from 'react';

const RemixIcon = ({ 
  name,           // pl. "home-line"
  size = 'md',    // xs, sm, md, lg, xl, 2xl, 3xl
  color = 'default', // default, brand, positive, negative, etc.
  className = ''
}) => {
  const sizeClass = `icon-${size}`;
  const colorClass = `icon-${color}`;
  
  return (
    <i className={`ri-${name} ${sizeClass} ${colorClass} ${className}`} />
  );
};

export default RemixIcon;

// Használat:
<RemixIcon name="home-line" size="md" color="brand" />
<RemixIcon name="heart-fill" size="lg" color="negative" />
```

---

## 🚀 Vue Wrapper Komponens

```vue
<!-- RemixIcon.vue -->
<template>
  <i :class="iconClasses"></i>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: { type: String, required: true },
  size: { type: String, default: 'md' },
  color: { type: String, default: 'default' }
});

const iconClasses = computed(() => [
  `ri-${props.name}`,
  `icon-${props.size}`,
  `icon-${props.color}`
]);
</script>

<!-- Használat: -->
<RemixIcon name="home-line" size="md" color="brand" />
<RemixIcon name="heart-fill" size="lg" color="negative" />
```

---

## 🎯 Best Practices

### 1. Konzisztens Névkonvenció

```html
<!-- ✅ JÓ - line stílus UI elemekhez -->
<i class="ri-home-line"></i>
<i class="ri-settings-line"></i>

<!-- ✅ JÓ - fill stílus kiemelt elemekhez -->
<i class="ri-heart-fill"></i>
<i class="ri-star-fill"></i>
```

### 2. Accessibility

```html
<!-- ✅ JÓ - aria-label icon button-oknál -->
<button class="icon-btn" aria-label="Delete item">
  <i class="ri-delete-bin-line icon-md"></i>
</button>

<!-- ✅ JÓ - aria-hidden dekoratív iconoknál -->
<div>
  <i class="ri-check-line icon-positive" aria-hidden="true"></i>
  <span>Success message</span>
</div>
```

### 3. Teljesítmény

```html
<!-- ✅ JÓ - Font betöltése egyszer -->
<link rel="preload" href="remixicon.css" as="style">
<link rel="stylesheet" href="remixicon.css">

<!-- ❌ ROSSZ - Minden icon külön SVG -->
<img src="home.svg">
<img src="settings.svg">
```

---

## 📦 Package.json

```json
{
  "dependencies": {
    "remixicon": "^3.5.0"
  }
}
```

---

## 🔧 Tailwind Config Frissítés

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      // Remixicon font family
      fontFamily: {
        'remixicon': ['remixicon'],
      },
    },
  },
}
```

---

## ✅ Összefoglaló

### Remixicon Előnyei:
- ✅ **2700+ icon** (Line + Fill variánsok)
- ✅ **Nyílt forráskód** (Apache 2.0 License)
- ✅ **Könnyen integrálható** (Font, SVG, React, Vue)
- ✅ **Jó dokumentáció** (remixicon.com)
- ✅ **Aktív fejlesztés** (GitHub)
- ✅ **Teljesítmény** (Font vagy SVG sprite)

### Design System Integráció:
- ✅ **Icon tokenek** használhatók (méret, szín)
- ✅ **Utility class-ok** működnek
- ✅ **Komponensekkel** kompatibilis
- ✅ **React/Vue wrapper** komponensek

---

**Következő lépés**: Nyisd meg a demo-t! 🎨  
**Demo**: `design-tokens/remixicon-demo.html`  
**Dokumentáció**: [remixicon.com](https://remixicon.com/)  
**GitHub**: [github.com/Remix-Design/RemixIcon](https://github.com/Remix-Design/RemixIcon)

