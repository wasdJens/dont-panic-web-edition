# NodeJS

NodeJS ist eine JavaScript Runtime, um JavaScript außerhalb vom Browser auszuführen. Es ist also ein Programm welches wir installieren können um JavaScript Programme unabhängig von einem Browser zu starten (bspw. einen Server). NodeJS baut dabei auf die von Google entwickelte V8 JavaScript Engine auf. NodeJS ist Open Source und Plattformunabhängig.

NodeJS unterstützt dabei fast alle Browser Implementierungen von JavaScript. Es gibt jedoch einige wenige Ausnahmen, die nicht unterstützt werden. Dazu gehören bspw. die DOM API, da diese nur im Browser zur Verfügung steht. Allerdings ist NodeJS nicht an eine bestimmte JavaScript Version gebunden. Es können auch neuere Versionen von JavaScript verwendet werden, die noch nicht von allen Browsern unterstützt werden.

Das Standard Modul Format von NodeJS ist CommonJS es können aber ESModules verwendet werden. Node entscheidet das Modul Format anhand von der Dateiendung (`.cjs` oder `.mjs`) oder der property `type` in der `package.json` Datei.

## `Package.json`

Die `package.json` Datei ist ein fundamentaler Teil von einem Node Projekt. Es beschreibt zum einen das Paket welches ggf. ausgeliefert werden soll und welche Abhängigkeiten das Projekt hat. Darüber hinaus können in dieser Datei skripte definiert werden die z.B. eine Anwendung starten oder Tests ausführen.

Für das installieren von allen Paketen innerhalb eines Projeks kann man den Befehl `npm install` (oder kurz `npm i`) auf der Ebene ausführen in welcher die `package.json` Datei liegt. Dabei erstellt NodeJS einen neuen Ordner `node_modules` hier liegen alle Pakete die installiert wurden.