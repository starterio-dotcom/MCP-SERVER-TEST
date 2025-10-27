# 🎨 Icon Komponensek Importálási Útmutató

**DÁP Design System UI Kit 1.2** - Icon kezelés és best practices

---

## 📋 Jelenlegi Helyzet

### ✅ Mit Találtunk az Export.json-ban?

Az `export.json` fájlban **csak icon színek (color tokens) vannak**, nem maguk az icon fájlok:

```json
{
  "button-primary": {
    "icon": {
      "enabled": "{white.100}",      // #ffffff
      "inverted": "{brand.1000}",    // #4258ed
      "disabled": "{neutral.100}"    // világosszürke
    }
  }
}
```

### ❌ Mit NEM Találtunk?

- ❌ SVG icon fájlok
- ❌ Icon library komponensek
- ❌ Icon méret tokenek
- ❌ Icon specifikus spacing

---

## 🎯 Icon Importálási Stratégiák

Az ikonokat **3 különböző módon** lehet importálni a design systemből:

### 1️⃣ **Figma MCP Server - Icon Export** (Ajánlott!)

Ha a Figmában van egy dedikált **Icons** oldal vagy **Icon Library**, akkor:

#### Lépések:

1. **Navigálj a Figma Desktop-ban az Icons oldalra**
2. **Válaszd ki az icon komponenseket**
3. **Használd az MCP `get_design_context` funkciót**

```javascript
// MCP-vel kinyerhető:
// - Icon SVG kód
// - Icon méretek
// - Icon szín variánsok
```

#### Példa parancs:
```bash
# Cursor-ban
"Navigálj a Figma Icons oldalra és exportáld ki az összes ikont SVG formátumban"
```

---

### 2️⃣ **Figma Plugin - SVG Export**

Ha nincs MCP hozzáférés, használj Figma plugint:

#### Ajánlott Pluginek:

1. **Iconify** - Icon library exportálás
   - Támogatja az SVG sprite generálást
   - Automatikus icon naming
   
2. **SVG Export** - Batch SVG export
   - Exportál minden ikont egyszerre
   - Optimalizálja az SVG-ket

3. **SVGOMG** - SVG optimalizálás
   - Csökkenti a file méretet
   - Tisztítja az SVG kódot

#### Workflow:
```
Figma Icon Components
    ↓
Plugin (Iconify/SVG Export)
    ↓
Optimalizált SVG fájlok
    ↓
Icon Library (React/Vue/JS)
```

---

### 3️⃣ **Icon Library Integráció** (Modern megoldás)

Használj népszerű icon library-t, ami kompatibilis a design systemmel:

#### Ajánlott Icon Library-k:

1. **Heroicons** (Tailwind készítők)
   - 292 icon
   - Outline és solid variánsok
   - React, Vue támogatás
   - MIT License

2. **Lucide Icons** (Feather Icons fork)
   - 1000+ icon
   - Kiváló minőség
   - Tree-shakeable
   - React, Vue, Angular támogatás

3. **Material Icons** (Google)
   - 2000+ icon
   - Filled, Outlined, Rounded, Sharp variánsok
   - Sok framework támogatás

4. **Phosphor Icons**
   - 6000+ icon
   - 6 súly variáns
   - Modern design

#### Telepítés:

```bash
# Heroicons
npm install @heroicons/react

# Lucide
npm install lucide-react

# Material Icons
npm install @mui/icons-material

# Phosphor
npm install phosphor-react
```

---

## 🎨 Icon Token Rendszer

### Icon Színek (Már Megvan!)

Az icon színek már tokenizálva vannak a `components.css`-ben:

```css
:root {
  /* Button Primary Icons */
  --button-primary-icon-enabled: var(--white-100, #ffffff);
  --button-primary-icon-inverted: var(--color-brand-1000, #4258ed);
  --button-primary-icon-disabled: var(--neutral-100);
  
  /* Button Outline Icons */
  --button-outline-icon-enabled: var(--color-brand-1000, #4258ed);
  --button-outline-icon-disabled: var(--neutral-900, #e9edf2);
  
  /* Button Subtle Icons */
  --button-subtle-icon-enabled: var(--color-brand-1000, #4258ed);
  --button-subtle-icon-disabled: var(--neutral-900);
  
  /* Banner Icons */
  --banner-icon-brand: var(--white-100);
  --banner-icon-positive: var(--white-100);
  --banner-icon-warning: var(--neutral-2000);
  --banner-icon-negative: var(--white-100);
}
```

### Icon Méretek (Javasolt Tokenek)

