# 🗺️ Fájl Térkép - Figma MCP Server Setup

```
📦 mcp-server-test/
│
├── 🚀 START-HERE.md              ⭐ KEZDD EZZEL! Navigációs központ
│
├── ⚡ GYORS START (5-15 perc)
│   ├── QUICKSTART.md             → 5 lépésben beállítás
│   └── test-prompts.md           → 30 teszt prompt funkciók kipróbálásához
│
├── 📚 DOKUMENTÁCIÓ
│   ├── README.md                 → Teljes áttekintés és bevezető
│   ├── setup-guide.md            → Részletes telepítési útmutató lépésről-lépésre
│   ├── TROUBLESHOOTING.md        → Hibaelhárítás és debug
│   └── PROJECT-SUMMARY.md        → Projekt összefoglaló, use case-ek, learning path
│
├── 💡 GYAKORLATI PÉLDÁK
│   └── examples.md               → 15 real-world példa különböző use case-ekre
│
├── ⚙️ KONFIGURÁCIÓ
│   ├── mcp-config.json           → MCP szerver konfig template
│   ├── .cursorrules              → Cursor-specifikus szabályok (rejtett)
│   └── .gitignore                → Git ignore szabályok (rejtett)
│
└── 📋 META
    └── FILE-MAP.md               → Ez a fájl - projekt térkép
```

---

## 📄 Fájl Részletek

### 🚀 START-HERE.md
```
Méret: ~5 KB
Olvasási idő: 5 perc
Tartalom:
  - Döntési fa navigációhoz
  - Fájl útmutató
  - Tanulási útvonalak
  - Use case alapú navigáció
  - Ultra gyors start
  - FAQ
  - Setup checklist
```
**Mikor használd:** Amikor először nyitod meg a projektet

---

### ⚡ QUICKSTART.md
```
Méret: ~3 KB
Olvasási idő: 5 perc
Setup idő: 5-10 perc
Tartalom:
  - 5 lépéses beállítás
  - Szerver típus választás
  - Cursor konfiguráció
  - Első teszt
  - Hibaelhárítás gyorslinkkek
```
**Mikor használd:** Amikor be akarod állítani a Figma MCP szervert

**Következő lépés után:** test-prompts.md vagy examples.md

---

### 🧪 test-prompts.md
```
Méret: ~8 KB
Tesztelési idő: 15-60 perc
Tartalom:
  - 30 teszt prompt kategóriákba szedve
  - Alapvető tesztek (kapcsolat, fájlok)
  - Színek és tokenek
  - Tipográfia
  - Komponensek
  - Kód generálás
  - Layout
  - Konzisztencia check
  - Haladó use case-ek
  - Teszt checklist
```
**Mikor használd:** Setup után, funkciók tesztelésére

**Nehézség:** Kezdő → Haladó (Test 1-30)

---

### 💡 examples.md
```
Méret: ~12 KB
Olvasási idő: 20-30 perc
Tartalom:
  - 15 részletes példa
  - Design token kinyerés (színek, tipográfia, spacing)
  - Komponens információk és inventár
  - Layout elemzés
  - Stílus konzisztencia
  - Kód generálás (React, CSS)
  - Design metrikák
  - Haladó használat
  - Tippek és korlátozások
```
**Mikor használd:** Amikor inspirációra van szükséged, vagy konkrét use case-t keresel

**Nehézség:** Kezdő → Haladó (Példa 1-15)

---

### 📖 README.md
```
Méret: ~7 KB
Olvasási idő: 15 perc
Tartalom:
  - Mi az a Figma MCP Server
  - Beállítási összefoglaló
  - Funkciók listája
  - Konfigurációs fájlok
  - Megjegyzések (béta, auth, limitációk)
  - További információk
```
**Mikor használd:** Amikor átfogó képet akarsz a projektről

---

### 📘 setup-guide.md
```
Méret: ~10 KB
Olvasási idő: 30+ perc
Setup idő: 15-30 perc
Tartalom:
  - Előfeltételek
  - Szerver típus választás (részletes összehasonlítás)
  - Helyi szerver engedélyezése (lépésről-lépésre)
  - MCP szerver hozzáadása Cursorhoz (2 módszer)
  - Tesztelés
  - Hibaelhárítás
  - API token generálás
  - Hasznos linkek
  - Következő lépések
```
**Mikor használd:** Amikor a QUICKSTART nem elég részletes, vagy problémákba ütközöl

**Nehézség:** Részletes, képernyőképekkel magyarázott

---

### 🔧 TROUBLESHOOTING.md
```
Méret: ~9 KB
Olvasási idő: 15-20 perc
Tartalom:
  - "Cannot connect" hiba
  - "Authentication required" hiba
  - "Feature not available" hiba
  - "Timeout" hiba
  - Cursor nem látja az MCP szervert
  - "Invalid Figma URL" hiba
  - Lassú válaszidő
  - AI nem érti a parancsokat
  - Debug lépések
  - Diagnosztikai táblázat
  - Hiba jelentés template
```
**Mikor használd:** Amikor valami nem működik

**Struktúra:** Probléma → Lehetséges okok → Megoldások

---

### 📊 PROJECT-SUMMARY.md
```
Méret: ~8 KB
Olvasási idő: 20 perc
Tartalom:
  - Projekt áttekintő
  - Fájlok áttekintése táblázatos formában
  - Mit tudsz csinálni ezzel (részletesen)
  - Dokumentáció térkép
  - Technikai részletek (szerver opciók, követelmények)
  - Tanulási útvonal (1-3 hét)
  - Use case-ek célcsoportonként
  - Fontos megjegyzések (béta, biztonság, limitációk)
  - Frissítések követése
  - Checklist
```
**Mikor használd:** Amikor "big picture" megértést akarsz, vagy konkrét use case-t keresel

