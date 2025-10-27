# 🧪 Teszt Promptok - Figma MCP Server

Ezek a promptok segítenek tesztelni, hogy a Figma MCP szerver megfelelően működik-e.

## Alapvető Tesztek

### ✅ Test 1: Kapcsolat Ellenőrzés
```
Figma MCP szerver, elérhető vagy?
```
**Várt válasz:** Megerősítés, hogy a szerver elérhető

### ✅ Test 2: Fájl Lista
```
Listázd ki a Figma fájljaimat
```
**Várt válasz:** A legutóbbi Figma fájlok listája

### ✅ Test 3: Specifikus Fájl Lekérdezés
```
Add meg ennek a fájlnak az információit: [Figma URL]
```
**Várt válasz:** Fájl név, leírás, utolsó módosítás dátuma, stb.

## Színek és Design Tokenek

### 🎨 Test 4: Színek Lekérése
```
Kérem, listázd ki az összes színt ebből a Figma fájlból: [URL]
```
**Várt válasz:** Színek listája HEX kódokkal

### 🎨 Test 5: CSS Változók Generálás
```
Generálj CSS változókat a Figma színekből: [URL]
```
**Várt válasz:** CSS változók (pl. `--primary-color: #0066FF;`)

### 🎨 Test 6: Tailwind Config
```
Hozz létre Tailwind color config-ot a Figma színpalettából: [URL]
```
**Várt válasz:** Tailwind konfiguráció object

## Tipográfia

### 📝 Test 7: Szövegstílusok
```
Milyen szövegstílusok vannak ebben a fájlban: [URL]
```
**Várt válasz:** Font családok, méretek, súlyok, sormagasságok

### 📝 Test 8: Tipográfia Tokenek
```
Exportáld a tipográfiát design tokenként: [URL]
```
**Várt válasz:** Strukturált tipográfia adatok

## Komponensek

### 🧩 Test 9: Komponens Lista
```
Sorold fel az összes komponenst: [URL]
```
**Várt válasz:** Komponensek nevei és típusai

### 🧩 Test 10: Komponens Részletek
```
Add meg a "Button" komponens összes változatát: [URL]
```
**Várt válasz:** Komponens változatok (variants) listája

### 🧩 Test 11: Komponens Props
```
Milyen propertyket használ ez a komponens: [URL]
```
**Várt válasz:** Property nevek és értékek

## Kód Generálás

### 💻 Test 12: React Komponens
```
Generálj React komponenst ebből a Figma komponensből: [URL] > [komponens név]
```
**Várt válasz:** Működő React komponens kód

### 💻 Test 13: CSS Kód
```
Írj CSS-t ennek a frame-nek: [URL] > [frame név]
```
**Várt válasz:** CSS kód a frame stílusaihoz

### 💻 Test 14: TypeScript Interface
```
Hozz létre TypeScript interface-t a komponens props-okhoz: [URL]
```
**Várt válasz:** TypeScript interface definíció

## Layout és Struktúra

### 📐 Test 15: Fájl Struktúra
```
Mutasd meg a fájl struktúráját: [URL]
```
**Várt válasz:** Oldalak, frame-ek, rétegek hierarchiája

### 📐 Test 16: Spacing Analízis
```
Milyen térközöket (spacing) használ ez a design: [URL]
```
**Várt válasz:** Spacing értékek (padding, margin, gap)

### 📐 Test 17: Grid Információk
```
Add meg a grid beállításokat: [URL]
```
**Várt válasz:** Grid oszlopok, gutter, margin értékek

## Konzisztencia Ellenőrzés

### ✓ Test 18: Szín Konzisztencia
```
Ellenőrizd, hogy minden szín a definiált palettából van-e: [URL]
```
**Várt válasz:** Konzisztens és nem konzisztens színek listája

### ✓ Test 19: Tipográfia Konzisztencia
```
Találj olyan szövegeket, amelyek nem használnak stílust: [URL]
```
**Várt válasz:** Nem stílusozott szövegek listája

### ✓ Test 20: Komponens Használat
```
Számold meg, hányszor használják az egyes komponenseket: [URL]
```
**Várt válasz:** Használati statisztikák

## Haladó Tesztek

### 🚀 Test 21: Design System Export
```
Exportálj teljes design system dokumentációt: [URL]
```
**Várt válasz:** Átfogó dokumentáció színekkel, tipográfiával, komponensekkel

### 🚀 Test 22: Token JSON
```
Generálj design tokens JSON fájlt: [URL]
```
**Várt válasz:** JSON formátumú design tokens

### 🚀 Test 23: Storybook Stories
```
Hozz létre Storybook story fájlt ehhez a komponenshez: [URL]
```
**Várt válasz:** Storybook CSF (Component Story Format) kód

### 🚀 Test 24: Accessibility Check
```
Ellenőrizd a színkontrasztokat WCAG 2.1 AA szerint: [URL]
```
**Várt válasz:** Kontrasztarányok és megfelelőségi jelentés

### 🚀 Test 25: Component Documentation
```
Generálj MDX dokumentációt ehhez a komponenshez: [URL]
```
**Várt válasz:** Markdown dokumentáció használati példákkal

## Speciális Use Case-ek

### 🎯 Test 26: Icon Set Export
```
Exportáld SVG-ként az összes ikont: [URL]
```
**Várt válasz:** SVG kódok vagy exportálási útmutató

### 🎯 Test 27: Animation Info
```
Milyen animációk vannak ebben a prototípusban: [URL]
```
**Várt válasz:** Animáció típusok, időzítés, easing

### 🎯 Test 28: Responsive Variants
```
Add meg a responsive változatokat: [URL]
```
**Várt válasz:** Különböző breakpoint-okhoz tartozó értékek

### 🎯 Test 29: Brand Colors
```
Készíts brand color palettát különböző formátumokban: [URL]
```
**Várt válasz:** Színek HEX, RGB, HSL formátumban

### 🎯 Test 30: Figma to Code
```
Konvertáld ezt a teljes oldalt HTML/CSS kóddá: [URL]
```
**Várt válasz:** Működő HTML és CSS kód

---

## 📋 Teszt Checklist

Menj végig ezeken a teszteken, és jelöld be, amelyek működnek:

**Alapvető funkciók:**
- [ ] Test 1: Kapcsolat
- [ ] Test 2: Fájl lista
- [ ] Test 3: Fájl info

**Design Tokens:**
- [ ] Test 4-6: Színek
- [ ] Test 7-8: Tipográfia

**Komponensek:**
- [ ] Test 9-11: Komponens info

**Kód Generálás:**
- [ ] Test 12-14: React/CSS/TS

**Layout:**
- [ ] Test 15-17: Struktúra

**Konzisztencia:**
- [ ] Test 18-20: Ellenőrzések

**Haladó:**
- [ ] Test 21-25: Komplex feladatok

**Speciális:**
- [ ] Test 26-30: Use case-ek

---

## 🐛 Probléma Jelentése

Ha valamelyik teszt nem működik:

1. Ellenőrizd a szerver kapcsolatot
2. Próbáld újra más fájllal
3. Nézd meg a hibaüzenetet
4. Olvasd el a [setup-guide.md](setup-guide.md) hibaelhárítás részét

---

## 💡 Saját Tesztek

Add hozzá a saját teszt eseteidet:

```
### Test XX: [Név]
[Prompt]
**Várt válasz:** [Mit vársz]
**Tényleges válasz:** [Mit kaptál]
**Státusz:** ✅ / ❌
```

---

**Hasznos tipp:** Kezdd az egyszerű tesztekkel (1-3), és fokozatosan haladj a bonyolultabbak felé!


