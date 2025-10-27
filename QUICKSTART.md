# ⚡ Gyors Kezdés - Figma MCP Server

## 5 Lépésben a Működő Figma MCP Szerverhez

### 1️⃣ Válaszd ki a szerver típust

**Egyszerű kezdéshez (AJÁNLOTT):**
```
Távoli szerver: https://mcp.figma.com/mcp
```

**Fejlettebb használatra:**
```
Helyi szerver: http://127.0.0.1:3845/mcp
(Figma Desktop alkalmazás szükséges)
```

### 2️⃣ Engedélyezd a Figma MCP szervert (csak helyi szervernél)

Ha **helyi szervert** választottál:
1. Nyisd meg a **Figma Desktop** alkalmazást
2. Nyiss meg egy design fájlt
3. Nyomd meg: **Shift + D** (Dev Mode)
4. Kattints: **"Enable desktop MCP server"**

Ha **távoli szervert** választottál: ✅ Kész, nincs több teendő!

### 3️⃣ Add hozzá a szervert Cursorhoz

**Opció A - Parancssorral (GYORS):**
1. `Ctrl + Shift + P`
2. Írd be: `MCP: Add Server`
3. Válaszd: `HTTP`
4. URL: `https://mcp.figma.com/mcp` (vagy helyi: `http://127.0.0.1:3845/mcp`)
5. ID: `figma-mcp`
6. Hatókör: `Global` vagy `Workspace`

**Opció B - Manuálisan:**
1. Nyisd meg: `File > Preferences > Settings`
2. Keress rá: `MCP Servers`
3. Kattints: `Edit in settings.json`
4. Add hozzá:
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

### 4️⃣ Indítsd újra a Cursort

Egyszerűen zárd be és nyisd meg újra a Cursort.

### 5️⃣ Teszteld!

1. Nyomj `Ctrl + L` (AI Chat)
2. Próbáld ki:
```
"Figma, listázd ki a legutóbbi fájljaimat"
```

vagy

```
"Kérem, elemezd ezt a Figma fájlt: [Figma URL]"
```

---

## ✅ Működik?

Ha sikeres, az AI válaszolni fog a Figma adatokkal! 🎉

## ❌ Nem működik?

### Gyors hibaelhárítás:

**Helyi szerver esetén:**
- [ ] Fut a Figma Desktop?
- [ ] Engedélyezted az MCP szervert?
- [ ] Próbáld újraindítani a Figmát
- [ ] Ellenőrizd: http://127.0.0.1:3845/mcp böngészőben

**Távoli szerver esetén:**
- [ ] Van internet kapcsolat?
- [ ] Be vagy jelentkezve Figmába?
- [ ] Próbáld újraindítani a Cursort

**Mindkét esetben:**
- [ ] Ellenőrizd a szerver URL-jét (nincs benne extra szóköz?)
- [ ] Nézd meg a Cursor Output panelt hibákért (View > Output)

---

## 🚀 Következő lépések

Most, hogy működik, nézd meg:
- **[examples.md](examples.md)** - Gyakorlati példák
- **[setup-guide.md](setup-guide.md)** - Részletes útmutató
- **[README.md](README.md)** - Teljes dokumentáció

## 💡 Első Projektek Ötletei

1. **Design Token Kinyerés**: Színek, tipográfia exportálása CSS változókba
2. **Komponens Kód Generálás**: Figma komponensből React/Vue komponens
3. **Design Audit**: Konzisztencia ellenőrzése
4. **Dokumentáció**: Automatikus design system dokumentáció

Jó kódolást! 🎨✨


