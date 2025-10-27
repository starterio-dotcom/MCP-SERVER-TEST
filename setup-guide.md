# Figma MCP Server - Részletes Telepítési Útmutató

## Előfeltételek

- Cursor IDE (vagy más MCP-kompatibilis editor)
- Figma fiók
- (Helyi szerverhez) Figma Desktop alkalmazás (legújabb verzió)

## 1. lépés: Válaszd ki a Szerver Típust

### Helyi Szerver
**Előnyök:**
- Gyorsabb válaszidő
- Helyi fájlokhoz való hozzáférés
- Offline működés (bizonyos funkciókkal)

**Hátrányok:**
- Figma Desktop alkalmazás szükséges
- Csak akkor működik, ha a Figma Desktop fut

### Távoli Szerver
**Előnyök:**
- Nincs szükség Desktop alkalmazásra
- Mindig elérhető
- Egyszerűbb beállítás

**Hátrányok:**
- Lassabb lehet
- Internet kapcsolat szükséges
- Korlátozott hozzáférés bizonyos funkciókhoz

## 2. lépés: Helyi Szerver Engedélyezése (opcionális)

Ha a helyi szervert választod:

1. **Indítsd el a Figma Desktop alkalmazást**
   - Győződj meg róla, hogy a legfrissebb verzió telepítve van
   - Telepítés: https://www.figma.com/downloads/

2. **Nyiss meg egy Design fájlt**
   - Használhatsz meglévő fájlt vagy hozz létre újat
   - A fájl típusa: Figma Design (nem FigJam)

3. **Kapcsolj Dev Mode-ra**
   - Kattints a jobb felső sarokban a "Dev Mode" gombra
   - Vagy használd a `Shift + D` billentyűkombinációt

4. **Engedélyezd az MCP szervert**
   - Az **Inspect** panelen (általában a jobb oldalon) keresd meg az **"Enable desktop MCP server"** gombot
   - Kattints rá az engedélyezéshez
   - Meg kell jelennie egy megerősítő üzenetnek: "MCP server running at http://127.0.0.1:3845/mcp"

5. **Ellenőrzés**
   - Nyisd meg böngészőben: http://127.0.0.1:3845/mcp
   - Ha működik, válaszüzenetet kell kapnod a szervertől

## 3. lépés: MCP Szerver Hozzáadása Cursorhoz

### Módszer 1: Parancssor Használata (Ajánlott)

1. **Nyisd meg a parancspalettát**
   - Nyomd meg: `Ctrl + Shift + P` (Windows/Linux) vagy `Cmd + Shift + P` (Mac)

2. **Keresd meg az MCP parancsot**
   - Írd be: `MCP: Add Server`
   - Nyomd meg az Enter-t

3. **Válaszd a szerver típust**
   - Válaszd: `HTTP`

4. **Add meg a szerver URL-jét**
   - **Helyi szerverhez:** `http://127.0.0.1:3845/mcp`
   - **Távoli szerverhez:** `https://mcp.figma.com/mcp`
   - Nyomd meg az Enter-t

5. **Adj meg egy azonosítót**
   - Javasolt: `figma-mcp` vagy `figma-local` / `figma-remote`
   - Nyomd meg az Enter-t

6. **Válaszd a hatókört**
   - **Global**: Minden Cursor projektben elérhető lesz
   - **Workspace**: Csak ebben a projektben lesz elérhető
   - Válaszd a megfelelőt

### Módszer 2: Manuális Konfiguráció

Ha a parancssor nem működik, manuálisan is hozzáadhatod:

1. **Nyisd meg a Cursor beállításokat**
   - File > Preferences > Settings (vagy `Ctrl + ,`)

2. **Keresd meg az MCP beállításokat**
   - Keresd: `MCP Servers`

3. **Szerkeszd a settings.json fájlt**
   - Kattints a "Edit in settings.json" linkre

4. **Add hozzá a következő konfigurációt:**

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

5. **Mentsd el és indítsd újra a Cursort**

## 4. lépés: Tesztelés

1. **Nyisd meg az AI chat-et Cursorban**
   - Nyomd meg: `Ctrl + L`

2. **Próbálj ki egy Figma-specifikus parancsot:**
   - "List my recent Figma files"
   - "Get design tokens from [file URL]"
   - "Show me the components in [file name]"

3. **Ellenőrizd a kapcsolatot**
   - Ha sikeres, az AI válaszolni fog a Figma adatokkal
   - Ha nem működik, ellenőrizd a szerver állapotát és a URL-t

## Hibaelhárítás

### Hiba: "Cannot connect to MCP server"

**Helyi szerver esetén:**
- Ellenőrizd, hogy a Figma Desktop fut-e
- Ellenőrizd, hogy engedélyezted-e az MCP szervert a Figma-ban
- Próbáld meg újraindítani a Figma Desktop-ot
- Ellenőrizd a tűzfal beállításokat (a 3845-ös port legyen nyitva)

**Távoli szerver esetén:**
- Ellenőrizd az internet kapcsolatot
- Ellenőrizd a Figma státusz oldalt: https://status.figma.com/
- Próbálj meg belépni a Figma-ba böngészőben

### Hiba: "Authentication required"

- Jelentkezz be a Figma fiókodba
- Ellenőrizd, hogy van-e hozzáférésed a kívánt fájlokhoz
- Bizonyos fájlokhoz lehet szükség prémium fiókra

### Hiba: "Feature not available"

- A Figma MCP még béta verzióban van
- Bizonyos funkciók csak bizonyos előfizetési szinteken érhetők el
- Ellenőrizd a Figma dokumentációt a legfrissebb információkért

## További Beállítások

### Környezeti Változók (opcionális)

Ha szükséges, beállíthatsz környezeti változókat az autentikációhoz:

```bash
# .env fájl
FIGMA_ACCESS_TOKEN=your_personal_access_token_here
```

### API Token Generálása

1. Lépj be a Figma-ba: https://www.figma.com/
2. Menj a Settings > Personal access tokens
3. Kattints a "Generate new token" gombra
4. Add meg a token nevét és a jogosultságokat
5. Másold ki a tokent (csak egyszer jelenik meg!)

## Hasznos Linkek

- 📚 [Figma MCP Server Dokumentáció](https://developers.figma.com/docs/figma-mcp-server/)
- 🌐 [Model Context Protocol Spec](https://modelcontextprotocol.io/)
- 💬 [Figma Community Forum](https://forum.figma.com/)
- 🐛 [Bug Reports](https://help.figma.com/hc/en-us/articles/32132100833559)
- 📖 [Figma API Dokumentáció](https://www.figma.com/developers/api)

## Következő Lépések

Most, hogy beállítottad a Figma MCP szervert, kipróbálhatod:

1. **Design token-ek kinyerése**: Színek, betűtípusok, térközök
2. **Komponens információk lekérése**: Név, leírás, változatok
3. **Fájl struktúra elemzése**: Oldalak, keretezések, rétegek
4. **Kód generálás**: React, Vue, vagy más framework komponensek
5. **Design review**: Konzisztencia ellenőrzése, design rendszer validáció

Jó kódolást! 🚀


