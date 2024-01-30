# How To: Create HTML with JavaScript

In dieser Anleitung wird erklärt wie man dynamische Inhalte auf einer WEbseite mittels JavaScript erstellt. Ziel ist es für jedes Element aus einer Liste ein HTML Element zu erstellen und dieses in die Webseite einzufügen. Hierfür verwenden wir die Fetch API um die Daten von einem Webserver zu holen.

**Vorrausetzung**

- Ein Text Editor ist installiert (bspw. [Visual Studio Code](https://code.visualstudio.com/))
- Grundlagen HTML & JavaScript
- Einen laufenden Server im Hintergrund (siehe bspw. [How To: Fastify Web Server aufsetzen](../fastify/first-steps.md)) der über eine URL eine Liste an Daten zurück gibt.
- Eine Leere HTML Seite sowie eine `script.js` Datei die im HTML Eingebunden ist

## Listen Container erstellen

Als erstes erstellen wir einen Listen Container in unserem HTML welcher als Ziel für unsere dynamisch erstellten Elemente dient. Hier möchten wir später alle Elemente hinzufügen. In unserem Beispiel arbeiten wir mit "Karten" für die Anzeige der jeweiligen Elemente.

```html
<div class="customer-list" id="customer-list">
  <!-- Here we will add the elements via JavaScript -->
</div>
```

## Laden der Daten beim Start

Wir möchten sobald die Seite das erste mal angezeigt wird alle Elemente von unsererm Server laden. Hierfür erstellen wir einen neuen Event Listener welcher auf `DOMContentLoaded` reagiert und dann einen HTTP Request ausführt.

```js
document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("http://localhost:3000/customers");
  if (response.ok) {
    const data = await response.json();
    data.forEach((customer) => {
      // Create HTML Content
    });
  }
});
```

Sobald unsere Seite geladen wird führen wir einen HTTP Request aus und warten auf die Antwort. Wenn die Antwort erfolgreich ist lesen wir die Daten aus und erstellen für jedes Element ein HTML Element.

## HTML Elemente erstellen

Um die Funktionalität der Karten Erstellung wiederzuverwenden schreiben wir eine extra Funktion die einen `customer` als Parameter entgegen nimmt und dann in die bestehende Liste hängt. Das hat den Vorteil, dass auch andere Operationen eine Karte erstellen bzw. modifizieren können:

```js
function createCustomerCard(customer) {
  const customersList = document.getElementById("customer-list");
  const customerDiv = document.createElement("div");
  customerDiv.classList.add("customer-card");

  customerDiv.innerHTML = `
    <div class="customer-card-header">
      <h3>${customer.name}</h3>
      <span>${customer.id}</span>
    </div>
    <div class="customer-card-description">
      <p>${customer.description}</p>
    </div>
  `;
  customersList.appendChild(customerDiv);
}
```

- Wir holen uns das `div` welches die Liste beinhalten soll.
- Wir erstellen ein neues `div` mittels `createElement` und fügen unsere CSS Klasse hinzu
- Als nächstes setzen wir den inneren Inhalt von unserem div mit einem Header und einer Beschreibung.
- Als letztes hängen wir das Element an unsere Liste an mittels `appendChild`

Diese Funktion rufen wir jetzt in unserem Event Listener Code noch auf:

```js
data.forEach((customer) => {
  createCustomerCard(customer);
});
```

Wenn wir jetzt die Seite öffnen sollte für jedes Element welches auf dem Server existiert eine neue Karte angezeigt werden.
