# 00 - Introduction to the Adventure

In diesem Tutorial geht es darum sich mit den Grundlagen von JavaScript vertraut zu machen und einfache Anweisungen mittels NodeJS außerhalb des Browsers auszuführen. Das Ziel sind die Grundlagen wie Variablen, Funktionen und Objekte in JavaScript funktionieren.

## Running JS outside the Browser

Erstellt ein neues Verzeichnis für das Tutorial und erstellt eine erste JavaScript Datei `index.mjs`. Fügt folgenden Code in die Datei ein und speichert diese:

```js
const welcomeText = "Hello World";
console.log(welcomeText);
```

Öffnet ein Terminal und führt euer erstes JavaScript Programm aus:

```bash
node index.mjs
```

- Tipp in Visual Studio Code -> Rechtsklick auf die `index.js` -> Open in Integrated Terminal und ihr seid direkt im richtigen Verzeichnis.
- Wichtig: Achtet, dass die Dateiendung `.mjs` ist, da wir in diesem Tutorial mit ES6 Modulen arbeiten (Später mehr dazu).

Als Ergebnis solltet ihr jetzt `Hello World` in der Ausgabe sehen.

## But wait, there is more

Kopiert die Datei `input.txt` aus dem Verzeichnis `material` in euer Projekt (Es sollte auf der selben Höhe wie die `index.mjs` Datei liegen) und kopiert euch folgenden Code in euer Programm:

```js
import { open } from "node:fs/promises";

const file = await open("./input.txt");

for await (const line of file.readLines()) {
  console.log(line);
}

await file.close();
```

Führt das Programm erneut aus (Tipp: `node index.mjs`) was passiert?

### Breakdown

In diesem Programm sind vermutlich alle modernen JavaScript Anweisungen enthalten und es illustriert, wie einfach es ist JavaScript Programme zu schreiben. Aus diesem Grund lasst uns einen genauen Blick auf das Programm werfen.

**Was macht das Programm?**
Das Programm liest eine Datei die auf eurem Dateisystem liegt und gibt den Inhalt in der Konsole aus.

**Wie funktioniert das Programm?**
NodeJS hat ähnlich wie andere Programmiersprachen eingebaute Funktionalitäten um bspw. mit dem Dateisystem zu interagieren. Man kann es vergleichen mit JavaScript im Browser welches Zugriff auf Schnittstellen (APIs) vom Browser hat.

In NodeJS sind solche Funkionalitäten die wir wiederverwenden möchten (Hier die Funktion `open`) in sogenannten Modulen verpackt. Ein Modul ist dabei laut Definition einfach eine JavaScript Datei (Mit beliebigen Inhalt) (Siehe [08-Modules](../../reference/javascript/08-modules.md)).

Die erste Zeile sagt unserem NodeJS Programm also folgendes: Importiere bitte `open` aus dem Module: `node:fs/promises`

```js
import { open } from "node:fs/promises";
```

`open` kann dabei in JavaScript eigentlich alles sein. Eine Variable, eine Funktion, ein Objekt oder eine Klasse. JavaScript interessiert sich dabei nicht was `open` ist, sondern nur dass es existiert (wird exportiert) und verwendet werden kann (wird importiert).

Das Keyword `from` gibt dabei an aus welchem Modul wir `open` importieren möchten. In unserem Fall möchten wir von `node:fs/promises` importieren.

Aber woher weiß das Programm wo `node:fs/promises` herkommt?

Wenn wir NodeJS Programme ausführen werden automatisch alle Module "mitinstalliert" die Node Standardmäßig mitbringt. In diesem Fall ist `fs` die Implementierung um auf das File System zuzugreifen. Wenn wir das gleiche Programm im Browser ausführen würden hätten wir deshalb auch einen Fehler bekommen. Die Browser JavaScript Runtime kennt `fs` nicht. `fs` ist also ein reines Modul welches nur in NodeJS verfügbar ist.

