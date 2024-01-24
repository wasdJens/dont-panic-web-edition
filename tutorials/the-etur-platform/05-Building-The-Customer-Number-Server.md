# 05 - Building the Customer Number Server

Dieses Tutorial ist das Gegenstück zu unserer Customer Number Website. Hier geht es darum einen ersten Webserver zu implementieren mittels JavaScript und einem JavaScript Framework (Fastify). Das Ziel ist es einen Server lokal laufen zu haben der auf HTTP Anfragen reagiert und es uns erlaubt Customer Numbers zu verwalten und zu validieren.

## Setup Node Project

Unser Webserver soll mittels JavaScript implementieren. Damit JavaScript außerhalb vom Browser ausgeführt werden kann benötigen wir eine separate JavaScript Runtime (NodeJS). Innerhalb von diesem NodeJS Projekt verwenden wir dann ein open source Framework für das Erstellen von Webservern (Fastify).

- Legt ein neues NodeJS Projekt im Ordner `services` an und nennt dieses `customer-number-server`
  - Tipp: Nutzt dafür den Befehl `npm init` und folgt den Anweisungen
- Ändert das Node Projekt um `ESModules` Format zu verwenden anstelle von `CommonJS`
  - Tipp: Schaut einmal in die `package.json` und ändert das `type` feld auf `module`
  - Dieser Fehler tritt häufig mit folgender Fehlermeldung auf: 

```
SyntaxError: Cannot use import statement outside a module
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1153:20)
    at Module._compile (node:internal/modules/cjs/loader:1205:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47
```

- Erstellt eine `index.js` Datei
- Gebt ein `Hello World` aus mittels `console.log` und startet euren Server mittels `node`

Wenn alles geklappt habt solltet ihr nun in eurem Terminal ein `Hello World` sehen. Der nächste Schritt ist es ein erstes Datenmodell für einen Customer zu definieren sowie mit den Grundlagen von JavaScript vertraut machen.

## Customer Model

Wir möchten ein Datenmodell für einen Customer erstellen. Dieses Datenmodell soll später zwischen Client (Webseite) und Server ausgetauscht werden. Wir verwenden hierfür ein JSON Format. JavaScript ist eine nicht typisierte Programmiersprache d.h. die eigentliche Struktur können wir nicht definieren aber ein erstes Objekt welches einen Customer repräsentiert können wir definieren.

- Erstellt eine neue `customers.js` Datei. Diese Datei dient als Speicherort für alle Customer und beinhaltet entsprechende Logik.
- Erstellt ein Beispiel JavaScript Objekt das einen Customer abbildet. Überlegt euch welche Properties dieses Objekt benötigt.
  - Tipp: Definiert dieses als `const`
- Erstellt ein JavaScript Array das alle Customer Objekte beinhaltet. Dieses kann am Anfang leer sein
  - Tipp: Definiert dieses als `const`
- Erstellt eine Funktion die alle Customer zurückgibt. Gebt in dieser Funktion das zuvor erstellte Array zurück.
- Exportiert die Customer Function mittels `export` Statement
- Importiert die Customer Function in der `index.js` und gebt alle Customer aus mittels `console.log`

Wenn alles geklappt hat solltet ihr nun in eurem Terminal euren zuvor definierten Customer sehen. 

## CR(U)D Customer Model

Als nächstes möchten wir typische Operationen für das Customer Model anbieten nämlich: Create, Read und Delete. Hierfür erweitern wir die `customers.js` um folgende neue Funktionalitäten: 

- Create Customer Function
  - Erstellt eine Funktion die einen neuen Customer erstellt. D.h. die Funktion nimmt Parameter entgegen und erstellt ein Customer Object
  - Tipp: Überlegt euch welche Parameter benötigt werden um einen Customer zu erstellen
  - Tipp: Die Funktion sollte den erstellten Customer zurückgeben

- Read Customer Function
  - Erstellt eine Funktion die einen Customer anhand einer ID zurückgibt
  - Tipp: Die Funktion sollte die ID als Parameter entgegen nehmen
  - Tipp: Die Funktion sollte den gefundenen Customer zurückgeben
  - Tipp: Benutzt eine der vorgestellten Built-In Array Funktionen um den Customer zu finden

- Delete Customer Function
  - Erstellt eine Funktion die einen Customer anhand einer ID löscht
  - Tipp: Die Funktion sollte die ID als Parameter entgegen nehmen
  - Tipp: Die Funktion sollte den gelöschten Customer zurückgeben
  - Tipp: Benutzt eine der vorgestellten Built-In Array Funktionen um den Customer zu finden und zu löschen

Wenn ihr diese drei Funktionen definiert habt exportiert diese und verändert euer `index.js` Programm um folgende Funktionen: 

- Legt zwei neue Customers an,
- Löscht einen zufälligen Customer
  - Tipp: `Math.random()` in JavaScript
- Gebt euch den verbleibenden Customer aus

Wenn alles geklappt hat sollte die Anwendung im Terminal einen Customer ausgeben.

> [!TIP]
> JavaScript Funktionen geben immer standardmäßig ein `undefined` zurück wenn diese kein `return` statement beinhalten.

## Validierung von einer Customer Number