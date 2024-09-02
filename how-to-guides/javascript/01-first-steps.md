# How To: First Steps with JavaScript and HTML

Diese Anleitung erklärt wie man eine einfache Webseite mit JavaScript manipulieren kann. Auf Benutzer Eingaben reagiert und Elemente verändert.

**Vorrausetzung**

- Ein Text Editor ist installiert (bspw. [Visual Studio Code](https://code.visualstudio.com/))
- Grundlagen HTML & JavaScript

**Inhalt**

- Webseite mit JavaScript verbinden
- Webseite über JavaScript manipulieren
- Einsatz von Flexbox und CSS Grid für Layouts
- User Interaktionen über Event Listener

## Document Object Model

Das Document Object Model (DOM) ist eine Programmierschnittstelle für HTML und XML Dokumente. Es stellt eine Baumstruktur dar, welche die einzelnen Elemente des Dokuments repräsentiert. Jedes Element ist ein Knoten im Baum und kann über JavaScript manipuliert werden.

- Erstelle eine index.html, eine styles.css sowie eine script.js Datei und kopiere folgenden HTML Inhalt in die index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Machine Park</title>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div class="main">
      <div class="header">
        <h1>Machine Park</h1>
      </div>
      <div class="controls">
        <div>
          <label for="machineName">Machine Name</label>
          <input id="add-machine-input" type="text" name="machineName" />
          <button id="add-machine-button" disabled>Add machine</button>
        </div>
      </div>
      <div class="content">
        <div id="machine-container" class="machine-container"></div>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

> [!TIP]
> Das `<script>` Tag ist am Ende vom HTML Dokument damit wir sicherstellen, dass der DOM vollständig geladen ist bevor wir die Elemente manipulieren.

- Kopiere nun folgenden CSS Inhalt in die `styles.css`

```css
body {
  margin: 12px;
  font-family: sans-serif;
}

.main {
  display: flex;
  flex-direction: column;
}

.header {
  height: 128px;
  background-color: cadetblue;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.controls {
  margin: 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.machine-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 36px;
}
```

- Jetzt möchten wir die Eingabe, den Anlegen Button sowie die Liste mit allen Maschinen als Objekte in unserem JavaScript Teil haben.
- Hierfür erstellen wir drei Variablen und nutzen die `document.getElementById` Funktion um die Elemente aus dem DOM zu holen.

```javascript
const addMachineInput = document.getElementById("add-machine-input");
const addMachineButton = document.getElementById("add-machine-button");
const machineList = document.getElementById("machine-container");
```

- Als nächstes fügen wir einen Event Listener auf den Input hinzu, welcher bei jeder Eingabe den Wert des Inputs prüft und den Button aktiviert oder deaktiviert.

```javascript
addMachineInput.addEventListener("input", () => {
  if (addMachineInput.value.length > 0) {
    addMachineButton.removeAttribute("disabled");
  } else {
    addMachineButton.setAttribute("disabled", true);
  }
});
```

- Jetzt möchten wir die User Eingabe in einer neuen Variable speichern hierzu fügen wir eine neue Variable hinzu und speicheren den Wert des Inputs innerhalb vom Event Listener.

```javascript
let machineName;

addMachineInput.addEventListener("input", () => {
  machineName = addMachineInput.value; // Speichere Wert vom Input in machineName
  if (addMachineInput.value.length > 0) {
    addMachineButton.removeAttribute("disabled");
  } else {
    addMachineButton.setAttribute("disabled", true);
  }
});
```

- Nachdem der User einen Namen eingegeben hat möchten wir eine neue Maschine in die Liste hinzufügen. Hierfür fügen wir einen neuen Event Listner auf den Button hinzu und erstellen dynamisch ein neues HTML element mittels JavaScript.
- Als erstes fügen wir einen neuen Event Listener auf den Button hinzu:

```javascript
addMachineButton.addEventListener("click", () => {});
```

- Innerhalb von diesem Event Listener erstellen wir jetzt ein neues `<span>` Element welches als Karte dient für eine neue Maschine
- Für den Namen der Maschine übernehmen wir den Wert aus der `machineName` Variable

```js
const machineItem = document.createElement("span");
machineItem.classList.add("machine-card");
machineItem.innerHTML = `
  <span class="machine-name">${machineName}</span>
  <button id=${machineName} class="machine-delete-button">Delete</button>
`;
```

- Das neue "Karten" Element möchten wir jetzt an den `machine-container` hängen und so neue Elemente einfügen. In der selben Button Click Funktion fügen wir jetzt folgenden Code hinzu:

```js
machineList.appendChild(machineItem);
```

- Zum Abschluss resetten wir noch den Input und deaktivieren den Button wieder:

```js
machineName = "";
addMachineInput.value = "";
addMachineButton.setAttribute("disabled", true);
```

- Über die Webseite können wir nun eine neue Maschine hinzufügen indem wir einen Namen in das Input Feld eintragen, auf den Button klicken und die Maschine wird in der Liste angezeigt.
- Wenn wir mehr als 4 Maschinen anlegen sehen wir auch, wie die einzelnen Maschinen in einem CSS Grid positioniert werden.

- Als nächstes fügen wir noch folgende CSS Klassen hinzu um die Maschinen Karten zu stylen:

```css
.machine-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}

.machine-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
}

.machine-delete-button {
  margin-top: 12px;
  background-color: #f5f5f5;
  border: none;
  color: red;
  font-weight: bold;
  cursor: pointer;
}
```

- Die letzte Funktion die uns jetzt fehlt ist das Löschen einer Maschinen Karte wenn der User auf den `Delete` Button klickt. In unserem Beispiel ist die ID von einem Button der Name der Maschine. Wir können also die ID auslesen und die Maschine mit dem Namen aus der Liste entfernen.

- Für die Logik zum löschen fügen wir eine neue anonyme Funktion hinzu und rufen diese am Ende von unserem Add Machine Event Handler hinzu.

```js
const handleCardDelete = (element) => {
  const deleteButton = element.querySelector(".machine-delete-button");
  deleteButton.addEventListener("click", () => {
    element.remove();
  });
};
```

```js
addMachineButton.addEventListener("click", () => {
  // Other code from above...
  handleCardDelete(machineItem);
});
```
