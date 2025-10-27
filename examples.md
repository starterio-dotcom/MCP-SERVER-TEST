# Figma MCP Server - Példák

Ez a fájl gyakorlati példákat mutat be a Figma MCP szerver használatára.

## 🎨 Design Token Kinyerés

### Példa 1: Színpaletta Lekérése

```
Prompt az AI-nak:
"Kérem, listázd ki az összes színt a [Figma fájl URL] design rendszeréből, és generálj belőle egy CSS változó fájlt."
```

**Várt kimenet:**
```css
:root {
  --primary-blue: #0066FF;
  --primary-blue-dark: #0052CC;
  --primary-blue-light: #4D94FF;
  --secondary-green: #00C853;
  --neutral-gray-100: #F5F5F5;
  --neutral-gray-900: #212121;
}
```

### Példa 2: Tipográfia Token-ek

```
Prompt:
"Gyűjtsd össze az összes szövegstílust a Figma fájlból, és hozz létre egy Tailwind CSS config-ot belőlük."
```

**Várt kimenet:**
```javascript
module.exports = {
  theme: {
    extend: {
      fontSize: {
        'heading-1': ['48px', { lineHeight: '56px', fontWeight: '700' }],
        'heading-2': ['36px', { lineHeight: '44px', fontWeight: '700' }],
        'body': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '16px', fontWeight: '400' }],
      }
    }
  }
}
```

## 🧩 Komponens Információk

### Példa 3: Komponens Leltár

```
Prompt:
"Listázd ki az összes komponenst a [Figma fájl], és csoportosítsd őket kategóriák szerint."
```

**Várt kimenet:**
```markdown
## Gombok
- Button/Primary
- Button/Secondary
- Button/Tertiary
- Button/Icon

## Beviteli Mezők
- Input/Text
- Input/Email
- Input/Password
- Input/Search

## Kártyák
- Card/Basic
- Card/With-Image
- Card/With-Actions
```

### Példa 4: Komponens Props

```
Prompt:
"Add meg a Button komponens összes változatát és tulajdonságát a Figma fájlból."
```

**Várt kimenet:**
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
  size: 'small' | 'medium' | 'large';
  state: 'default' | 'hover' | 'pressed' | 'disabled';
  icon?: boolean;
  fullWidth?: boolean;
}
```

## 📐 Layout Elemzés

### Példa 5: Spacing Rendszer

```
Prompt:
"Elemezd a térközöket (spacing) a design rendszerben, és hozz létre egy spacing skálát."
```

**Várt kimenet:**
```javascript
const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
}
```

### Példa 6: Grid Rendszer

```
Prompt:
"Milyen grid rendszert használ a [oldal név] a Figma fájlban?"
```

**Várt kimenet:**
```markdown
Grid Rendszer:
- Oszlopok: 12
- Gutter: 24px
- Margin: 64px (desktop), 24px (mobile)
- Konténer max-width: 1200px
- Breakpointok: 
  - Mobile: 320px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px+
```

## 🎭 Stílus Konzisztencia Ellenőrzés

### Példa 7: Színhasználat Audit

```
Prompt:
"Ellenőrizd, hogy minden szín a design fájlban a definiált színpalettából származik-e."
```

**Várt kimenet:**
```markdown
✅ Konzisztens színhasználat: 145 példány
⚠️ Nem szabványos színek találhatók: 12 példány

Nem szabványos színek:
- #FF5733 (3x) - helyette használd: --error-red
- #33FF57 (2x) - helyette használd: --success-green
- #3357FF (7x) - egyedi szín, nincs a palettában
```

### Példa 8: Tipográfia Konzisztencia

```
Prompt:
"Keresd meg azokat a szövegeket, amelyek nem használnak definiált szövegstílust."
```

## 🔄 Kód Generálás

### Példa 9: React Komponens Generálás

```
Prompt:
"Generálj egy React komponenst a 'Card/With-Image' komponensből Tailwind CSS-sel."
```

**Várt kimenet:**
```tsx
import React from 'react';

interface CardWithImageProps {
  image: string;
  title: string;
  description: string;
  onAction: () => void;
}

export const CardWithImage: React.FC<CardWithImageProps> = ({
  image,
  title,
  description,
  onAction
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <button
          onClick={onAction}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};
```

### Példa 10: CSS Modul Generálás

```
Prompt:
"Hozz létre egy CSS module fájlt a Button komponenshez az összes változattal."
```

**Várt kimenet:**
```css
/* Button.module.css */
.button {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.button--primary {
  background-color: var(--primary-blue);
  color: white;
}

.button--primary:hover {
  background-color: var(--primary-blue-dark);
}

.button--secondary {
  background-color: transparent;
  color: var(--primary-blue);
  border: 2px solid var(--primary-blue);
}

.button--small {
  padding: 8px 16px;
  font-size: 14px;
}

.button--large {
  padding: 16px 32px;
  font-size: 18px;
}
```

## 📊 Design Metrikák

### Példa 11: Komponens Használat Statisztika

```
Prompt:
"Számold meg, hány alkalommal használják az egyes komponenseket a teljes Figma fájlban."
```

**Várt kimenet:**
```markdown
Komponens Használat:
1. Button/Primary - 234 példány
2. Input/Text - 187 példány
3. Card/Basic - 156 példány
4. Icon/Arrow - 143 példány
5. Badge/Status - 98 példány
```

### Példa 12: Fájl Struktúra Áttekintés

```
Prompt:
"Add meg a [Figma fájl] teljes struktúráját oldanként és keretezésenként."
```

## 🚀 Haladó Használat

### Példa 13: Design System Dokumentáció Generálás

```
Prompt:
"Generálj egy teljes design system dokumentációt a Figma fájlból, beleértve a színeket, tipográfiát, komponenseket és használati útmutatókat."
```

### Példa 14: A11y (Akadálymentesség) Ellenőrzés

```
Prompt:
"Ellenőrizd a színkontrasztokat a design fájlban, és jelezd, ha valamelyik nem felel meg a WCAG 2.1 AA szabványnak."
```

### Példa 15: Változások Követése

```
Prompt:
"Hasonlítsd össze a jelenlegi verziót az előző verzióval, és sorold fel a változásokat."
```

## 💡 Tippek

1. **Specifikusan fogalmazz**: Minél részletesebb a prompt, annál jobb lesz az eredmény
2. **Használj URL-eket**: Ha lehet, add meg a konkrét Figma fájl URL-jét
3. **Kérj példákat**: Kérhetsz kód példákat, nem csak információkat
4. **Iterálj**: Ha az első eredmény nem megfelelő, finomítsd a promptot
5. **Ellenőrizd**: Mindig ellenőrizd az AI által generált kódot vagy adatokat

## ⚠️ Korlátozások

- Nem minden Figma fájl érhető el (jogosultságok függvényében)
- A béta verzió során bizonyos funkciók nem működnek tökéletesen
- Nagy fájlok esetén lassabb lehet a válaszidő
- Bizonyos összetett interakciók nem nyerhetők ki

## 🔗 Kapcsolódó Források

- [Figma API Dokumentáció](https://www.figma.com/developers/api)
- [Design Tokens Format](https://design-tokens.github.io/community-group/format/)
- [Component Driven Design](https://www.componentdriven.org/)


