# 🔧 Hibaelhárítás - Figma MCP Server

## Gyakori Problémák és Megoldások

### ❌ Hiba: "Cannot connect to MCP server"

#### Helyi szerver esetén (http://127.0.0.1:3845/mcp)

**Lehetséges okok és megoldások:**

1. **A Figma Desktop nincs elindítva**
   - ✅ Indítsd el a Figma Desktop alkalmazást
   - ✅ Várj, amíg teljesen betöltődik

2. **Az MCP szerver nincs engedélyezve**
   - ✅ Nyiss meg egy design fájlt (nem FigJam!)
   - ✅ Kapcsolj Dev Mode-ra (Shift + D)
   - ✅ Kattints az "Enable desktop MCP server" gombra
   - ✅ Keress megerősítő üzenetet

3. **Elavult Figma verzió**
   - ✅ Menj a Help > Check for updates
   - ✅ Telepítsd a legújabb verziót
   - ✅ Indítsd újra a Figmát

4. **Tűzfal blokkolja a 3845-ös portot**
   - ✅ Nyisd meg a Windows tűzfal beállításokat
   - ✅ Add hozzá a Figma-t a kivételekhez
   - ✅ Engedélyezd a 3845-ös portot

5. **Más alkalmazás használja a portot**
   - ✅ Zárd be az összes alkalmazást
   - ✅ Indítsd újra a Figmát
   - ✅ Próbáld ellenőrizni böngészőben: http://127.0.0.1:3845/mcp

**Gyors teszt:**
```bash
# PowerShellben:
Test-NetConnection -ComputerName 127.0.0.1 -Port 3845

# Vagy böngészőben:
# http://127.0.0.1:3845/mcp
```

#### Távoli szerver esetén (https://mcp.figma.com/mcp)

**Lehetséges okok és megoldások:**

1. **Nincs internet kapcsolat**
   - ✅ Ellenőrizd az internet kapcsolatot
   - ✅ Próbálj megnyitni más weboldalt
   - ✅ Indítsd újra a routert

2. **Figma szolgáltatás kiesés**
   - ✅ Nézd meg: https://status.figma.com/
   - ✅ Várj néhány percet és próbáld újra

3. **Proxy vagy VPN problémák**
   - ✅ Próbáld kikapcsolni a VPN-t
   - ✅ Ellenőrizd a proxy beállításokat

---

### ❌ Hiba: "Authentication required" vagy "Unauthorized"

**Lehetséges okok és megoldások:**

1. **Nincs bejelentkezve**
   - ✅ Jelentkezz be a Figma Desktop alkalmazásba
   - ✅ Vagy böngészőben: https://www.figma.com/

2. **Nincs hozzáférésed a fájlhoz**
   - ✅ Ellenőrizd a fájl megosztási beállításait
   - ✅ Kérd meg a tulajdonost, hogy adjon "Can view" vagy "Can edit" jogot

3. **Lejárt session**
   - ✅ Jelentkezz ki és vissza a Figmába
   - ✅ Indítsd újra a Figma Desktop-ot

4. **Access token hiányzik vagy érvénytelen**
   - ✅ Generálj új personal access token-t:
     - Figma > Settings > Personal access tokens
     - "Generate new token"
   - ✅ Állítsd be környezeti változóként:
```bash
# .env fájl
FIGMA_ACCESS_TOKEN=your_token_here
```

---

### ❌ Hiba: "Feature not available" vagy "Not supported"

**Lehetséges okok:**

1. **A funkció még béta verzióban van**
   - ℹ️ Nem minden funkció elérhető
   - ℹ️ Próbálj egyszerűbb lekérdezést

2. **Előfizetési korlát**
   - ℹ️ Bizonyos funkciók csak Professional vagy Enterprise csomagnál érhetők el
   - ✅ Ellenőrizd a csomagodat: Figma > Settings > Billing

3. **A fájl típusa nem támogatott**
   - ℹ️ Az MCP csak Figma Design fájlokkal működik
   - ✅ FigJam fájlok nem támogatottak

---

### ❌ Hiba: "Timeout" vagy "Request too large"

**Lehetséges okok és megoldások:**

1. **Túl nagy fájl**
   - ✅ Próbálj kisebb fájllal
   - ✅ Kérdezz rá specifikusabb dolgokra (pl. csak egy oldal)

2. **Lassú kapcsolat**
   - ✅ Ellenőrizd az internet sebességet
   - ✅ Próbáld helyi szervert használni távoli helyett

3. **Túl összetett lekérdezés**
   - ✅ Bontsd kisebb részekre a kérést
   - ✅ Ne kérdezz rá egyszerre minden komponensre

---

### ❌ Hiba: Cursor nem látja az MCP szervert

**Lehetséges okok és megoldások:**

1. **Nem megfelelő konfiguráció**
   - ✅ Ellenőrizd a settings.json fájlt
   - ✅ Formátum:
