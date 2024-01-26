# Modules

Programmcode wird üblicherweise in unterschiedlichen Dateien organisiert. Funktionen die einmal definiert wurden werden in unterschiedlichen Dateien wiederverwendet. Andere Programmiersprachen wie z.B. Java oder C# verwenden hierfür das Schlüsselwort `import`. In größeren Anwendungen ist es auch üblich funktionalität zu importieren die man nicht selbst entwickelt hat bspw. das importieren von File System Operationen oder Open Source Paketen die Funktionen bereitstellen.

In den ersten Versionen von JavaScript gab es nicht die Möglichkeit Code aus unterschiedlichen Dateien zu importieren bzw. zu exportieren. Erst mit ES6 wurde dieses Feature eingeführt. Ein JavaScript Modul ist dabei einfach eine JavaScript Datei. Diese Datei kann entweder eine Variable, eine Klasse, eine Funktion oder mehrere Funktionen beinhalten. Diese können dann exportiert und in anderen Dateien importiert werden.

Module können auf andere Module refernzieren d.h. ein Modul A hat eine Abhängigkeit (-> `dependencies`) zu einem Modul B. Mit Modulen lassen sich Bausteine definieren die an beliebiger Stelle wiederverwendet werden können. Module können ein Softwareprogramm strukturiert abbilden (Code wird in Modulen gruppiert / organisiert). Ein weiterer Vorteil von Modulen ist die Sichtbarkeit von Variablen, Funktionen etc. d.h. ob eine Variable nach außen hin Sichtbar ist kann explizit gesteuert werden. Natives JavaScript erf+llt diese Anforderung nicht, weil der Namespace global ist.

Über die Zeit haben sich in JavaScript zwei Variationen von Modul Formaten etabliert: `CommonJS` (cjs) und `ESModules` (esm). CommonJS findet man hauptsächlich in JavaScript runtimes wie NodeJS. ESModules sind mittlerweile der Standard in Clientseitigen Applikationen (bspw. React, Angular und Browser Anwendungen) [^1].

## CommonJS

CommonJS verwendet zwei spezielle Funktionen für das Importieren und Exportieren von Modulen: `require()` und `module.exports`. CommonJS Module werden synchron geladen (Also zur Laufzeit). Für Clientseitige Applikationen kann dies ein Problem beim Laden der Anwendung darstellen, weil erst alle Module geladen werden müssen.

`tocaps.js`

```js
exports.toCaps = (input) => {
  return input.toUpperCase();
};
```

`index.js`

```js
const { toCaps } = require("./tocaps");

const input = "Hello World";
const output = toCaps(input);
console.log(output);
```

Eine Besonderheit in CommonJS ist, dass importierte Funktionen einfach als Variablen gespeichert werden. CommonJS wird primär in Node Umgebungen eingesetzt (Ein Browser versteht eine `require` Funktion nicht) bedeutet das obigen Beispiel funktioniert nur für Anwendungen welche mittels NodeJS (Oder anderen Runtime die CJS supportet) ausgeführt werden.

## ESModules

Mit der Einführung von ES6 (2015) wurde ein Standard für Module in JavaScript aufgenommen und die Notation `import` und `export` wurden eingeführt. Module können damit auch im Browser verwendet werden über den type von einem script tag. `script type="module" src="index.js"`. Der Vorteil von ESModules ist, dass diese nur einmalig ausgeführt werden und auch asynchron geladen werden können.

`tocaps.js`

```js
function toCaps(input) {
  return input.toUpperCase();
}

export { toCaps };
```

`index.js`

```js
import { toCaps } from "./tocaps.js";

const input = "Hello World";
const output = toCaps(input);
console.log(output);
```

## CommonJS oder ESModules?

Mittlerweile unterstützen alle Browser sowie alle JavaScript runtimes ESModules dehalb sollte ESModules als default verwendet werden. Das CommonJS Format ist aber weiterhin sehr verbreitet und viele Open Source Lösungen sind noch nicht ESmodules kompatibel. Besonders wenn man nicht browser Applikationen mit JavaScript entwickelt findet man häufig noch CommonJS Module.

## Further Reading

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[^1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
