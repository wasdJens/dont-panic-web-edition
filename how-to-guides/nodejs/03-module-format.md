# How To: Arbeiten mit Modulen in NodeJS

Diese Anleitung veranschaulicht wie die unterschiedlichen Module Formate von JavaScript in NodeJS eingesetzt werden können. 

## CommonJS

- Erstelle einen neuen Ordner für ein Node Projekt
- Tippe den Befehl `npm init` in ein Terminal ein und folge den Anweisungen
- Erstelle eine `index.js` Datei im Projekt Ordner
- Erstelle eine `users.txt` Datei im Projekt Ordner und füge folgenden Inhalt ein:

```txt
Max Mustermann
Erika Mustermann
```

- Füge folgenden Code in die `index.js` Datei ein:

```js
const fs = require('fs');

const data = fs.readFileSync('users.txt', 'utf8');
console.log(data.toString());
```

- Führe nun `node index.js` im Terminal aus
- Die Ausgabe sollte nun `Max Mustermann Erika Mustermann` sein

## ESModules

- Folge den Schritten aus dem Abschnitt [CommonJS](#commonjs) bis zum Punkt `Füge folgenden Code in die index.js Datei ein:`
- Öffne die `package.json` Datei und füge folgende Property hinzu:

```json
"type": "module"
```

> [!CAUTION]
> Wenn euer Projekt bereits GIT verwendet findet ihr in der `package.json` auch einen Eintrag bzgl. `"type": "git"` unter der Property `repository`. Diese hat **nichts** mit dem `type` Feld zu tun. Stellt sicher, dass auf der oberstene Ebene von `package.json` das `type` Feld auf `module` steht.


- Füge folgenden Code in die `index.js` Datei ein:

```js
import { readFileSync } from 'node:fs';

const data = readFileSync('users.txt', 'utf8');
console.log(data.toString());
```