Ha még nincsenek icon méret tokenek, add hozzá:

```css
:root {
  /* Icon Sizes */
  --icon-size-xs: 12px;
  --icon-size-sm: 16px;
  --icon-size-md: 20px;
  --icon-size-lg: 24px;
  --icon-size-xl: 32px;
  --icon-size-2xl: 48px;
}
```

---

## 💻 Használati Példák

### 1. React + Heroicons

```jsx
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

function MyButton() {
  return (
    <button className="btn-primary">
      <PlusIcon 
        className="w-5 h-5" 
        style={{ color: 'var(--button-primary-icon-enabled)' }}
      />
      <span>Add Item</span>
    </button>
  );
}
```

### 2. React + Lucide Icons

```jsx
import { Plus, Trash2 } from 'lucide-react';

function MyButton() {
  return (
    <button className="btn-primary">
      <Plus 
        size={20} 
        color="var(--button-primary-icon-enabled)"
      />
      <span>Add Item</span>
    </button>
  );
}
```

### 3. Vanilla JS + SVG Sprite

```html
<!-- Icon sprite (icons.svg) -->
<svg style="display: none;">
  <symbol id="icon-plus" viewBox="0 0 24 24">
    <path d="M12 5v14m-7-7h14"/>
  </symbol>
  <symbol id="icon-trash" viewBox="0 0 24 24">
    <path d="M3 6h18m-2 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"/>
  </symbol>
</svg>

<!-- Használat -->
<button class="btn-primary">
  <svg class="icon" style="color: var(--button-primary-icon-enabled)">
    <use href="#icon-plus"/>
  </svg>
  <span>Add Item</span>
</button>

<style>
.icon {
  width: var(--icon-size-md, 20px);
  height: var(--icon-size-md, 20px);
  fill: currentColor;
}
</style>
```

### 4. CSS Background Icons

```css
.btn-with-icon::before {
  content: '';
  display: inline-block;
  width: var(--icon-size-md);
  height: var(--icon-size-md);
  background-image: url('data:image/svg+xml,...');
  background-size: contain;
  margin-right: var(--spacing-200);
}
```

---

## 🏗️ Icon Komponens Létrehozása

### React Icon Wrapper

```jsx
// Icon.jsx
import React from 'react';
import * as HeroIcons from '@heroicons/react/24/outline';

const Icon = ({ 
  name, 
  size = 'md', 
  color = 'currentColor',
  className = '' 
}) => {
  const IconComponent = HeroIcons[name];
  
  const sizeMap = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  };
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  return (
    <IconComponent 
      className={`${sizeMap[size]} ${className}`}
      style={{ color }}
    />
  );
};

export default Icon;

// Használat:
<Icon name="PlusIcon" size="md" color="var(--button-primary-icon-enabled)" />
```

### Vue Icon Wrapper

```vue
<!-- Icon.vue -->
<template>
  <component 
    :is="iconComponent" 
    :class="sizeClass"
    :style="{ color }"
  />
</template>

<script setup>
import { computed } from 'vue';
import * as HeroIcons from '@heroicons/vue/24/outline';

const props = defineProps({
  name: String,
  size: { type: String, default: 'md' },
  color: { type: String, default: 'currentColor' }
});

const iconComponent = computed(() => HeroIcons[props.name]);

const sizeClass = computed(() => {
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  };
  return sizes[props.size];
});
</script>

<!-- Használat: -->
<Icon name="PlusIcon" size="md" :color="'var(--button-primary-icon-enabled)'" />
```

---

## 📦 Icon Library Setup (Projektbe integráció)

### 1. Package.json

```json
{
  "dependencies": {
    "@heroicons/react": "^2.0.18",
    "lucide-react": "^0.263.1"
  }
}
```

### 2. Icon Registry (Opcionális)

```javascript
// iconRegistry.js
import { 
  PlusIcon, 
  TrashIcon, 
  PencilIcon,
  CheckIcon 
} from '@heroicons/react/24/outline';

export const iconRegistry = {
  plus: PlusIcon,
  trash: TrashIcon,
  pencil: PencilIcon,
  check: CheckIcon,
  // ... további ikonok
};

// Használat:
import { iconRegistry } from './iconRegistry';

const MyIcon = iconRegistry['plus'];
```

### 3. TypeScript Típusok

```typescript
// icons.types.ts
import { ComponentType, SVGProps } from 'react';

export type IconName = 
  | 'plus' 
  | 'trash' 
  | 'pencil' 
  | 'check'
  // ... további ikonok

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps {
  name: IconName;
  size?: IconSize;
  color?: string;
  className?: string;
}
```

