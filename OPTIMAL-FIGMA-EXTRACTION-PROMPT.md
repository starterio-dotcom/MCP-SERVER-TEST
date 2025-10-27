# ⚡ Optimális Figma Token Extraction Prompt

**Használd ezt a promptot a jövőbeni komponens implementálásokhoz!**

---

## 🎯 SABLON PROMPT

```markdown
FELADAT: [KOMPONENS_NEVE] pontos implementálása a Figma design systemből

═══════════════════════════════════════════════════════════
FÁZIS 1: TELJES ADATGYŰJTÉS (NE UGORJ ELŐRE!)
═══════════════════════════════════════════════════════════

1. EXPORT.JSON ELEMZÉS (ha elérhető):
   □ Keresd meg az ÖSSZES "[komponens]" tokent
   □ Listázd ki a teljes hierarchiát
   □ Dokumentáld az ÖSSZES értéket (színek, méretek, spacing, stb.)

2. NODE ID-K MEGHATÁROZÁSA:
   Komponens variánsok:
   - Variáns 1 (pl. Size=Large): [node-id]
   - Variáns 2 (pl. Size=Medium): [node-id]
   - Variáns 3 (pl. Size=Small): [node-id]
   (... minden variáns minden állapotban ...)

3. FIGMA MCP API HÍVÁSOK (PÁRHUZAMOSAN MINDEN NODE-RA):
   □ get_variable_defs(node-id) - tokenek, amiket a node használ
   □ get_screenshot(node-id) - vizuális referencia
   □ get_metadata(node-id) - width, height info

4. EREDMÉNYEK STRUKTURÁLÁSA:
   Készíts táblázatot:
   
   | Variáns | Node ID | Width | Height | Variables |
   |---------|---------|-------|--------|-----------|
   | Large   | xxxxx   | ?     | ?      | {...}     |
   | Medium  | xxxxx   | ?     | ?      | {...}     |

═══════════════════════════════════════════════════════════
FÁZIS 2: CROSS-VALIDATION (KRITIKUS!)
═══════════════════════════════════════════════════════════

5. TOKEN MAPPING KÉSZÍTÉSE:
   
   Minden property-re:
   
   | Property | Export.json | Variable Defs | Screenshot | MEGERŐSÍTVE? |
   |----------|-------------|---------------|------------|--------------|
   | Border-radius | ui/comp/radius: 8 | radius/rounded: 1000 | Pill-shaped | ⚠️ ELTÉRÉS |
   | Gap | ui/comp/gap: 4 | spacing/100: 4 | Tight | ✅ EGYEZÉS |
   | Padding | ui/comp/padding: 16 | spacing/400: 16 | Balanced | ✅ EGYEZÉS |

6. ELTÉRÉSEK AZONOSÍTÁSA:
   
   HA van eltérés:
   □ NE TALÁLJ KI értéket
   □ KÉRDEZZ RÁ a felhasználónál
   □ Példa prompt:
   
   "⚠️ ELTÉRÉST TALÁLTAM:
   
   Border-radius property:
   - Export.json szerint: 8px (ui/comp/radius)
   - Variable defs szerint: 1000px (radius/rounded)
   - Screenshot alapján: pill-shaped (teljesen lekerekített)
   
   Melyik a helyes érték?
   A) 8px (enyhe lekerekítés)
   B) 1000px (pill-shaped, teljesen lekerekített)
   
   Ha leméred a Figmában (Inspect mode), pontosan megmondom."

═══════════════════════════════════════════════════════════
FÁZIS 3: FELHASZNÁLÓI VALIDÁLÁS (NE HAGYD KI!)
═══════════════════════════════════════════════════════════

7. MÉRÉSEK KÉRÉSE:
   
   "Kérlek, ellenőrizd a Figmában (Dev Mode → Inspect):
   
   [KOMPONENS VARIÁNS] (pl. Medium button):
   - Padding (bal/jobb): ? px
   - Gap (ikon és szöveg között): ? px
   - Border-radius: ? px
   - Icon méret: ? px
   - Font-size: ? px
   
   Írd be az értékeket, és pontosan implementálom."

═══════════════════════════════════════════════════════════
FÁZIS 4: IMPLEMENTÁLÁS (CSAK MEGERŐSÍTETT ADATOKKAL)
═══════════════════════════════════════════════════════════

8. TOKEN HASZNÁLAT:
   □ Csak a design-tokens/ fájlokban LÉTEZŐ tokeneket használd
   □ Ellenőrizd a token NEVEKET (pl. --family-primary, NEM --font-family-primary)
   □ Használj semantic tokeneket (--spacing-100, NEM hard-coded 4px)

9. KOMPONENS KÉSZÍTÉS:
   □ React (TypeScript)
   □ Vue 3 (Composition API)
   □ CSS (design tokenekkel)
   □ SCSS (mixinekkel)

10. DOKUMENTÁLÁS:
    □ Minden döntést dokumentálj
    □ Minden tokent magyarázz el
    □ Screenshot referenciákat adj meg

═══════════════════════════════════════════════════════════
FÁZIS 5: VALIDÁLÁS ÉS FINOMHANGOLÁS
═══════════════════════════════════════════════════════════

11. SCREENSHOT ÖSSZEHASONLÍTÁS:
    □ Figma screenshot
    □ Implementált komponens screenshot
    □ Side-by-side comparison
    □ Eltérések dokumentálása

12. DEVTOOLS ELLENŐRZÉS:
    ```javascript
    const component = document.querySelector('[komponens-selector]');
    const styles = getComputedStyle(component);
    
    console.log({
      'Border-radius': styles.borderRadius,  // Várható: ?
      'Padding': styles.padding,             // Várható: ?
      'Gap': styles.gap,                     // Várható: ?
      'Font-family': styles.fontFamily,      // Várható: ?
    });
    ```

13. ITERÁCIÓ:
    □ Ha van eltérés → javítás
    □ Ha bizonytalan vagy → kérdezz
    □ Ha kész → dokumentálás

═══════════════════════════════════════════════════════════
CHECKLIST: MIELŐTT "KÉSZ" LENNÉK
═══════════════════════════════════════════════════════════

□ Minden variáns implementálva
□ Minden állapot (enabled, hover, pressed, disabled, stb.)
□ Screenshot összehasonlítás elvégezve
□ DevTools értékek ellenőrizve
□ Felhasználó visszajelzése kapva
□ Dokumentáció teljes
□ Demo oldal készült

═══════════════════════════════════════════════════════════
```

