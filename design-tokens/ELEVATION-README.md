# 🎨 Elevation/Shadow Tokens Documentation

## 📋 Áttekintés

Az elevation (árnyék) tokenek a DÁP Design System UI Kit 1.2-ből lettek kinyerve. Ezek határozzák meg a komponensek vizuális hierarchiáját és mélységét.

## 📦 Generált Fájlok

### 1. **CSS Variables** (`elevation.css`)
- CSS custom properties formátum
- Készen áll böngésző használatra
- Utility osztályok
- Component-specifikus osztályok

### 2. **SCSS Variables** (`elevation.scss`)
- SCSS változók és mixinek
- Map-ek a ciklusokhoz
- Komponens-specifikus mixinek
- Focus ring mixinek

### 3. **Tailwind CSS** (`tailwind.config.js`)
- Tailwind boxShadow konfiguráció
- Használható `shadow-*` utility osztályokkal
- Komponens-specifikus aliasok

### 4. **Design Tokens JSON** (`design-tokens.json`)
- W3C Design Tokens Community Group formátum
- Automatikus konverziós eszközökhöz
- Platform-független

## 🎯 Token Kategóriák

### Pozitív Elevation (Felfelé vetett árnyék)

Használd ezeket, amikor a komponens "fent lebeg" a felületen:

| Token | Érték | Leírás | Használat |
|-------|-------|---------|-----------|
| `elevation-100` | `0px 1px 2px 0px rgba(0,0,0,0.08)` | Minimális árnyék | Finomságok, hover állapotok |
| `elevation-200` | `0px 1px 2px 0px rgba(0,0,0,0.04), 0px 1px 3px 0px rgba(0,0,0,0.08)` | Alacsony árnyék | Kártyák, panelek |
| `elevation-300` | `0px 4px 6px -1px rgba(0,0,0,0.08), 0px 2px 4px -1px rgba(0,0,0,0.06)` | Közepes árnyék | Dropdown menük, popovers |
| `elevation-400` | `0px 8px 12px -2px rgba(0,0,0,0.08), 0px 2px 6px -2px rgba(0,0,0,0.06)` | Magas árnyék | Modal dialogok |
| `elevation-500` | `0px 16px 24px -4px rgba(0,0,0,0.08), 0px 4px 8px -2px rgba(0,0,0,0.04)` | Magasabb árnyék | Overlay-ek |
| `elevation-600` | `0px 24px 40px -4px rgba(0,0,0,0.08), 0px 6px 16px -2px rgba(0,0,0,0.04)` | Legmagasabb árnyék | Főbb overlay-ek |

### Negatív Elevation (Lefelé vetett árnyék)

Használd ezeket sticky elemekhez vagy "beágyazott" hatásokhoz:

| Token | Érték | Leírás | Használat |
|-------|-------|---------|-----------|
| `elevation-n100` | `0px -1px 2px 0px rgba(0,0,0,0.08)` | Minimális beágyazás | Sticky headerek |
| `elevation-n200` | `0px -1px 2px 0px rgba(0,0,0,0.04), 0px -1px 3px 0px rgba(0,0,0,0.08)` | Alacsony beágyazás | Sticky footers |
| `elevation-n300` | `0px -4px 6px -1px rgba(0,0,0,0.08), 0px -2px 4px -1px rgba(0,0,0,0.06)` | Közepes beágyazás | Fixed navigation |
| `elevation-n400` | `0px -8px 12px -2px rgba(0,0,0,0.08), 0px -2px 6px -2px rgba(0,0,0,0.06)` | Magas beágyazás | Inset komponensek |
| `elevation-n500` | `0px -4px 8px -2px rgba(0,0,0,0.04), 0px -16px 24px -4px rgba(0,0,0,0.08)` | Magasabb beágyazás | Speciális effektek |
| `elevation-n600` | `0px -6px 16px -2px rgba(0,0,0,0.04), 0px -24px 40px -4px rgba(0,0,0,0.08)` | Legmagasabb beágyazás | Speciális effektek |

### Szemantikus Aliasok

Könnyebb megjegyezhetőség és használat:

| Alias | Megfelelő Token | Használat |
|-------|-----------------|-----------|
| `shadow-sm` | `elevation-100` | Kis árnyék |
| `shadow-md` | `elevation-200` | Közepes árnyék |
| `shadow-lg` | `elevation-300` | Nagy árnyék |
| `shadow-xl` | `elevation-400` | Extra nagy árnyék |
| `shadow-2xl` | `elevation-500` | 2X nagy árnyék |
| `shadow-3xl` | `elevation-600` | 3X nagy árnyék |
| `shadow-inset-*` | `elevation-n*` | Beágyazott árnyékok |

## 💻 Használati Példák

### CSS

```css
/* Kártya komponens */
.card {
  box-shadow: var(--elevation-200);
  border-radius: var(--radius-large);
  padding: var(--spacing-400);
  background: var(--background-neutral-strong);
}

/* Dropdown menü */
.dropdown {
  box-shadow: var(--elevation-300);
  border-radius: var(--radius-small);
}

/* Modal dialog */
.modal {
  box-shadow: var(--elevation-400);
}

/* Sticky header negatív elevation-nel */
.sticky-header {
  position: sticky;
  top: 0;
  box-shadow: var(--elevation-n200);
}
```