> [!TIP]
> Das es das Keyword `import` in JavaScript gibt ist übrigens neu und kam mit dem ES6 Standard. Es gibt in der JavaScript Node Welt nämlich zwei Module Formate: `CommonJS` und `ESModules`. `import` und `export` sind die Schlüsselwörter für ESModules. Mehr dazu in [08-Modules](../../reference/javascript/08-modules.md).

Die zweite Zeile verwendet die `open` Funktion um unsere Datei zu öffnen.

```js
const file = await open("./input.txt");
```

Hier fällt sofort ein besonderes keyword auf: `await`. Das öffnen von einer Datei auf dem Dateisystem dauert einen kurzen Moment (Im Hintergrund muss NodeJS mit dem Betriebssystem sprechen). Wir bauchen also ein Konstrukt um auf die Operation `open` zu "warten" bevor wir die nächste Ausführung machen.

Die Funktion `open` hat dabei einen besonderen Rückgabewert: `Promise`. In JavaScript gibt es nicht die Möglichkeit einen Rückgabewert für eine Funktion zu definieren deshalb gibt es noch das Keyword `async`. Mit `async` können wir Funktionen als `Promises` kennzeichnen und mit `await` warten wir bis die Operation abgeschlossen ist.

Eine `Promise` ist dabei ein besonderes JavaScript Objekt, um zu signalisieren wann eine Asynchrone Operation abgeschlossen oder fehlgeschlagen ist. Mehr dazu in [10-async](../../reference/javascript/10-async.md).

Wir lesen also die Datei `input.txt` und warten bis NodeJS die Datei komplett verarbeitet hat. Sobald NodeJS mit der Operation fertig ist speichern wir den Inhalt aus `input.txt` in einer neuen Variable `file`. Da wir den Inhalt nur einmal "auswerten" möchten speichern wir uns das Ergebnis der `input.txt` Datei in einer `const` Variable also eine Konstante. (Als Alternative gibt es noch `let` siehe [01-variables](../../reference/javascript/01-variables.md)).

Der letzte Teil des Programms ist eine besondere JavaScript Schleife, um den Inhalt aus der Datei Zeile für Zeile auszugeben.

```js
for await (const line of file.readLines()) {
  console.log(line);
}
```

`for ... of` ist in JavaScript eine spezielle Schleife die über alle iterierbaren Objekte gehen kann und das aktuelle Element dabei in eine Variable speichert. In unserem Beispiel erhalten wir also für jeden Schleifendurchlauf die aktuelle Zeile aus der Datei. Die Funktion `readLines()` auf dem File Objekt gibt dabei ein iterierbares Objekt zurück, welches wir mit `for ... of` durchgehen können.

Außerdem brauchen wir auch hier wieder ein `await` Keyword denn bis jetzt haben wir die Datei `input.txt` nur geöffnet aber noch nicht gelesen. Wir warten also mit `await` vor jedem Schleifendurchlauf bis die nächste Zeile aus der Datei gelesen wurde.

Innerhalb der Schleife können wir dann mit der aktuellen Zeile arbeiten.

Zum Abschluss schließen wir die Datei wieder.

```js
await file.close();
```

### Fazit

Dieses kleine Programm beinhaltet alle modernen JavaScript Konzepte und zeigt wie einfach es ist mit JavaScript kleinere Scripte zu bauen.

## Lets write something

Wir möchten als nächstes unser Programm erweitern um eine Funktionalität jedes Wort aus der `input.txt` Datei in eine neue Datei zu schreiben wobei jedes Wort in eine neue Zeile geschrieben werden soll.

Bevor wir mit dem eigentlichen Programm Code starten, lasst uns ein paar Gedanken machen. Wir können aus der Problemstellung folgende Anforderungen ableiten:

- Req1: Wir müssen eine gegebene Datei `input.txt` lesen und verarbeiten
- Req2: Wir müssen eine neue Datei erstellen und mit Inhalt füllen.
- Req3: Wir müssen aus der `input.txt` eine Möglichkeit finden jedes Wort einzeln zu extrahieren
- Req4: Wir müssen jedes Wort in die neue Datei schreiben
- Req5: Am ende soll die neue Datei alle Wörter aus der `input.txt` enthalten und auf dem Filesystem gespeichert werden.

