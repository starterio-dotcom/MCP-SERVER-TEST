# 🔍 Figma MCP Szerver Limitációk - Miért Nem Pontos a Token Extraction?

**Dátum**: 2025. október 27.  
**Probléma**: A komponensek nem 100%-ban egyeznek a Figma design-nal  
**Elemzés célja**: Azonosítani a gyenge pontokat és javítási javaslatokat adni

---

## 🎯 Probléma Összefoglalás

### Mi Nem Működött Jól:

1. ❌ **Border-radius**: Feltételeztem 8px-t, de 1000px volt (pill-shaped)
2. ❌ **Font-family token neve**: `--font-family-primary` helyett `--family-primary`
3. ❌ **Font-weight token neve**: `--font-weight-medium` helyett `--weight-medium`
4. ⚠️ **Icon méretek**: Nem volt egyértelmű a megfelelő méret
5. ⚠️ **Gap értékek**: 8px helyett 4px kellett volna
6. ⚠️ **Padding értékek**: Nem ellenőriztem kellően részletesen

### Mi Működött Jól:

1. ✅ **Színek** (button-primary-background-enabled, stb.)
2. ✅ **Font méretek** (size-lg, size-base, stb.)
3. ✅ **Spacing tokenek** (spacing-400, spacing-600, stb.)
4. ✅ **Komponens tokenek** kinyerése az export.json-ból

---

## 🔬 Figma MCP API Limitációk

### 1. **`get_design_context` Tool**

**Mit ad vissza**:
```javascript
// Példa:
import DapDSButtonReact from "dist/react.js"

export default function SizeLargeStateEnabledColorBrandIconOnlyNo() {
  return (
    <CodeConnectSnippet data-name="Size=Large, State=Enabled, Color=Brand, Icon only=No" data-node-id="564:11940">
      <DapDSButtonReact />
    </CodeConnectSnippet>
  );
}
```

**Probléma**:
- ❌ **Nem ad vissza részletes stílusokat** (padding, gap, icon méret)
- ❌ **Csak Code Connect snippet-et ad**, ha van
- ❌ **Nem láthatók a pontos pixel értékek**

**Amit NEM kapok meg**:
- Border-radius konkrét értéke
- Padding konkrét értéke
- Gap konkrét értéke
- Icon konkrét mérete

---

### 2. **`get_variable_defs` Tool**

**Mit ad vissza**:
```json
{
  "button-primary/text/enabled": "#ffffff",
  "size/lg": "18",
  "family/primary": "Inter",
  "weight/bold": "700",
  "spacing/100": "4",
  "radius/rounded": "1000",
  "border/neutral/transparent-interactive": "#ffffff00",
  "spacing/0": "0",
  "spacing/400": "16",
  "spacing/300": "12",
  "spacing/1200": "48",
  "button-primary/background/enabled": "#4258ed"
}
```

**Előnyök**:
- ✅ **Variable definitions** - tokenek, amiket a kiválasztott node használ
- ✅ **Értelmes token nevek** (radius/rounded, spacing/100, stb.)

**Problémák**:
- ⚠️ **NEM látható, MELYIK property MELYIK tokent használja**
  - Példa: Látom, hogy "radius/rounded": "1000" létezik, de NEM látom, hogy a button border-radiusa EZT használja
- ⚠️ **Csak a KIVÁLASZTOTT node variable-jei** látszódnak
- ❌ **Nem látom a gap, padding, icon size specifikus értékét**

---

### 3. **`get_metadata` Tool**

**Mit ad vissza**:
```xml
<symbol id="564:11940" name="Size=Large, State=Enabled, Color=Brand, Icon only=No" x="200" y="202" width="147" height="48" />
```

**Előnyök**:
- ✅ **Width, height** információ
- ✅ **Node ID és név**

**Problémák**:
- ❌ **Csak bounding box méretek** (width, height)
- ❌ **NEM látható a belső struktúra** (padding, gap, icon méret)
- ❌ **NEM láthatók a stílusok**

---

### 4. **`get_screenshot` Tool**

**Mit ad vissza**:
- ✅ **Vizuális kép** a komponensről

