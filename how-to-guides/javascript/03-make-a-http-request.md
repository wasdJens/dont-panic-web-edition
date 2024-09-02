# How To: Make a HTTP Request

Diese Anleitung erklärt wie man mit JavaScript einen HTTP Request ausführen kann. Als Beispiel wird hierfür eine einfache Form erstellt die eine Eingaben entgegen nimmt und diese dann an einen Server schickt.

**Vorrausetzung**

- Ein Text Editor ist installiert (bspw. [Visual Studio Code](https://code.visualstudio.com/))
- Grundlagen HTML & JavaScript
- Einen laufenden Server im Hintergrund (siehe bspw. [How To: Fastify Web Server aufsetzen](../fastify/first-steps.md))
- Eine Leere HTML Seite sowie eine `script.js` Datei die im HTML Eingebunden ist

## Formular erstellen

Als erstes erweitern wir unsere HTML Datei um ein Formular welches eine Eingaben entgegen nimmt und einen Button zum Abschicken hat.

```html
<form id="form">
  <label for="name">Name</label>
  <input id="name" type="text" name="name" required />
  <button type="submit">Submit</button>
</form>
```

## JavaScript Code

Als nächstes erweitern wir unsere `script.js` Datei um folgenden Inhalt:

```js
const form = document.getElementById("form");
```

Diese Zeile sucht das Form Element aus dem HTML damit wir auf die Eingaben vom Benutzer Zugriff haben.

Als nächstes disablen wir das Standard Verhalten einer Form beim Submit und verhindern damit, dass die Seite neu geladen wird:

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
```

Dann erstellen wir eine neue Funktion die später den HTTP Request ausführt und die Daten aus der Form liest:

```js
async function createSomething() {
  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
  };
}
```

Jetzt brauchen wir noch den HTTP Request. Dafür verwenden wir die native `fetch` Funktion welche jeder Browser zur Verfügung stellt:

```js
try {
  const response = await fetch("http://localhost:3000/something", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const result = await response.json();
  console.log(result);
} catch (error) {
  console.error(error);
}
```

- Zuerst erstellen wir ein neues `response` Objekt welches die Antwort vom Server beinhaltet
- Dann rufen wir mit `await` die `fetch` API auf und übergeben die URL und die HTTP Informationen:
  - Welche HTTP Methode?
  - Welche Header? (Hier Content Type)
  - Welchen Body?
- Die `async` Syntax markiert eine Funktion automatisch als Promise und das `await` löst eine Promise automatisch auf und gibt den Wert zurück.
- Wir prüfen dann ob die Antwort vom Server "Ok" war d.h. alle 2nn Status Codes. Wenn nicht werfen wir einen Fehler.

Die Finale Funktion sieht dann folgendermaßen aus:

```js
async function createSomething() {
  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
  };

  try {
    const response = await fetch("http://localhost:3000/something", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
```

Als letztes führen wir diese Funktion jetzt im Submit aus anstelle des Defaults Verhalten:

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();
  createSomething();
});
```

## Testen der Anwendung

Wir können jetzt die Anwendung im Browser öffnen und einen Inhalt in das Input Feld eingeben. Wenn wir auf den Button klicken wird die Funktion ausgeführt und der HTTP Request an den Server geschickt.

In der Console (F12) können wir die Antwort vom Server sehen.