### Req1:

Das erste Requirement `req1` haben wir bereits gelöst und umgesetzt. Wir können also die Implementierung von oben wiederverwenden. Was wir aber machen könnten in diesem Fall ist die Funktionalität in eine eigene Funktion zu extrahieren, welche folgende Aufgabe übernimmt:

- Lese eine Datei und wende für jede Zeile eine eigene Funktion an.

Jetzt stellt sich natürlich die Frage wie kann ich dann diese Funktion wiederverwenden wenn Sie für jede Zeile eine Funktion anwenden soll?

JavaScript ist keine Objekt Orientierte Programmiersprache sondern unterstützt auch Konzepte aus der Funktionalien Programmierung. Dadurch können wir an eine andere Funktion eine Funktion als Parameter übergeben. Ein Beispiel:

```js
async function readFileAndApply(inputFile, handler) {
  const file = await open(inputFile);
  for await (const line of file.readLines()) {
    handler(line);
  }
  await file.close();
}
```

Auf den ersten Blick wirkt die Funktion deutlich komplexer als die erste Implementierung. Vermutlich ist es für den Geforderten Use Case auch Over Engineered. Wir schauen uns die Funktion aber einmal genauer an:

```js
async function readFileAndApply(inputFile, handler) {}
```

In dieser Zeile wird eine JavaScript Funktion deklariert (Erkennbar an dem Keyword `function`) mit zwei Parametern `inputFile` und `handler`. Eine Besonderheit in JavaScript: Wir definieren keine Datentypen für die Parameter oder den Rückgabewert. JavaScript ist eine dynamisch typisierte Sprache und erkennt den Datentyp zur Laufzeit. (Mehr zu Funktionen in JavaScript in [04-functions](../../reference/javascript/04-functions.md)). Allerdings fällt auf, dass wir das Keyword `async` verwenden, um JavaScript mitzuteilen, dass diese Funktion eine Promise zurückgeben wird.

```js
const file = await open(inputFile);
```

Innerhalb der Funktion ist die erste Zeile das gleiche wie in der ersten Version von unserem Programm. Mit dem Unterschied, dass wir nicht mehr nur `input.txt` lesen sondern den Wert von dem Parameter `inputFile` was in unserem Beispiel der Dateipfad ist.

