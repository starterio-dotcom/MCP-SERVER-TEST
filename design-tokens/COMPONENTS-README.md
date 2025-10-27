# 🧩 Component Tokens Documentation

**DÁP Design System UI Kit 1.2** - Komponens-specifikus design tokenek

---

## 📋 Áttekintés

Ez a dokumentáció a **komponens-specifikus tokeneket** tartalmazza, amelyek az `export.json` fájlból lettek kinyerve és összekapcsolva az általunk már létrehozott **foundation tokenekkel**.

### Generált Fájlok

- **`components.css`** - CSS custom properties
- **`components.scss`** - SCSS változók és mixinek
- **`tailwind.config.js`** - Frissített Tailwind konfiguráció

---

## 🎯 Elérhető Komponensek

| Komponens | Token Szám | Kategóriák | Státusz |
|-----------|-----------|------------|---------|
| **Button Primary** | 48 | background, text, icon | ✅ Kész |
| **Button Outline** | 90 | border, text, icon | ✅ Kész |
| **Button Subtle** | 144 | background, text, icon, border | ✅ Kész |
| **Button Toggle** | 54 | background, border, content | ✅ Kész |
| **Banner** | 69 | background, text, icon, action | ✅ Kész |
| **Link** | 36 | enabled, hover, pressed, visited | ✅ Kész |
| **Form Fields** | 18 | background | ✅ Kész |

**Összesen**: **465 komponens token**

---

## 🔘 Button Primary

Elsődleges gomb komponens - főbb akciókhoz használandó.

### Token Változók

```css
/* Backgrounds */
--button-primary-background-enabled
--button-primary-background-hover
--button-primary-background-pressed
--button-primary-background-disabled

/* Inverted */
--button-primary-background-inverted-enabled
--button-primary-background-inverted-hover
--button-primary-background-inverted-pressed

/* Destructive */
--button-primary-background-destructive-enabled
--button-primary-background-destructive-hover
--button-primary-background-destructive-pressed

/* Text & Icon */
--button-primary-text-enabled
--button-primary-text-inverted
--button-primary-text-disabled
--button-primary-icon-enabled
--button-primary-icon-inverted
--button-primary-icon-disabled
```

### Használat

#### HTML/CSS
```html
<button class="btn-primary">Primary Button</button>
<button class="btn-primary destructive">Delete</button>
<button class="btn-primary inverted">Inverted Button</button>
<button class="btn-primary" disabled>Disabled</button>
```

#### SCSS
```scss
.my-button {
  @include button-primary;
}
```

#### Tailwind
```html
<button class="bg-button-primary text-button-primary rounded-small px-4 py-2 font-bold shadow-elevation-100 hover:bg-button-primary-hover hover:shadow-elevation-200">
  Primary Button
</button>
```

---

## 🔲 Button Outline

Másodlagos gomb komponens - outline stílussal.

### Token Változók

```css
/* Border */
--button-outline-border-enabled
--button-outline-border-hover
--button-outline-border-pressed
--button-outline-border-disabled

/* Text */
--button-outline-text-enabled
--button-outline-text-hover
--button-outline-text-pressed
--button-outline-text-disabled
```

### Használat

#### HTML/CSS
```html
<button class="btn-outline">Outline Button</button>
<button class="btn-outline" disabled>Disabled</button>
```

#### SCSS
```scss
.my-outline-button {
  @include button-outline;
}
```

---

## 🎨 Button Subtle

Harmadlagos gomb komponens - finom background változással.

### Token Változók

```css
--button-subtle-background-enabled
--button-subtle-background-hover
--button-subtle-background-pressed
--button-subtle-background-disabled

--button-subtle-text-enabled
--button-subtle-text-hover
--button-subtle-text-pressed
--button-subtle-text-disabled
```

### Használat

```html
<button class="btn-subtle">Subtle Button</button>
```

```scss
.my-subtle-button {
  @include button-subtle;
}
```

---

## 🔘 Button Toggle