---

## 🎯 PÉLDA PROMPT (Button Komponens)

```markdown
FELADAT: Button komponens pontos implementálása a Figma design systemből

═══════════════════════════════════════════════════════════
FÁZIS 1: ADATGYŰJTÉS
═══════════════════════════════════════════════════════════

1. EXPORT.JSON ELEMZÉS:
   □ Keresem: "ui/button/*" tokeneket
   □ Elemzem: button-primary/*, button-outline/*, button-subtle/*, button-toggle/*

2. NODE ID-K:
   Button variánsok:
   - Primary Large: 564:11940
   - Primary Medium: 564:11945
   - Primary Small: 564:11950
   - Outline Large: 564:12091
   (... stb. minden variáns ...)

3. API HÍVÁSOK:
   get_variable_defs(564:11940) → {
     "radius/rounded": "1000",
     "spacing/100": "4",
     "spacing/400": "16",
     "size/lg": "18",
     "family/primary": "Inter"
   }

4. CROSS-REFERENCE:
   | Property | Export.json | Variable Defs | Döntés |
   |----------|-------------|---------------|--------|
   | Border-radius | - | radius/rounded: 1000 | ✅ 1000px (pill) |
   | Gap | ui/button/gap: 4 | spacing/100: 4 | ✅ 4px |
   | Padding | ui/button/padding: 16 | spacing/400: 16 | ✅ 16px (Medium) |

═══════════════════════════════════════════════════════════
FÁZIS 2: VALIDÁLÁS
═══════════════════════════════════════════════════════════

5. KÉRDÉS A FELHASZNÁLÓNAK:
   "Kérlek, erősítsd meg a Figmában:
   - Medium button border-radius: 1000px (pill-shaped)? ✅/❌
   - Gap az ikon és szöveg között: 4px? ✅/❌
   - Icon méret Medium button-ban: 16px vagy 20px? 🤔"

═══════════════════════════════════════════════════════════
FÁZIS 3: IMPLEMENTÁLÁS
═══════════════════════════════════════════════════════════

6. CSS:
   ```css
   .btn {
     font-family: var(--family-primary);  /* Inter */
     border-radius: var(--radius-rounded); /* 1000px */
     gap: var(--spacing-100);              /* 4px */
   }
   
   .btn-medium {
     padding: 0 var(--spacing-400);        /* 16px */
     font-size: var(--size-base);          /* 16px */
   }
   ```

═══════════════════════════════════════════════════════════
```

