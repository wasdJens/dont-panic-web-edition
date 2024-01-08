# URI und URLs

Wie navigieren wir zwischen Ressourcen im Web? Ein Uniform Ressource Identifier (URI) dient als kompakte Sequenz von Zeichen die abstrakte oder physische Ressourcen beschreiben. Dabei kann eine URI auf folgende Arten auftreten:

- Uniform Ressource Name (URN) => Der name der Ressource (Das Haus der Maiers)
- Uniform Ressource Location (URL) => Die Adresse der Ressource (Gabelweg 2)
- Als Kombination aus URN und URL

## Beispiele

- Eine ISBN beschreibt ein bestimmtes Buch, aber nicht wo es zu finden ist (URN)

- Web Adresse beschreibt wo eine Webressource zu finden ist (URL)

## Aufbau

Eine URL besteht dabei aus folgenden Teilen (Zum Verständnis wurden alte URL Informationen wie Benutzer und Fragment weggelassen)

```
https://www.example.com:1337/index.html?p1=A&p2=B
```

- Schema => http
- Host => www.example.com
- Port => 1337
- Pfad => index.html
- Query => p1=A&p2=B