---

### ⚙️ mcp-config.json
```
Méret: ~1.5 KB
Formátum: JSON
Tartalom:
  - Helyi szerver konfig
  - Távoli szerver konfig
  - Beállítási instrukciók
  - Funkciók listája
  - Megjegyzések (béta, auth, limitációk)
```
**Mikor használd:** Referenciának vagy manuális konfiguráció esetén

**Használat:** 
- Másolható Cursor settings.json-ba
- Template saját konfigurációhoz

---

### 📝 .cursorrules
```
Méret: ~1 KB
Formátum: Markdown
Tartalom:
  - Szerver URL-ek
  - Setup instrukciók
  - Funkciók összefoglalója
```
**Mikor használd:** Automatikusan használja a Cursor (nem kell manuálisan)

**Megjegyzés:** Rejtett fájl (dot-file)

---

### 🚫 .gitignore
```
Méret: ~500 bytes
Formátum: Text
Tartalom:
  - Environment változók (.env)
  - Generált tokenek
  - IDE specifikus fájlok
  - OS fájlok
  - Logok
  - Dependencies
  - Temp fájlok
```
**Mikor használd:** Automatikusan használja a Git

**Megjegyzés:** Rejtett fájl (dot-file), védi az érzékeny adatokat

---

### 🗺️ FILE-MAP.md
```
Méret: ~6 KB
Olvasási idő: 10 perc
Tartalom:
  - Projekt fa struktúra
  - Minden fájl részletes leírása
  - Mikor melyik fájlt használd
  - Fájl kapcsolatok
  - Olvasási útvonalak
```
**Mikor használd:** Ez a fájl! Meta-navigációhoz.

---

## 🔗 Fájl Kapcsolatok

### Lineáris Learning Path
```
START-HERE.md
    ↓
QUICKSTART.md
    ↓
test-prompts.md (Test 1-5)
    ↓
examples.md (Példa 1-3)
    ↓
examples.md (Példa 4-10)
    ↓
test-prompts.md (Test 6-20)
    ↓
examples.md (Példa 11-15)
    ↓
test-prompts.md (Test 21-30)
```

### Problémamegoldási Path
```
Probléma van!
    ↓
TROUBLESHOOTING.md
    ↓
Ha nem segített ↓
    ↓
setup-guide.md (Hibaelhárítás rész)
    ↓
Ha még mindig nem ↓
    ↓
Figma Community Forum
```

### Referencia Path
```
Általános infó → README.md
Projekt áttekintés → PROJECT-SUMMARY.md
Konfig referencia → mcp-config.json
Technikai részletek → setup-guide.md
Use case ötletek → examples.md
```

---

## 📈 Olvasási Sorrendek

### Teljesen Kezdő
```
1. START-HERE.md              (5 perc)
2. QUICKSTART.md              (10 perc)
3. test-prompts.md (Test 1-3) (5 perc)
4. examples.md (Példa 1-2)    (10 perc)

Össz idő: ~30 perc
```

### Van Időd Alaposan Beállítani
```
1. START-HERE.md         (5 perc)
2. README.md             (15 perc)
3. setup-guide.md        (30 perc)
4. test-prompts.md       (20 perc)
5. examples.md           (30 perc)
6. PROJECT-SUMMARY.md    (15 perc)

Össz idő: ~2 óra
```

### Csak a Lényeg
```
1. QUICKSTART.md              (5 perc)
2. test-prompts.md (Test 1-3) (5 perc)
3. Használd! 🚀

Össz idő: 10 perc
```

### Problémám Van
```
1. TROUBLESHOOTING.md    (5-10 perc)
   └─> Ha nem segít
       ↓
2. setup-guide.md        (10-20 perc)
   (Hibaelhárítás rész)
```

### Use Case Alapú
```
"Mi mindent tudok csinálni?"
    → examples.md (teljes)
    → PROJECT-SUMMARY.md (Use case-ek rész)

"Design tokeneket akarok"
    → examples.md (Példa 1-6)
    → test-prompts.md (Test 4-8)

"Komponenst akarok generálni"
    → examples.md (Példa 9-10)
    → test-prompts.md (Test 12-14)
```

---

## 📊 Fájl Statisztikák

```
Összes fájl: 11
Dokumentáció: 8 fájl (~50 KB)
Konfiguráció: 3 fájl (~3 KB)

Teljes projekt méret: ~53 KB

Olvasási idő (teljes): ~2-3 óra
Minimum setup idő: 5-10 perc
Ajánlott tanulási idő: 2-4 óra (3 napra elosztva)
```

---

## 🎯 Gyors Keresés

**"Hogy állítom be?"**
→ QUICKSTART.md vagy setup-guide.md

**"Nem működik"**
→ TROUBLESHOOTING.md

**"Mit tudok csinálni vele?"**
→ examples.md vagy PROJECT-SUMMARY.md

**"Hogy teszteljem?"**
→ test-prompts.md

**"Mi ez az egész?"**
→ START-HERE.md vagy README.md

**"Hol vagyok?"**
→ Ez a fájl (FILE-MAP.md) 😊

---

## 💡 Tipp

Mentsd el ezt a fájlt (FILE-MAP.md) könyvjelzőként, és használd navigációs központként, amikor elveszettnek érzed magad a dokumentációban!

---

**Utolsó frissítés:** 2025. október 26.  
**Verzió:** 1.0.0