---

## 🚨 KRITIKUS HIBÁK, AMIKET KERÜLJ:

### ❌ 1. Korai Implementálás
```
ROSSZ: "Látom a node-ot, implementálom a komponenst"
JÓ: "Gyűjtöm MINDEN variáns MINDEN adatát, AZTÁN implementálom"
```

### ❌ 2. Feltételezések
```
ROSSZ: "Valószínűleg 8px a radius"
JÓ: "Látom: radius/rounded: 1000 ÉS radius/base: 8. Kérdezek."
```

### ❌ 3. Hiányos Token Ellenőrzés
```
ROSSZ: font-family: var(--font-family-primary);
JÓ: Először ellenőrzöm a typography.css-t → --family-primary ✅
```

### ❌ 4. Egyetlen Node Vizsgálata
```
ROSSZ: Csak a Large button-t nézem meg
JÓ: MINDEN méretet (Large, Medium, Small, XSmall) vizsgálok
```

### ❌ 5. Screenshot Összehasonlítás Hiánya
```
ROSSZ: "Kész a komponens!"
JÓ: "Összehasonlítom a Figma screenshot-tal → 3 eltérés → javítom"
```

---

## 📊 SIKERKRITÉRIUMOK

### Egy komponens AKKOR jó, ha:

- ✅ **100% screenshot egyezés** (pixel-perfect)
- ✅ **Minden token helyes** (ellenőrizve DevTools-ban)
- ✅ **Felhasználó megerősítette** ("Igen, ez pontosan így néz ki a Figmában")
- ✅ **Dokumentáció teljes** (minden döntés indoklással)
- ✅ **Működik minden variáns** (Large, Medium, Small, stb.)
- ✅ **Működik minden állapot** (enabled, hover, pressed, stb.)

---

## 🎓 TANULSÁGOK

### Mit tanultam ebből a Button projektből:

1. **Figma MCP API NEM ad vissza mindent** → Export.json elengedhetetlen
2. **Tokenek nevei NEM mindig egyértelműek** → Ellenőrizni kell a design-tokens/ fájlokban
3. **Feltételezések MINDIG rosszak** → Kérdezni kell
4. **Egy screenshot többet mond** → Mindig kérj screenshot-ot
5. **Iteráció normális** → 2-3 javítási kör elvárható

---

## 🚀 KÖVETKEZŐ PROJEKT: Használd ezt a promptot!

Másold be ezt a teljes promptot, és töltsd ki a [KOMPONENS_NEVE] és node ID-kat.

**Eredmény**: 90%+ pontosság az első implementálásban! 🎯

---

**Készítette**: AI Assistant  
**Tapasztalat alapján**: Button komponens implementálás (3 iteráció)  
**Státusz**: Production-ready sablon  
**Verzió**: 1.0

