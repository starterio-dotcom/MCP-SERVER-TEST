# DÁP Design System UI Kit 1.2 - Komponens Áttekintés

## 📊 Metaadatok a Figma Fájlból

A Figma fájl struktúrája alapján az alábbi komponensek találhatók:

### Canvas Struktúra
```
Canvas: Cover (ID: 25:2)
  └─ Frame: File cover (ID: 7371:5230)
      └─ Instance: File cover (ID: 7371:5200)
```

---

## 🎨 Design Token Kategóriák

### 1. Színek (Colors)

#### Szöveg Színek
- **Placeholder szöveg**: `#a3abba` - Input mezők placeholder szövegéhez
- **Invertált szöveg**: `#ffffff` - Sötét háttéren használt szöveg
- **Szöveg invertált háttéren**: `#ffffff` - Invertált háttér fölötti szöveg

#### Háttérszínek
- **Cold Grey 1800**: `#181b22` - Legkékebb árnyalat

#### Átlátszó Színek
- **Fehér átlátszó**: `rgba(255, 255, 255, 0.1)` - 10% opacitású fehér

---

### 2. Tipográfia (Typography)

#### Font Családok
- **Primary Font**: Inter
- **Secondary Font**: Inter

#### Font Súlyok
- **Bold**: 700

#### Font Méretek
- **XL**: 20px - Extra nagy méret
- **Heading 2**: 28px - Második szintű címsor
- **9XL**: 52px - Óriási méret

#### Előre Definiált Stílusok
- **Heading 2**: 
  - Font: Inter
  - Súly: Bold (700)
  - Méret: 28px
  - Sormagasság: 1.25

---

### 3. Térközök (Spacing)

Spacing skála (px értékekben):
- **0**: 0px - Nincs térköz
- **100**: 4px - Extra kicsi
- **200**: 8px - Kicsi
- **400**: 16px - Közepes
- **600**: 24px - Nagy
- **1000**: 40px - Extra nagy
- **1200**: 48px - 2X nagy

---

### 4. Border és Radius

#### Border Width
- **Large**: 2px

#### Border Radius
- **Rounded**: 1000px - Teljesen lekerekített sarkek

---

## 📦 Komponens Kategóriák

### 🖼️ Layout Komponensek
- **File Cover** - Fájl borító komponens
  - Méret: 640x380px
  - Típus: Frame + Instance

### 🎯 További Komponensek
> **Megjegyzés**: A teljes komponens lista eléréséhez nyiss meg más oldalakat a Figma fájlban, és futtasd újra az elemzést.

---

## 📝 Használati Útmutató

### CSS Változók Használata
```css
/* Importáld a CSS fájlokat */
@import './design-tokens/colors.css';
@import './design-tokens/typography.css';
@import './design-tokens/spacing.css';

/* Használat */
.my-element {
  color: var(--text-neutral-placeholder);
  font-size: var(--size-heading-2);
  padding: var(--spacing-400);
  border-radius: var(--radius-rounded);
}
```

### Tailwind CSS Használata
```jsx
// Példa komponens
<div className="font-primary text-heading-2 p-md rounded-rounded">
  <h2 className="text-neutral-inverted font-bold">
    Heading Example
  </h2>
</div>
```

---

## 🔄 Frissítési Instrukciók

A design tokenek frissítéséhez:

1. **Nyisd meg** a Figma Desktop alkalmazást
2. **Navigálj** a kívánt oldalra
3. **Válaszd ki** az elemzendő komponenst vagy oldalt
4. **Futtasd újra** a token extrakciót

```
Ctrl + L → "Kérem, frissítsd a design tokeneket erről az oldalról"
```

---

## 📊 Token Statisztika

- **Színek**: 5 definiált szín
- **Font Méretek**: 3 különböző méret
- **Spacing Értékek**: 7 különböző térköz
- **Font Családok**: 2 (mindkettő Inter)
- **Border Radius**: 1 érték
- **Border Width**: 1 érték

---

## 🚀 Következő Lépések

1. **Navigálj más oldalakra** a Figma fájlban (pl. Buttons, Forms, Cards)
2. **Futtasd újra** az elemzést az új oldalról
3. **Gyűjtsd össze** az összes komponenst
4. **Frissítsd** ezeket a fájlokat az új adatokkal

---

**Generálva**: A Figma MCP Server által  
**Fájl**: DÁP Design System UI Kit 1.2  
**Node ID**: 25:2 (Cover page)