### SCSS

```scss
// Használd az elevation mixin-t
.card {
  @include elevation(200);
  border-radius: 8px;
  padding: 16px;
}

// Komponens-specifikus mixin
.dropdown {
  @include dropdown-shadow;
}

// Focus ring
.button:focus {
  @include focus-ring;
}

// Custom focus ring színnel
.input:focus {
  @include focus-ring(rgba(0, 123, 36, 0.4));
}

// Responsive elevation
.card {
  @include elevation(200);
  
  @media (min-width: 768px) {
    @include elevation(300);
  }
}
```

### Tailwind CSS

```html
<!-- Utility osztályok -->
<div class="shadow-elevation-200 rounded-lg p-4">
  Kártya komponens
</div>

<!-- Semantic aliasok -->
<div class="shadow-md rounded-lg p-4">
  Kártya komponens
</div>

<!-- Komponens-specifikus -->
<div class="shadow-card rounded-lg p-4">
  Kártya komponens
</div>

<!-- Dropdown menü -->
<div class="shadow-dropdown rounded-sm">
  Dropdown tartalom
</div>

<!-- Modal -->
<div class="shadow-modal rounded-medium">
  Modal tartalom
</div>

<!-- Focus állapot -->
<button class="focus:shadow-focus">
  Gomb
</button>
```

### React/JSX

```jsx
// Inline style CSS változókkal
<div style={{ boxShadow: 'var(--elevation-200)' }}>
  Kártya
</div>

// Tailwind osztályokkal
<div className="shadow-md rounded-lg p-4">
  Kártya
</div>

// Component-specifikus
<Card className="shadow-card">
  Tartalom
</Card>
```

## 🎨 Design Rendszer Irányelvek

### Mikor Használj Elevationt?

1. **Interaktív Elemek**: Gombок, kártyák hover/active állapotban
2. **Hierarchia**: Komponensek vizuális súlyozása
3. **Navigáció**: Dropdownok, menük, tooltipek
4. **Modal/Overlay**: Dialógok, drawer-ek, popupok
5. **Sticky Elemek**: Fix navigation, headers, footers

### Best Practices

1. ✅ **Konzisztencia**: Használd ugyanazt az elevation tokent ugyanolyan típusú komponensekhez
2. ✅ **Progresszív Emelés**: Interakciókra használj magasabb elevationt (pl. hover → elevation+100)
3. ✅ **Kontextus**: Figyelj az elevation hierarchiára (modals > dropdowns > cards)
4. ❌ **Ne túlozd**: Túl sok vagy túl erős árnyék zavaró lehet
5. ❌ **Ne keverd**: Ne használj egyszerre pozitív és negatív elevation-t ugyanazon elemen

### Elevation Hierarchia

```
z-index:    1      2      3      4      5      6
          ───────────────────────────────────────
elevation:  100    200    300    400    500    600
          ───────────────────────────────────────
Használat: hover  card   drop   modal  over   major
```

## 🔧 Integrációs Eszközök

### Style Dictionary

```json
{
  "source": ["design-tokens/design-tokens.json"],
  "platforms": {
    "css": {
      "transformGroup": "css",
      "buildPath": "dist/css/",
      "files": [{
        "destination": "elevation.css",
        "format": "css/variables"
      }]
    }
  }
}
```

### Theo (Salesforce)

```js
theo.convert({
  transform: {
    type: 'web',
    file: 'design-tokens/design-tokens.json'
  },
  format: {
    type: 'scss'
  }
});
```

## 📊 Token Statisztika

- **Összesen**: 12 elevation token
- **Pozitív**: 6 (100, 200, 300, 400, 500, 600)
- **Negatív**: 6 (-100, -200, -300, -400, -500, -600)
- **Formátumok**: CSS, SCSS, Tailwind, JSON
- **Utility Osztályok**: 30+
- **Mixinek**: 10+

## 🎯 Accessibility

- Az árnyékok **nem helyettesítik** a border-t interaktív elemeken
- Focus ringek **mindig legyenek láthatók**
- Gondolj a **high contrast mode**-ra is
- Használj megfelelő **color contrast**-ot az árnyékokkal együtt

## 📚 További Források

- [Material Design Elevation](https://material.io/design/environment/elevation.html)
- [W3C Design Tokens](https://design-tokens.github.io/community-group/)
- [CSS box-shadow Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

## 🔄 Verzió Történet

- **v1.2.0** (2024): Teljes elevation rendszer kinyerve Figmából
  - 12 elevation token (6 pozitív + 6 negatív)
  - CSS, SCSS, Tailwind, JSON formátumok
  - Utility osztályok és mixinek
  - Focus ring támogatás

---

**Generálva**: Figma MCP Server  
**Design System**: DÁP Design System UI Kit 1.2  
**Státusz**: ✅ Production Ready