Toggle gomb komponens - on/off állapotokkal.

### Token Változók

```css
--button-toggle-background-off
--button-toggle-background-on
--button-toggle-background-on-hover

--button-toggle-border-off
--button-toggle-border-on

--button-toggle-content-off
--button-toggle-content-on
```

### Használat

```html
<button class="btn-toggle" data-state="off">Toggle Off</button>
<button class="btn-toggle active" data-state="on">Toggle On</button>
```

---

## 📢 Banner

Értesítési banner komponens - különböző típusokkal.

### Típusok

- **Brand** - Általános információ
- **Positive** - Siker üzenet
- **Informative** - Információ
- **Warning** - Figyelmeztetés
- **Negative** - Hiba üzenet

### Token Változók

```css
/* Backgrounds */
--banner-background-brand
--banner-background-positive
--banner-background-informative
--banner-background-warning
--banner-background-negative

/* Text */
--banner-text-brand
--banner-text-positive
--banner-text-informative
--banner-text-warning
--banner-text-negative

/* Icons & Actions */
--banner-icon-*
--banner-action-*
```

### Használat

#### HTML/CSS
```html
<div class="banner brand">
  <span class="icon">ℹ️</span>
  <span>This is a brand message</span>
</div>

<div class="banner positive">
  <span class="icon">✅</span>
  <span>Success! Operation completed</span>
</div>

<div class="banner warning">
  <span class="icon">⚠️</span>
  <span>Warning: Please review your settings</span>
</div>

<div class="banner negative">
  <span class="icon">❌</span>
  <span>Error: Something went wrong</span>
</div>
```

#### SCSS
```scss
.success-banner {
  @include banner('positive');
}

.error-banner {
  @include banner('negative');
}
```

#### Tailwind
```html
<div class="bg-banner-positive text-white p-4 rounded-small flex items-center gap-3">
  Success message
</div>
```

---

## 🔗 Link

Link komponens - különböző variánsokkal.

### Variánsok

- **Default** - Normál link (brand színnel)
- **Inverted** - Invertált link (világos háttérhez)
- **Neutral** - Semleges link (neutral színnel)

### Token Változók

```css
/* Default */
--link-enabled
--link-hover
--link-pressed
--link-visited

/* Inverted */
--link-inverted-enabled
--link-inverted-hover
--link-inverted-pressed
--link-inverted-visited

/* Neutral */
--link-neutral-enabled
--link-neutral-hover
--link-neutral-pressed
--link-neutral-visited
```

### Használat

```html
<a class="link" href="#">Default Link</a>
<a class="link inverted" href="#">Inverted Link</a>
<a class="link neutral" href="#">Neutral Link</a>
```

```scss
.my-link {
  @include link;
}
```

---

## 📝 Form Fields

Form input komponens - különböző állapotokkal.

### Token Változók

```css
--field-background-default
--field-background-hover
--field-background-focused
--field-background-disabled
--field-background-readonly
--field-background-error
```

### Használat

#### HTML/CSS
```html
<input class="field" type="text" placeholder="Enter text">
<input class="field" type="text" placeholder="Hover state">
<input class="field" type="text" disabled placeholder="Disabled">
<input class="field error" type="text" placeholder="Error state">
```

#### SCSS
```scss
.my-input {
  @include form-field;
}
```

#### Tailwind
```html
<input 
  type="text" 
  class="bg-field-default border border-field rounded-small p-2 focus:border-field-focus focus:shadow-focus"
  placeholder="Enter text"
>
```

---

## 🎨 Színek és Foundation Tokenek

A komponens tokenek **össze vannak kapcsolva** az általunk már kinyert foundation tokenekkel:

### Példa Alias Feloldások

| Alias (export.json) | Foundation Token | Érték |
|---------------------|------------------|-------|
| `{brand.1000}` | `var(--color-brand-1000)` | `#4258ed` |
| `{neutral.700}` | `var(--neutral-700)` | `#d4d9e0` |
| `{negative.1000}` | `var(--semantic-red-1000)` | `#d40d00` |
| `{positive.1000}` | `var(--semantic-green-1000)` | `#007b24` |
| `{white.100}` | `var(--white-100)` | `#ffffff` |