```json
{
  "mcp.servers": {
    "figma-mcp": {
      "type": "http",
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

2. **Nem indítottad újra a Cursort**
   - ✅ Zárd be teljesen a Cursort
   - ✅ Nyisd meg újra

3. **MCP extension nincs engedélyezve**
   - ✅ Extensions (Ctrl+Shift+X)
   - ✅ Keresd: "MCP"
   - ✅ Engedélyezd, ha szükséges

4. **Rossz URL vagy elírás**
   - ✅ Ellenőrizd: **https://mcp.figma.com/mcp** (nem .com/api!)
   - ✅ Ellenőrizd: **http://127.0.0.1:3845/mcp** (helyi szervernél)

---

### ❌ Hiba: "Invalid Figma URL"

**Helyes URL formátumok:**

✅ **Fájl URL:**
```
https://www.figma.com/file/ABC123/File-Name
https://www.figma.com/design/ABC123/File-Name
```

✅ **Specifikus oldal:**
```
https://www.figma.com/file/ABC123/File-Name?node-id=1:2
```

❌ **Hibás formátumok:**
```
www.figma.com/file/ABC123  (nincs https://)
figma.com/ABC123  (hiányos)
https://figma.com/proto/...  (prototípus link)
```

---

### ❌ Hiba: Az AI nem érti a Figma parancsokat

**Lehetséges okok:**

1. **Nem világos a prompt**
   - ✅ Légy specifikus: "Listázd ki a színeket a [URL] fájlból"
   - ❌ Ne: "Nézd meg ezt"

2. **Nincs URL a kérésben**
   - ✅ Mindig add meg a Figma fájl URL-jét
   - Példa: "Elemezd a [https://figma.com/file/ABC123/...] fájlt"

3. **Az MCP szerver nem válaszol**
   - ✅ Először teszted a kapcsolatot: "Elérhető a Figma MCP szerver?"

---

### ❌ Hiba: Lassú válaszidő

**Lehetséges megoldások:**

1. **Használj helyi szervert távoli helyett**
   - Helyi: ~100ms
   - Távoli: ~500-1000ms

2. **Kérdezz rá kisebb részekre**
   - ❌ "Add meg az egész design system-et"
   - ✅ "Add meg a színeket" → majd külön "Add meg a tipográfiát"

3. **Ellenőrizd a fájl méretét**
   - Nagy fájlok (100+ oldal) lassabbak
   - Próbálj specifikus oldalra hivatkozni

---

## 🔍 Debug Lépések

Ha semmi sem működik, kövesd ezt a debug folyamatot:

### 1. Alapvető ellenőrzések

```
☐ Cursor legújabb verziója telepítve?
☐ Figma Desktop legújabb verziója? (helyi szervernél)
☐ Be vagy jelentkezve a Figmába?
☐ Van internet kapcsolat?
```

### 2. Szerver ellenőrzés

**Helyi szerver:**
```powershell
# PowerShellben:
Invoke-WebRequest -Uri http://127.0.0.1:3845/mcp
```

**Távoli szerver:**
```powershell
# PowerShellben:
Invoke-WebRequest -Uri https://mcp.figma.com/mcp
```

### 3. Cursor konfiguráció ellenőrzés

1. Nyomd meg: `Ctrl + Shift + P`
2. Írd be: `Preferences: Open User Settings (JSON)`
3. Keresd meg: `mcp.servers`
4. Ellenőrizd a formátumot

### 4. Logok ellenőrzése

1. `View > Output`
2. Válaszd ki: `MCP` vagy `Extension Host`
3. Keresd meg a hibaüzeneteket

### 5. Tiszta újrakezdés

```bash
# Lépések:
1. Zárd be a Cursort
2. Zárd be a Figmát (ha használod)
3. Indítsd újra a gépet
4. Indítsd el a Figmát > Engedélyezd az MCP-t
5. Indítsd el a Cursort
6. Teszteld újra
```

---

## 📊 Diagnosztikai Táblázat

| Probléma | Helyi Szerver | Távoli Szerver |
|----------|--------------|----------------|
| Nem csatlakozik | Figma Desktop fut? Port nyitva? | Internet? Figma status OK? |
| Authentication | Be vagy jelentkezve? | Access token van? |
| Lassú | Fájl méret, gép teljesítmény | Internet sebesség, Figma API késés |
| Feature hiányzik | Figma verzió frissítése | Béta limitációk |

---

## 💬 Segítség Kérése

Ha továbbra sem működik:

1. **Figma Community Forum**
   - https://forum.figma.com/
   - Címke: "MCP", "API"

2. **Cursor Support**
   - Help > Report Issue

3. **GitHub Issues**
   - Ha találtál bug-ot a Figma MCP-ben

---

## 📝 Hiba Jelentés Template

Ha jelentesz problémát, használd ezt a template-et:

```markdown
**Környezet:**
- OS: Windows 11 / macOS / Linux
- Cursor verzió: X.X.X
- Figma Desktop verzió: X.X.X (ha helyi)
- MCP szerver típus: Helyi / Távoli

**Probléma leírása:**
[Részletesen írd le, mi a probléma]

**Reprodukálási lépések:**
1. ...
2. ...
3. ...

**Várt viselkedés:**
[Mit vártál, hogy történjen]

**Tényleges viselkedés:**
[Mi történt valójában]

**Hibaüzenet:**
```
[Másold be a hibaüzenetet]
```

**Screenshot:** (ha van)
[Csatolj képernyőképet]
```

---

**Még mindig nem működik?** Nézd meg a [setup-guide.md](setup-guide.md) részletes útmutatót!


