# ⚡ Gyors Javítási Útmutató - Button Komponens

**Ha a gombok nem egyeznek a Figmával, kövesd ezeket a lépéseket:**

---

## 🔧 1. Hiányzó `--radius-base` Token

### Probléma:
A gombok sarkai **nem lekerekítettek** vagy **élesek**.

### Megoldás:

**Módszer 1: CSS Variables használata**
```html
<style>
:root {
  --radius-base: 8px;  /* Add ezt hozzá, ha hiányzik */
}
</style>
```

**Módszer 2: Inline style (gyors teszt)**
```html
<button class="btn btn-primary" style="border-radius: 8px;">
  Button Label
</button>
```

**Módszer 3: Frissítsd a borders.css fájlt** (AJÁNLOTT)
```bash
# Ellenőrizd, hogy létezik-e:
grep "radius-base" design-tokens/borders.css

# Ha nincs, add hozzá:
# A borders.css fájlban a Border Radius szekcióhoz:
--radius-base: 8px;      /* Base radius for buttons and inputs */
```

---

## 🔧 2. Rossz Font Méret

### Probléma:
A gombok szövege **túl kicsi** vagy **túl nagy**.

### Megoldás:

**Ellenőrizd a Button.css fájlt:**

```css
/* components/Button/Button.css */

/* ✅ HELYES */
.btn-large {
  font-size: var(--size-lg);  /* 18px */
}

/* ❌ HIBÁS */
.btn-large {
  font-size: var(--ui-button-size-Large);  /* Ez nem létezik! */
}
```

**Gyors javítás:**
```css
.btn-large { font-size: 18px !important; }
.btn-medium { font-size: 16px !important; }
.btn-small { font-size: 14px !important; }
.btn-xsmall { font-size: 12px !important; }
```

---

## 🔧 3. Rossz Padding

### Probléma:
A gombok **túl szűkek** vagy **túl szélesek**.

### Ellenőrizd:
```css
/* components/Button/Button.css */
.btn-large { padding: 0 24px; }  /* spacing-600 */
.btn-medium { padding: 0 16px; } /* spacing-400 */
.btn-small { padding: 0 12px; }  /* spacing-300 */
.btn-xsmall { padding: 0 8px; }  /* spacing-200 */
```

---

## 🔧 4. Rossz Színek

### Probléma:
A gombok **színei eltérnek** a Figmától.

### Ellenőrizd a components.css fájlt:
```css
/* design-tokens/components.css */

/* Primary Button */
--button-primary-background-enabled: #4258ed;  /* Kék */
--button-primary-text-enabled: #ffffff;        /* Fehér */

/* Primary Destructive Button */
--button-primary-background-destructive-enabled: #d40d00;  /* Piros */
```

**Ha hiányoznak, add hozzá őket.**

---

## 🔧 5. Hiányzó Icon Gap

### Probléma:
Az **ikon túl közel van** a szöveghez.

### Megoldás:
```css
/* components/Button/Button.css */
.btn {
  gap: var(--spacing-200);  /* 8px gap */
}
```

**Gyors javítás:**
```css
.btn {
  gap: 8px !important;
}
```

---

## 🔧 6. Focus Ring Hiányzik

### Probléma:
**Nincs focus ring**, amikor a gomb fókuszba kerül (Tab-bal).

### Megoldás:
```css
/* components/Button/Button.css */
.btn:focus-visible {
  outline: 2px solid var(--focus-outer-ring);  /* Kék ring */
  outline-offset: 2px;
}
```

**Gyors javítás:**
```css
.btn:focus-visible {
  outline: 2px solid #4258ed !important;
  outline-offset: 2px;
}
```

---

## 🎯 Gyors Ellenőrzés (Checklist)

Nyisd meg a `components/Button/Button.demo.html` fájlt böngészőben, majd:

- [ ] **Border-radius**: Lekerekített sarkok (8px)?
- [ ] **Font méret**: Large (18px), Medium (16px), Small (14px), XSmall (12px)?
- [ ] **Padding**: Large (0 24px), Medium (0 16px), Small (0 12px), XSmall (0 8px)?
- [ ] **Színek**: Primary kék (#4258ed), Destructive piros (#d40d00)?
- [ ] **Icon gap**: 8px távolság az ikon és szöveg között?
- [ ] **Focus ring**: Kék 2px outline, amikor Tab-bal fókuszálsz?

---

## 🔍 Összehasonlítás Figmával

### 1. Nyisd meg a Figma design-t
[Figma Button Komponens](https://www.figma.com/design/wlzFe2hkjpLnBYiNfZbLBM/D%C3%81P_Design_System_UI_Kit_1.2?node-id=564-11940)

### 2. Készíts screenshot-ot
- Figma: Right-click → Export → PNG (2x)
- Demo: F12 → Take screenshot

### 3. Hasonlítsd össze
- Border-radius
- Font méret
- Padding
- Színek
- Icon méret és pozíció

---

## 🚨 Ha még mindig nem működik...

### 1. Ellenőrizd a CSS betöltési sorrendet
```html
<!-- ✅ HELYES SORREND -->
<link rel="stylesheet" href="design-tokens/colors.css">
<link rel="stylesheet" href="design-tokens/typography.css">
<link rel="stylesheet" href="design-tokens/spacing.css">
<link rel="stylesheet" href="design-tokens/borders.css">
<link rel="stylesheet" href="design-tokens/components.css">
<link rel="stylesheet" href="components/Button/Button.css">
```

### 2. Cache ürítés
```bash
# Böngészőben:
Ctrl + Shift + R  (Windows/Linux)
Cmd + Shift + R   (Mac)
```

### 3. CSS változók ellenőrzése (DevTools)
```javascript
// F12 → Console-ban:
getComputedStyle(document.querySelector('.btn')).borderRadius;
getComputedStyle(document.querySelector('.btn')).fontSize;
getComputedStyle(document.querySelector('.btn')).padding;
```

---

## 📖 Részletes Dokumentáció

- 📋 [BUTTON-FIX-SUMMARY.md](./BUTTON-FIX-SUMMARY.md) - Teljes javítási összefoglaló
- 🔘 [BUTTON-COMPONENT-SUMMARY.md](./BUTTON-COMPONENT-SUMMARY.md) - Button komponens dokumentáció
- 📖 [components/Button/README.md](./components/Button/README.md) - Button használati útmutató

---

**Utolsó frissítés**: 2025. október 27.  
**Státusz**: ✅ Gyors javítások alkalmazva  
**Verzió**: 1.2.1 (fix)