> [!IMPORTANT]
> Dadurch das JavaScript dynamisch typisiert ist können wir hier nicht sicherstellen, ob der übergebene Parameter `inputFile` auch wirklich ein Dateipfad ist. In einer echten Anwendung müssten wir also sicherstellen, dass der Parameter `inputFile` auch wirklich ein Dateipfad ist. Was man aber machen kann ist über JSDoc beschreiben, dass wir einen Dateipfad als String erwarten. Siehe auch [typeof](../../reference/javascript/01-variables.md#typeof) Operator.

Fügen wir also eine kleine Beschreibung für unsere Funktion hinzu damit Consumer unsere Funktion richtig einsetzen:

```js
/**
 * @param {string} inputFile - The path to the file to read
 * @param {function} handler - The callback function to be applied for each element
 * @example
 *  await readFileAndApply('./input.txt', async (line) => {});
 */
async function readFileAndApply(inputFile, handler) {}
```

Als nächstes führt unser Programm wieder die bekannte `for ... of` Schleife aus um jede Zeile aus der Datei zu lesen. Innerhalb jeder Anweisung machen wir jetzt aber folgendes:

- Für jede Zeile die unser Programm liest, rufen wir die übergebene Funktion `handler` auf und übergeben die aktuelle Zeile.

```js
for await (const line of file.readLines()) {
  handler(line);
}
```

Die eigentliche Funktion definieren wir dabei gar nicht selbst sondern nutzen die Funktion die wir als Parameter übergeben bekommen (Stichwort: Callback Function) und rufen diese mit unserem aktuellen Wert auf. Am Ende schließen wir dann wieder die Datei mit `await file.close();`

**Was können wir jetzt mit dieser Funktion machen?**

Wir können jetzt die Funktion `readFileAndApply` wiederverwenden und für jede Zeile aus der Datei eine eigene Funktion anwenden. Das ist ein mächtiges Konzept in der Funktionalen Programmierung und wird in JavaScript häufig verwendet. Dabei ist unserer `readFileAndApply` Funktion egal was für ein `handler` dahinter liegt. Der Consument von unserer Funktion kann also selbst entscheiden was mit jeder Zeile passiert.

Wir werden diese Funktion jetzt gleich verwenden um die anderen Anforderungen umzusetzen.

### Req2:

Im zweiten Requirement soll eine neue Datei erstellt werden und diese mit dem Output aus unserem Programm gefüllt werden. Folgende Node `fs` Funktion können wir dafür verwenden:

```js
const outputFile = await open("./output.txt", "w");
```

Die Besonderheit ist der Zweite Parameter `w` den wir an die `open` Funktion übergeben. `w` öffnet die Datei für das Schreiben.

- Wenn die Datei nicht existiert wird sie erstellt.
- Wenn die Datei existiert wird sie geleert und geöffnet.

Woher weiß man jetzt sowas? Node hat eine Umfangreiche Dokumentation und besonders wenn man mit dem File System arbeitet lohnt es sich die einzelnen Funktionen von Node sich einmal genauer [anzuschauen](https://nodejs.org/api/fs.html#fspromisesopenpath-flags-mode).

Wie können wir jetzt noch in die `output.txt` Datei schreiben? Indem wir die `.write` Methode verwenden anstatt `readLines()`:

```js
await outputFile.write("Something");
```

Was der Inhalt ist den wir schreiben möchten erarbeiten wir jetzt im nächsten Requirement:

### Req3:

Im ersten Requirement haben wir etwas mehr Aufwand betrieben und eine Möglichkeit geschaffen für jede Zeile aus einer Datei eine eigene Funktion anzuwenden. Diese eigene Funktion (oder `handler`) möchten wir jetzt verwenden um die einzelnen Wörter zu extrahieren.

Die Wörter sind dabei immer mit einem Leerzeichen getrennt. Wir können also die Komplette Zeile nehmen die wir Lesen und diese in einzelne Wörter aufteilen. Dafür gibt es in JavaScript für strings eine eingebaute Funktion `split`:

```js
const words = input.split(" ");
```

Als Rückgabewert erhalten wir ein [Array](../../reference/javascript/02-arrays.md) indem jedes Element ein Wort aus der Eingabe ist.

Diese Logik möchten wir jetzt für jede Zeile aus unserer `input.txt` Datei anwenden. Wir müssen also diese Funktion als Parameter an die `readFileAndApply` Funktion übergeben:

Definieren wir uns also eine neue Funktion:

```js
const splitInputIntoWords = (input) => {
  const words = input.split(" ");
  return words;
};
```

Aber Moment fehlt hier nicht das `function` keyword?

In JavaScript gibt es noch eine weitere Möglichkeit Funktionen zu definieren und zwar können wir `Anonyme Funktionen` definieren und Funktionen auch Variablen zuweisen. Wir können dann die Variable ganz normal wie eine andere Funktion aufrufen.

Eine Anonyme Funktion erkennt man meistens an dem `=>` und werden normalerweise als Arrow Functions bezeichnet (Siehe [Functions](../../reference/javascript/04-functions.md)).

Was fehlt uns jetzt noch? Jedes Wort in die neue Datei zu schreiben.

### Req4:

In diesem Requirement können wir jetzt alle Bausteine die wir vorher definiert haben zusammenführen.
Als erstes rufen wir unsere Funktion `readFileAndApply` und zwar mit der `input.txt` Datei als ersten Parameter und einer `Callback` Funktion als zweiten Parameter die für jede Zeile angewandt wird.

```js
await readFileAndApply("./input.txt", async (line) => {
  // Do something with each line...
});
```

Hier nutzen wir wieder das Konzept von Anonymen Funktionen (Oder Arrow Functions) und übergeben direkt eine Funktion als Parameter die wir dann erst ausimplementieren.

Innerhabl dieser `handler` Funktion rufen wir dann unsere `splitINputIntoWords` Funktion auf, um aus jeder Zeile die gelesen wird alle Wörter zu bekommen:

```js
await readFileAndApply("./input.txt", async (line) => {
  const words = splitInputIntoWords(line);
});
```

Hier sieht man wie man auch Funktionen die man auf Variablen definiert ganz normal aufrufen kann wie eine normale Funktion in JavaScript.

Jetzt möchten wir noch jedes Wort in eine neue Zeile schreiben innerhalb der `output.txt` Datei. Der Vorteil an unserer `splitInputIntoWords` Funktion ist, dass uns diese direkt ein Array zurückgibt wo jedes Wort als einzelnes Element aufgeführt ist. Wir können also einfach eine Schleife über alle Wörter ausführen die jedes einzelne Wort schreibt:

```js
await readFileAndApply("./input.txt", async (line) => {
  const words = splitInputIntoWords(line);
  for await (const word of words) {
    await outputFile.write(`${word}\n`);
  }
});
```

Damit jedes Wort in einer neuen Zeile steht hängen wir noch `\n` an das Ende von jedem Wort. Aber was ist das für eine Syntax für einen String?

In JavaScript gibt es die Möglichkeit Strings als sogenannte `Template Strings` zu definieren. Template Strings können Variablen enthalten die mit `${}` umschlossen werden. Das ist eine sehr mächtige Funktion in JavaScript um Strings zu definieren und wird häufig verwendet. (Siehe [Strings](../../reference/javascript/01-Variables.md###string). Dadurch spart man sich bspw. komplexe String Verkettung mit `+` Syntax.

### Req5:

Das letzte Requirement ist eigentlich schon erfüllt. Wir haben die `output.txt` Datei erstellt und mit dem Inhalt aus der `input.txt` Datei gefüllt. Jetzt können wir das Programm ausführen und schauen ob es funktioniert.

```bash
node index.mjs
```

Anschließend könnt ihr die `output.txt` Datei öffnen und jedes Wort sollte dort in einer neuen Zeile auftauchen.

### Fazit

Mit dieser Problemstellung etwas zu schreiben haben wir einen wichtigen Ansatz in typischen JavaScript Programmen gelernt, nämlich Funktionen als Parameter an andere Funktionen zu übergeben. Das Konstrukt von Arrow Functions wird häufig verwendet und die Idee eine Funktion an eine andere zu übergeben ist gerade wenn man mit Objekten, Arrays und co arbeitet gang und gebe.

Das Gesamte Programm als Abgleich:

```js
import { open } from "node:fs/promises";

const outputFile = await open("./output.txt", "w");

const splitInputIntoWords = (input) => {
  const words = input.split(" ");
  return words;
};

await readFileAndApply("./input.txt", async (line) => {
  const words = splitInputIntoWords(line);
  for await (const word of words) {
    await outputFile.write(`${word}\n`);
  }
});

/**
 *
 * @param {string} inputFile - The path to the file to read
 * @param {function} handler - The callback function to be applied for each element
 * @example
 *  await readFileAndApply('./input.txt', async (line) => {});
 */
async function readFileAndApply(inputFile, handler) {
  const file = await open(inputFile);
  for await (const line of file.readLines()) {
    handler(line);
  }
  await file.close();
}
```

## Fazit

In diesem Tutorial haben wir uns mit den Grundlagen von JavaScript vertraut gemacht und ein kleines Programm geschrieben, welches wir mit `NodeJS` außerhalb vom Browser ausführen können und mit dem Dateisystem interagieren.

Es vermittelt die Grundlegengen Konzepte von JavaScript: Variablen, Funktionen, Promises und Funktionen als Parameter.

Im nächsten Tutorial möchten wir uns mit Objekten in JavaScript genauer auseinander setzen.
