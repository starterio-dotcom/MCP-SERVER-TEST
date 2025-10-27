# 🔘 Button Component - DÁP Design System

**Forrás**: [Figma - Button Component](https://www.figma.com/design/wlzFe2hkjpLnBYiNfZbLBM/D%C3%81P_Design_System_UI_Kit_1.2?node-id=564-1370)

A Button komponens a DÁP Design System alapvető interakciós eleme. 4 variáns, 4 méret, több szín és állapot érhető el.

---

## 📦 Telepítés

```bash
# Ha külön package-ben
npm install @dap-ds/button

# Vagy másold be a components/Button mappát
```

---

## 🎨 Variánsok

### 1. **Primary** - Elsődleges műveletekhez
Kitöltött háttér, magas kontrasztú. **Ajánlott**: főműveletek (Save, Submit, Continue).

### 2. **Outline** - Másodlagos műveletekhez
Csak kerettel, átlátszó háttér. **Ajánlott**: secondary actions (Cancel, Back).

### 3. **Subtle** - Harmadlagos műveletekhez
Enyhe háttér, finom megjelenés. **Ajánlott**: kisebb műveletek, inline actions.

### 4. **Toggle** - Ki/be kapcsolható
Két állapot: selected/unselected. **Ajánlott**: filters, toolbar toggles.

---

## 📐 Méretek

| Méret | Magasság | Font Size | Icon Size | Padding | Használat |
|-------|----------|-----------|-----------|---------|-----------|
| **Large** | 48px | 18px | 24px | 24px | Hősziget, landing page CTA |
| **Medium** | 40px | 16px | 20px | 16px | Általános használat (default) |
| **Small** | 32px | 14px | 16px | 12px | Compact UI, sűrűbb elrendezés |
| **XSmall** | 24px | 12px | 12px | 8px | Inline actions, table rows |

---

## 🎨 Színek

| Szín | Használat | Variánsok |
|------|-----------|-----------|
| **Brand** (default) | Általános műveletek | Primary, Outline, Subtle |
| **Negative** | Destruktív műveletek (Delete, Remove) | Primary, Outline, Subtle |
| **Inverted** | Sötét háttéren (hero sections) | Primary, Outline, Subtle |
| **Neutral** | Semleges műveletek | Subtle, Toggle |

---

## ⚡ React Használat

### Alap Példák

```tsx
import { Button } from '@dap-ds/button';
// VAGY
import Button from './components/Button/Button';

function MyComponent() {
  return (
    <>
      {/* Primary button */}
      <Button variant="primary" size="large" icon="add-line">
        Add Item
      </Button>
      
      {/* Outline button */}
      <Button variant="outline" size="medium" color="negative" icon="delete-bin-line">
        Delete
      </Button>
      
      {/* Icon only button */}
      <Button 
        variant="primary" 
        iconOnly 
        icon="search-line" 
        aria-label="Search" 
      />
      
      {/* Toggle button */}
      <Button 
        variant="toggle" 
        selected={isSelected} 
        onClick={() => setIsSelected(!isSelected)}
      >
        Favorite
      </Button>
      
      {/* Loading button */}
      <Button variant="primary" loading disabled>
        Saving...
      </Button>
    </>
  );
}
```

### Összetett Példák

```tsx
// Form buttons
<div className="form-actions">
  <Button variant="outline" size="medium">
    Cancel
  </Button>
  <Button variant="primary" size="medium" type="submit">
    Save Changes
  </Button>
</div>

// Destructive action with confirmation
<Button 
  variant="primary" 
  color="negative" 
  icon="delete-bin-line"
  onClick={handleDelete}
>
  Delete Account
</Button>

// Icon on right
<Button 
  variant="primary" 
  icon="arrow-right-line" 
  iconPosition="right"
>
  Next Step
</Button>

// Full width
<Button variant="primary" fullWidth>
  Sign Up Now
</Button>

// Subtle quiet (no border)
<Button variant="subtle" quiet icon="more-line" iconOnly />
```

---

## 🎭 Vue Használat

```vue
<template>
  <!-- Primary button -->
  <Button variant="primary" size="large" icon="add-line">
    Add Item
  </Button>
  
  <!-- Outline button -->
  <Button 
    variant="outline" 
    size="medium" 
    color="negative" 
    icon="delete-bin-line"
  >
    Delete
  </Button>
  
  <!-- Toggle button -->
  <Button 
    variant="toggle" 
    :selected="isSelected" 
    @click="isSelected = !isSelected"
  >
    Favorite
  </Button>
  
  <!-- Loading button -->
  <Button variant="primary" :loading="true">
    Saving...
  </Button>
</template>

<script setup>
import { ref } from 'vue';
import Button from './components/Button/Button.vue';

const isSelected = ref(false);
</script>
```

---

## 🌐 HTML + CSS Használat

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <link rel="stylesheet" href="design-tokens/colors.css">
  <link rel="stylesheet" href="design-tokens/typography.css">
  <link rel="stylesheet" href="design-tokens/spacing.css">
  <link rel="stylesheet" href="design-tokens/components.css">
  <link rel="stylesheet" href="components/Button/Button.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css">
</head>
<body>
  <!-- Primary button -->
  <button class="btn btn-primary btn-large">
    <i class="ri-add-line icon-lg icon-inverted"></i>
    <span class="btn-text">Add Item</span>
  </button>
  
  <!-- Outline button -->
  <button class="btn btn-outline btn-medium btn-negative">
    <i class="ri-delete-bin-line icon-md icon-negative"></i>
    <span class="btn-text">Delete</span>
  </button>
  
  <!-- Icon only -->
  <button class="btn btn-primary btn-medium btn-icon-only" aria-label="Search">
    <i class="ri-search-line icon-md icon-inverted"></i>
  </button>
  
  <!-- Toggle button -->
  <button class="btn btn-toggle btn-medium btn-selected">
    <i class="ri-heart-fill icon-md icon-inverted"></i>
    <span class="btn-text">Favorite</span>
  </button>
</body>
</html>
```

---

## 🎯 Props API

### React/Vue Props

| Prop | Type | Default | Leírás |
|------|------|---------|--------|
| `variant` | `'primary' \| 'outline' \| 'subtle' \| 'toggle'` | `'primary'` | Button variáció |
| `size` | `'large' \| 'medium' \| 'small' \| 'xsmall'` | `'medium'` | Button méret |
| `color` | `'brand' \| 'negative' \| 'inverted' \| 'neutral'` | `'brand'` | Button szín |
| `icon` | `string` | `undefined` | Remixicon név (pl. `'add-line'`) |
| `iconOnly` | `boolean` | `false` | Csak ikon, nincs szöveg |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Ikon pozíció |
| `loading` | `boolean` | `false` | Loading állapot (spinner megjelenítése) |
| `disabled` | `boolean` | `false` | Letiltott állapot |
| `quiet` | `boolean` | `false` | Quiet variáció (csak `subtle`) |
| `selected` | `boolean` | `false` | Kiválasztott állapot (csak `toggle`) |
| `fullWidth` | `boolean` | `false` | Teljes szélesség |
| `onClick` | `function` | `undefined` | Click esemény kezelő |

### CSS Classes

| Class | Leírás |
|-------|--------|
| `.btn` | Alap button osztály (kötelező) |
| `.btn-primary` | Primary variáció |
| `.btn-outline` | Outline variáció |
| `.btn-subtle` | Subtle variáció |
| `.btn-toggle` | Toggle variáció |
| `.btn-large` | 48px méret |
| `.btn-medium` | 40px méret (default) |
| `.btn-small` | 32px méret |
| `.btn-xsmall` | 24px méret |
| `.btn-negative` | Negative szín |
| `.btn-inverted` | Inverted szín |
| `.btn-neutral` | Neutral szín |
| `.btn-icon-only` | Csak ikon |
| `.btn-quiet` | Quiet variáció |
| `.btn-selected` | Kiválasztott állapot |
| `.btn-loading` | Loading állapot |
| `.btn-full-width` | Teljes szélesség |

---

## 🎨 Design Tokens

A Button komponens az alábbi design tokeneket használja:

### Button-Primary Tokens
```css
--button-primary-background-enabled
--button-primary-background-hover
--button-primary-background-pressed
--button-primary-background-disabled
--button-primary-background-destructive-enabled
--button-primary-background-destructive-hover
--button-primary-background-destructive-pressed
--button-primary-background-inverted-enabled
--button-primary-background-inverted-hover
--button-primary-background-inverted-pressed
--button-primary-text-enabled
--button-primary-text-disabled
--button-primary-text-inverted
--button-primary-icon-enabled
--button-primary-icon-disabled
--button-primary-icon-inverted
```

### Button-Outline Tokens
```css
--button-outline-text-enabled
--button-outline-text-hover
--button-outline-text-pressed
--button-outline-text-disabled
--button-outline-text-destructive-*
--button-outline-text-inverted-*
--button-outline-border-enabled
--button-outline-border-hover
--button-outline-border-pressed
--button-outline-border-disabled
--button-outline-border-destructive-*
--button-outline-border-inverted-*
--button-outline-icon-*
```

### Button-Subtle Tokens
```css
--button-subtle-background-enabled
--button-subtle-background-hover
--button-subtle-background-pressed
--button-subtle-background-disabled
--button-subtle-background-neutral-*
--button-subtle-background-destructive-*
--button-subtle-background-inverted-*
--button-subtle-text-*
--button-subtle-border-*
--button-subtle-icon-*
```

### Button-Toggle Tokens
```css
--button-toggle-background-enabled
--button-toggle-background-hover
--button-toggle-background-pressed
--button-toggle-background-disabled
--button-toggle-background-selected-enabled
--button-toggle-background-selected-hover
--button-toggle-background-selected-pressed
--button-toggle-content-*
--button-toggle-border-*
```

---

## ♿ Accessibility

### ARIA Best Practices

```tsx
// Icon only button - MINDIG adj aria-label-t!
<Button iconOnly icon="search-line" aria-label="Search" />

// Toggle button - aria-pressed használata
<Button 
  variant="toggle" 
  selected={isSelected}
  aria-pressed={isSelected}
  onClick={handleToggle}
>
  Favorite
</Button>

// Disabled button - adj tooltip-et!
<Tooltip content="Save is disabled until all fields are filled">
  <Button disabled>Save</Button>
</Tooltip>

// Loading button - adj aria-busy-t!
<Button loading aria-busy="true" disabled>
  Saving...
</Button>
```

### Keyboard Support
- **Enter** / **Space**: Aktiválja a button-t
- **Tab**: Navigáció a button-ok között
- **Focus visible**: Automatikus outline megjelenítés

---

## 🎭 Állapotok

### Normal Flow
1. **Enabled** → Default állapot
2. **Hover** → Egér fölé helyezés
3. **Pressed** → Kattintás/érintés
4. **Focused** → Keyboard navigáció

### Special States
- **Disabled**: Nem interaktív, cursor: not-allowed
- **Loading**: Spinner megjelenítés, pointer-events: none

---

## 📱 Responsive Behavior

```tsx
// Mobile: Medium vagy Small
<Button size="small" fullWidth>
  Continue
</Button>

// Desktop: Large
<Button size="large">
  Continue
</Button>

// Tailwind példa
<Button className="btn-small md:btn-medium lg:btn-large">
  Responsive Button
</Button>
```

---

## 🌗 Dark Mode / High Contrast

A komponens automatikusan támogatja:

- **Dark mode**: Inverted variáció használata
- **High contrast mode**: Automatikus kontraszt növelés

```css
@media (prefers-contrast: high) {
  .btn:disabled {
    background-color: var(--high-contrast-disabled);
  }
}
```

---

## 🧪 Testing

### Jest + React Testing Library

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click</Button>);
  
  fireEvent.click(screen.getByText('Click'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('is disabled when disabled prop is true', () => {
  render(<Button disabled>Click</Button>);
  expect(screen.getByText('Click')).toBeDisabled();
});

test('shows loading spinner when loading', () => {
  render(<Button loading icon="add-line">Save</Button>);
  expect(screen.getByRole('button')).toHaveClass('btn-loading');
});
```

---

## 🚀 Performance

- **Bundle size**: ~2KB (minified + gzipped)
- **CSS size**: ~4KB (minified)
- **Zero runtime overhead**: Csak CSS classes
- **Tree-shakeable**: ESM support

---

## 🐛 Common Issues

### Issue 1: Icon nem jelenik meg
**Ok**: Remixicon CSS nincs importálva  
**Megoldás**:
```html
<link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
```

### Issue 2: Design tokens nem működnek
**Ok**: Token CSS fájlok nincsenek importálva  
**Megoldás**:
```tsx
import 'design-tokens/colors.css';
import 'design-tokens/typography.css';
import 'design-tokens/spacing.css';
import 'design-tokens/components.css';
```

### Issue 3: Button túl széles
**Ok**: `fullWidth` prop be van kapcsolva  
**Megoldás**: Távolítsd el a `fullWidth` prop-ot vagy add hozzá: `className="w-auto"`

---

## 📚 További Példák

Lásd: `components/Button/Button.demo.html`

---

## 🔗 Kapcsolódó Komponensek

- **Icon** (`RemixIcon`) - Ikono használata
- **Form** - Formokban való használat
- **Tooltip** - Tooltip button-on
- **Loading Spinner** - Loading állapot

---

## 📄 License

MIT © DÁP Design Team

---

**Utolsó frissítés**: 2025. október 27.  
**Verzió**: 1.2.0  
**Figma link**: [Button Component](https://www.figma.com/design/wlzFe2hkjpLnBYiNfZbLBM/D%C3%81P_Design_System_UI_Kit_1.2?node-id=564-1370)

