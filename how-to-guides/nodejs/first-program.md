# First Program

Diese Anleitung hilft dir dabei dein erstes JavaScript Programm außerhalb des Browsers zu erstellen und mit NodeJS auszuführen.

**Vorrausetzung**

- NodeJS ist installiert
- Ein Text Editor ist installiert (bspw. [Visual Studio Code](https://code.visualstudio.com/))

## Hello World

- Starte Visual Studio Code
- File -> Open
- Wähle einen Ordner für das erste Projekt aus oder erstelle einen neuen Ordner
- Klicke auf "Trust the Authors" wenn Visual Studio Code dich dazu auffordert
- File -> New File
- Gib nun `index.js` ein und speichere diese Datei im vorherigen ausgewählten Ordner
- Gib nun folgenden Code in die Datei ein und speichere diese (cmd + s oder ctrl + s)

```js
const message = "Hello World";
console.log(message);
```

- Terminal -> New Terminal
- Ein neues Fenster öffnet sich unterhalb des Editors
- Gib nun `node index.js` ein und drücke Enter
- Das Programm wird nun ausgeführt und die Ausgabe `Hello World` erscheint im Terminal