**Előnyök**:
- ✅ Látható a **vizuális megjelenés**
- ✅ Összehasonlítható az implementációval

**Problémák**:
- ❌ **Pixel-perfect mérések nehezek**
- ❌ **Nem láthatók a pontos értékek**

---

## 🎯 A Fő Probléma: Hiányzó Információk

### Mit NEM tudok meg a Figma MCP API-ból:

| Információ | get_design_context | get_variable_defs | get_metadata | get_screenshot |
|------------|-------------------|-------------------|--------------|----------------|
| **Border-radius érték** | ❌ | ⚠️ (token létezik) | ❌ | ⚠️ (vizuális) |
| **Padding érték** | ❌ | ⚠️ (token létezik) | ❌ | ⚠️ (vizuális) |
| **Gap érték** | ❌ | ⚠️ (token létezik) | ❌ | ⚠️ (vizuális) |
| **Icon méret** | ❌ | ❌ | ❌ | ⚠️ (vizuális) |
| **Melyik token → melyik property** | ❌ | ❌ | ❌ | ❌ |

### Következmény:

**FELTÉTELEZÉSEKRE vagyok utalva**:
- "Hmm, a Large button 48px magas, valószínűleg 24px-es ikon kell"
- "Van egy radius/rounded: 1000 token, DE nem látom, hogy a button EZT használja"
- "spacing/200 = 8px gap? Vagy spacing/100 = 4px?"

---

## 📊 Export.json vs MCP API

### Export.json Előnyei:

**Mit kapok meg**:
```json
{
  "ui/button/size/Large": {
    "$type": "number",
    "$value": 48
  },
  "ui/button/padding/horizontal/Large": {
    "$type": "number",
    "$value": 24
  },
  "ui/button/gap": {
    "$type": "number",
    "$value": 4
  }
}
```

**Előnyök**:
- ✅ **Strukturált tokenek**
- ✅ **Pontos értékek**
- ✅ **Hierarchia** (ui/button/size/Large)

**Problémák**:
- ❌ **Manuálisan kell generálni** (Figma plugin)
- ❌ **Nem mindig naprakész**
- ❌ **Nem minden design systemben van**

---

## 🔧 Javasolt Megoldások

### 1. **Jobb Prompt Struktúra**

#### ❌ Rossz Prompt:
```
"Hozd létre a Button komponenst a Figma alapján"
```

**Probléma**: Túl általános, nincs elég információ.

---

#### ✅ Jó Prompt (Javasolt):

```
FELADAT: Button komponens implementálása a Figma design system alapján

1. ADATGYŰJTÉS:
   a) Hívd meg get_variable_defs-t a következő node-okra:
      - Large button: 564:11940
      - Medium button: 564:11945
      - Small button: 564:11950
      
   b) Hívd meg get_screenshot-ot minden méretre
   
   c) Elemezd az export.json fájlt a "ui/button" tokenekre

2. KONKRÉT MÉRÉSEK MEGHATÁROZÁSA:
   a) Border-radius: Nézd meg a variable_defs "radius/*" tokeneket
      - Ha van "radius/rounded": 1000 → pill-shaped
      - Ha van "radius/base": 8 → enyhe lekerekítés
      
   b) Gap (ikon és szöveg): Nézd meg a "spacing/*" tokeneket
      - spacing/100 (4px) → tight
      - spacing/200 (8px) → normal
      
   c) Icon méret: Ellenőrizd az arányokat
      - Large button (48px) → icon-md (20px) vagy icon-lg (24px)?
      - Medium button (40px) → icon-sm (16px) vagy icon-md (20px)?

3. CROSS-REFERENCE:
   - Export.json tokenek
   - Variable definitions
   - Screenshot vizuális ellenőrzés
   
4. IMPLEMENTÁLÁS:
   - Csak a MEGERŐSÍTETT tokeneket használd
   - NE feltételezz értékeket
   - Ha bizonytalan vagy, KÉRDEZZ RÁ

5. VALIDÁLÁS:
   - Screenshot összehasonlítás
   - DevTools mérések
   - Token használat ellenőrzése
```

---

### 2. **Strukturált Adatgyűjtési Folyamat**

