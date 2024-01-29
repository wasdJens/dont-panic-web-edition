# How to: Work with Promises

Diese Anleitung erklärt wie man mit Promises in JavaScript arbeitet. Es soll dabei die Bedeutung der `async / await` Syntax hervorheben.

**Vorrausetzung**

- Ein Text Editor ist installiert (bspw. [Visual Studio Code](https://code.visualstudio.com/))
- Grundlagen JavaScript
- NodeJS ist installiert und kann ausgeführt werden

## Eine einfache Promise Funktion

Kopiert euch folgendes Beispiel in eine leere `index.js` Datei:

```js
function doSomething() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Other things to do before completion of the promise
      console.log("Did something");
      // The fulfillment value of the promise
      resolve("Result");
    }, 2000);
  });
}

doSomething();
```

Öffnet ein neues Terminal Fenster in VSCode und führt `node index.js` aus. Ihr solltet nach 2 Sekunden die Ausgabe `Did something` sehen. Wir können an diese `doSomething` Funktion jetzt eine weitere Funktion hängen die erst ausgeführt wird wenn die Promise erfolgreich ausgeführt wurde und mit dem Ergebnis der Promise arbeiten.

```js
doSomething().then((result) => {
  console.log(result);
});
```

Möchten wir dieses Ergebnis an eine weitere Promise Function geben können wir einfach ein `return` und ein weiteres `then` angängen: (Merke: `then` Funktionen erstellen automatisch eine neue Promise)

```js
doSomething()
  .then((result) => {
    console.log("First Result: ", result);
    return result;
  })
  .then((result) => {
    console.log("Second Result: ", result);
  });
```

## Async / Await Syntax Optimierungen

Ein Problem an `then` Ketten ist die Tiefe Verschachtelung und damit die Lesbarkeit der Funktion. Wir können das obere Beispiel deshalb mit der neuen `async / await` Syntax einfacher schreiben:

```js
async function resolveSomething() {
  const result = await doSomething();
  console.log(result);
}

resolveSomething();
```