---

## 🎨 Figmából Icon Exportálás (Részletes Lépések)

### Lépés 1: Keress Icon Oldalt a Figmában

1. Nyisd meg a **DÁP Design System UI Kit 1.2** fájlt
2. Nézd meg a bal oldali **Pages** panelt
3. Keress **"Icons"**, **"Icon Library"**, vagy **"Assets"** nevű oldalt

### Lépés 2: MCP-vel Exportálás

Ha van Icons oldal:

```bash
# Cursor-ban
"Navigálj a Figma Icons oldalra"
"Exportáld ki az összes ikont SVG formátumban"
"Mentsd el őket az icons/ mappába"
```

### Lépés 3: SVG Optimalizálás

```bash
# SVGO használata
npm install -g svgo
svgo -f icons/ -o icons-optimized/

# Vagy online: https://jakearchibald.github.io/svgomg/
```

### Lépés 4: Icon Sprite Generálás

```javascript
// generate-sprite.js
const fs = require('fs');
const path = require('path');

const iconsDir = './icons-optimized';
const icons = fs.readdirSync(iconsDir);

let sprite = '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n';

icons.forEach(icon => {
  const name = path.basename(icon, '.svg');
  const svg = fs.readFileSync(path.join(iconsDir, icon), 'utf8');
  
  // Extract viewBox and path
  const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1] || '0 0 24 24';
  const content = svg.match(/<svg[^>]*>(.*)<\/svg>/s)?.[1] || '';
  
  sprite += `  <symbol id="icon-${name}" viewBox="${viewBox}">\n`;
  sprite += `    ${content}\n`;
  sprite += `  </symbol>\n`;
});

sprite += '</svg>';

fs.writeFileSync('./icon-sprite.svg', sprite);
console.log('✅ Icon sprite generated!');
```

---

## ✅ Best Practices

### 1. Konzisztens Icon Méret

```css
/* Használj CSS változókat */
.icon {
  width: var(--icon-size-md);
  height: var(--icon-size-md);
}

/* NE hardcode-old */
.icon {
  width: 20px; /* ❌ */
  height: 20px; /* ❌ */
}
```

### 2. Accessibility

```jsx
// ✅ JÓ - Descriptive aria-label
<button aria-label="Add new item">
  <Icon name="plus" />
</button>

// ❌ ROSSZ - Nincs label
<button>
  <Icon name="plus" />
</button>
```

### 3. Icon + Text Spacing

```css
.btn-with-icon {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-200); /* Design system spacing! */
}
```

### 4. Dark Mode Support

```css
:root {
  --icon-color-default: var(--neutral-1600);
}

[data-theme="dark"] {
  --icon-color-default: var(--neutral-200);
}
```

---

## 🚀 Következő Lépések

### Azonnal Megtehető:

1. ✅ Ellenőrizd a Figmában, van-e **Icons** oldal
2. ✅ Ha van, használd az **MCP szervert** az exportáláshoz
3. ✅ Ha nincs, válassz egy **icon library-t** (Heroicons/Lucide)
4. ✅ Telepítsd és integráld a projektbe

### Rövidtávú:

1. ⏳ Hozz létre **Icon méret tokeneket** (`icon-sizes.css`)
2. ⏳ Készíts **Icon wrapper komponenst** (React/Vue/JS)
3. ⏳ Dokumentáld az **elérhető ikonokat**

### Hosszútávú:

1. ⏳ **Icon library dokumentáció** (Storybook)
2. ⏳ **Automatikus icon export** CI/CD-vel
3. ⏳ **Icon search** funkció

---

## 📚 További Források

- [Heroicons](https://heroicons.com/) - Tailwind icon library
- [Lucide Icons](https://lucide.dev/) - Modern icon library
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimizer
- [Figma Icon Best Practices](https://www.figma.com/best-practices/component-architecture/icon-system/)

---

## 🎯 Összefoglalás

### Van Icon Oldal a Figmában?
→ **MCP-vel exportáld ki** az SVG-ket

### Nincs Icon Oldal?
→ **Használj icon library-t** (Heroicons/Lucide)

### Icon Színek
→ **Már tokenizálva vannak** (`components.css`)

### Icon Méretek
→ **Adj hozzá tokeneket** (`icon-sizes.css`)

---

**Státusz**: 📋 Útmutató  
**Következő lépés**: Ellenőrizd a Figma Icons oldalt!  
**Dátum**: 2025. október 27.