#### Lépés 1: Tokenek Azonosítása

```typescript
// JAVASOLT WORKFLOW:

// 1. Gyűjtsd össze az ÖSSZES releváns node-ot
const buttonNodes = {
  largeButton: "564:11940",
  mediumButton: "564:11945",
  smallButton: "564:11950",
  xsmallButton: "564:11955",
  
  largeButtonWithIcon: "564:xxxxx",  // Ha van külön
  mediumButtonWithIcon: "564:yyyyy",
};

// 2. Minden node-ra hívd meg:
for (const [name, nodeId] of Object.entries(buttonNodes)) {
  const variables = await get_variable_defs(nodeId);
  const screenshot = await get_screenshot(nodeId);
  const metadata = await get_metadata(nodeId);
  
  // Elemzés:
  console.log(`${name}:`, {
    variables,
    width: metadata.width,
    height: metadata.height,
    screenshot: screenshot
  });
}
```

---

#### Lépés 2: Cross-Reference Export.json

```typescript
// 3. Elemezd az export.json fájlt
const exportTokens = parseExportJson("export.json");

// 4. Találd meg a button-specifikus tokeneket
const buttonTokens = filterTokens(exportTokens, "ui/button/*");

// 5. Hasonlítsd össze a variable_defs-el
const resolvedTokens = crossReference(variableDefs, buttonTokens);
```

---

#### Lépés 3: Validálás

```typescript
// 6. Ellenőrizd minden property-t
const validation = {
  borderRadius: {
    variableDef: "radius/rounded: 1000",
    exportJson: "ui/button/radius: 1000",
    confirmed: true ✅
  },
  gap: {
    variableDef: "spacing/100: 4",
    exportJson: "ui/button/gap: 4",
    confirmed: true ✅
  },
  padding: {
    variableDef: "spacing/400: 16",
    exportJson: "ui/button/padding/horizontal/Medium: 16",
    confirmed: true ✅
  }
};
```

---

### 3. **Interaktív Ellenőrzési Folyamat**

**Helyett**: Feltételezem az értékeket  
**Jobb**: Kérdések a felhasználónak

```markdown
KÉRDÉS A FELHASZNÁLÓNAK:

"Ellenőrzöm a Button komponens specifikációit. Kérlek, erősítsd meg:

1. **Border-radius**: 
   - Találtam: radius/rounded: 1000px (pill-shaped)
   - Ez helyes? (igen/nem)

2. **Gap (ikon és szöveg között)**:
   - Találtam: spacing/100: 4px
   - Ez helyes? (igen/nem)

3. **Icon méret (Medium button)**:
   - Opció A: icon-md (20px)
   - Opció B: icon-sm (16px)
   - Melyik a helyes? (A/B)

Ha leméred a Figmában, pontos értékeket adhatok."
```

---

### 4. **Figma Inspect Mode Használata**

**Javaslat a felhasználónak**:

```
HA LEHETSÉGES:

1. Nyisd meg a Figmát
2. Válaszd ki a Medium Button-t
3. Dev Mode → Inspect
4. Nézd meg:
   - Padding: ?px
   - Gap: ?px
   - Border-radius: ?px
   - Icon size: ?px

5. Írd be az értékeket:
   "Medium button: padding 16px, gap 4px, radius 1000px, icon 16px"
```

---

## 🎯 Optimális Prompt Sablon

### **SABLON: Komponens Implementálás Figmából**

