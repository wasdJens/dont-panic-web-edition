# How To: Pakete mittels npm installieren

Diese Anleitung hilft dir dabei ein externes Paket in ein Node Projekt zu installieren und zu verwenden.

- Erstelle einen neuen Ordner für ein node Projekt
- Tippe den Befehl `npm init` in ein Terminal ein und folge den Anweisungen
- Setze das Modul Format auf ESModules (siehe [Arbeiten mit Module in NodeJS](./module-format.md))
- Erstelle eine `index.js` Datei im Projekt Ordner
- Tippe den Behfel `npm install date-fns` in ein Terminal ein
- Füge folgenden Code in die `index.js` Datei ein:

```js
import { format } from 'date-fns';

const date = format(new Date(), 'yyyy-MM-dd';
console.log(date);
```