### Foundation Tokenek Használata

A komponens tokenek automatikusan használják:
- ✅ **Colors** (`colors.css`) - brand, neutral, semantic colors
- ✅ **Spacing** (`spacing.css`) - padding, margin értékek
- ✅ **Borders** (`borders.css`) - border-radius, border-width
- ✅ **Elevation** (`elevation.css`) - box-shadow értékek
- ✅ **Typography** (`typography.css`) - font-family, font-weight

---

## 💡 Best Practices

### 1. Konzisztens Használat

```scss
// ✅ Jó - Komponens tokent használ
.my-button {
  background: var(--button-primary-background-enabled);
}

// ❌ Rossz - Hardcoded érték
.my-button {
  background: #4258ed;
}
```

### 2. Állapotok Kezelése

```scss
// ✅ Jó - Állapotok külön tokenekkel
.btn {
  background: var(--button-primary-background-enabled);
  
  &:hover {
    background: var(--button-primary-background-hover);
  }
  
  &:active {
    background: var(--button-primary-background-pressed);
  }
  
  &:disabled {
    background: var(--button-primary-background-disabled);
  }
}
```

### 3. SCSS Mixinek Használata

```scss
// ✅ Legjobb - Mixin használat
.my-button {
  @include button-primary;
  
  // Extra customization
  min-width: 120px;
}
```

### 4. Accessibility

```scss
// ✅ Focus állapot mindig látható
.btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--color-brand-alpha-30);
}

// ✅ Disabled állapot vizuálisan egyértelmű
.btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
```

---

## 📦 Import Sorrend

Helyes import sorrend a CSS/SCSS fájlokhoz:

```css
/* 1. Foundation Tokens */
@import 'design-tokens/colors.css';
@import 'design-tokens/typography.css';
@import 'design-tokens/spacing.css';
@import 'design-tokens/borders.css';
@import 'design-tokens/elevation.css';

/* 2. Component Tokens */
@import 'design-tokens/components.css';

/* 3. Your Custom Styles */
@import 'custom-styles.css';
```

SCSS esetén:

```scss
// 1. Foundation Tokens
@import 'design-tokens/colors';
@import 'design-tokens/typography';
@import 'design-tokens/spacing';
@import 'design-tokens/borders';
@import 'design-tokens/elevation';

// 2. Component Tokens
@import 'design-tokens/components';

// 3. Your Custom Styles
@import 'custom-styles';
```

---

## 🚀 Következő Lépések

### Rövidtávú
1. ✅ Teszteld a komponens tokeneket valós projektben
2. ⏳ Adj feedbacket a hiányzó állapotokról vagy variánsokról
3. ⏳ Bővítsd további komponensekkel (checkbox, radio, modal, stb.)

### Középtávú
1. ⏳ Dark mode támogatás hozzáadása
2. ⏳ Accessibility tesztek futtatása
3. ⏳ Storybook integráció

### Hosszútávú
1. ⏳ Automatikus token generálás CI/CD-vel
2. ⏳ Token dokumentáció automatikus generálása
3. ⏳ Design token verziózás és migráció

---

## 📊 Statisztika

| Kategória | Token Szám |
|-----------|-----------|
| Button Primary | 48 |
| Button Outline | 90 |
| Button Subtle | 144 |
| Button Toggle | 54 |
| Banner | 69 |
| Link | 36 |
| Form Fields | 18 |
| **Összesen** | **465** |

**Foundation Tokenek**: 449  
**Komponens Tokenek**: 465  
**Összes Token**: **914** 🎉

---

**Státusz**: ✅ Production Ready  
**Design System**: DÁP Design System UI Kit 1.2  
**Generálva**: Export.json → MCP Foundation Tokens  
**Dátum**: 2025. október 27.