```markdown
FELADAT: [Komponens neve] implementálása a Figma design system alapján

═══════════════════════════════════════════════════════════

LÉPÉS 1: ADATGYŰJTÉS

1.1 Node ID-k:
  - [Variáns 1]: [node-id]
  - [Variáns 2]: [node-id]
  - [Variáns 3]: [node-id]

1.2 API Hívások:
  □ get_variable_defs minden node-ra
  □ get_screenshot minden node-ra
  □ get_metadata minden node-ra

1.3 Export.json Elemzés:
  □ Keress "[komponens]" tokenekre
  □ Azonosítsd a hierarchiát
  □ Listázd ki az összes releváns tokent

═══════════════════════════════════════════════════════════

LÉPÉS 2: TOKEN MAPPING

2.1 Színek:
  - Background: ?
  - Text: ?
  - Border: ?

2.2 Méretek:
  - Width: ?
  - Height: ?
  - Padding: ?
  - Gap: ?
  - Border-radius: ?

2.3 Tipográfia:
  - Font-family: ?
  - Font-size: ?
  - Font-weight: ?
  - Line-height: ?

═══════════════════════════════════════════════════════════

LÉPÉS 3: CROSS-VALIDATION

3.1 Ellenőrizd:
  □ variable_defs ↔ export.json
  □ Screenshot ↔ Metadata
  □ Token nevek ↔ Design tokens fájlok

3.2 Azonosítsd az eltéréseket:
  - Ha variable_defs mondja: "radius/rounded: 1000"
  - És export.json mondja: "ui/button/radius: 8"
  - → KÉRDEZZ RÁ a felhasználónál!

═══════════════════════════════════════════════════════════

LÉPÉS 4: IMPLEMENTÁLÁS

4.1 Csak MEGERŐSÍTETT tokeneket használj
4.2 NE találj ki értékeket
4.3 Dokumentáld a döntéseket

═══════════════════════════════════════════════════════════

LÉPÉS 5: VALIDÁLÁS

5.1 Screenshot összehasonlítás
5.2 DevTools ellenőrzés
5.3 Felhasználói feedback

═══════════════════════════════════════════════════════════
```

---

## 📊 Összefoglaló: Mi Javítana a Folyamaton?

### 1. **Strukturáltabb API Használat**

| Jelenleg | Jobb Megközelítés |
|----------|-------------------|
| Hívom a get_variable_defs-t EGYSZER | Hívom MINDEN variánsra |
| Feltételezem az értékeket | Cross-reference export.json-nal |
| Implementálom a komponenst | Először VALIDÁLOM az adatokat |

---

### 2. **Több Interakció a Felhasználóval**

```
HELYETT: "Szerintem 8px a radius"
JOBB: "Találtam két lehetséges radiust: 8px és 1000px. Melyik a helyes?"
```

---

### 3. **Export.json Kötelező Használata**

```
FIGMA MCP API: Részleges információ
EXPORT.JSON: Teljes token struktúra
KETTŐ EGYÜTT: 100% pontosság
```

---

### 4. **Screenshot-Based Validation**

```typescript
// Minden implementálás után:
1. Screenshot a Figmából
2. Screenshot a demo-ból
3. Összehasonlítás
4. Eltérések dokumentálása
5. Javítások alkalmazása
```

---

## 🎓 Tanulságok

### Mit Tanultam Ebből a Projektből:

1. ✅ **Figma MCP API korlátozott** - nem ad vissza minden részletet
2. ✅ **Export.json elengedhetetlen** - teljes token struktúra
3. ✅ **Felhasználói validálás kritikus** - ő látja a Figmát
4. ✅ **Screenshot összehasonlítás** - vizuális validálás
5. ✅ **Iteratív folyamat** - több kör, finomhangolás

### Mit Csinálnék Másként Legközelebb:

1. **Első lépés**: Export.json teljes elemzése
2. **Második lépés**: MINDEN variáns variable_defs lekérése
3. **Harmadik lépés**: Cross-reference
4. **Negyedik lépés**: Felhasználói validálás IMPLEMENTÁLÁS ELŐTT
5. **Ötödik lépés**: Implementálás CSAK megerősített adatokkal

---

## 🚀 Következő Projekt Ajánlott Workflow

```
1. □ Export.json elemzése (ha van)
2. □ Összes variáns node ID-jának meghatározása
3. □ get_variable_defs minden variánsra
4. □ get_screenshot minden variánsra
5. □ Token mapping táblázat készítése
6. □ Felhasználói validálás (mérések a Figmából)
7. □ Implementálás
8. □ Screenshot összehasonlítás
9. □ Finomhangolás
10. □ Dokumentálás
```

---

**Készítette**: AI Assistant  
**Dátum**: 2025. október 27.  
**Státusz**: Elemzés és javaslatok  
**Következő**: Optimalizált workflow alkalmazása

