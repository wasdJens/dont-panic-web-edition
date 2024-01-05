# HTML

HTML ist eine Markup Sprache für das Beschreiben von Elementen die einem Dokument Struktur geben. HTML beschreibt dabei nicht den Inhalt von einem Dokument sondern wie der Inhalt aussehen soll. Webseiten verwenden ausschließlich HTML für das Bereitstellen von einer Webseite. Der Browser interpretiert das HTML Dokument und stellt es entsprechend dar.

Ein einfaches Beispiel. Gegeben ist folgender Text:

```text
Das Wetter in Heidemheim beträgt heute 23 Grad.
```

Wir möchten diesen Text jetzt auf einer Webseite anzeigen. Dabei soll die aktuelle Temperatur besonders hervorgehoben werden.

```html
<p>Das Wetter in Heidemheim beträgt heute <strong>23 Grad</strong>.</p>
```

- `<p>` beschreibt einen paragraphen
- `<strong>` beschreibt einen `bold / fetten` Text

## HTML Element

Ein HTML Element besteht dabei immer aus drei Teilen:

- Opening Tag bestehend aus dem Namen eines Elements und gibt an ab wann das Element gilt. Opening Tags werden immer mit einem `<` und einem `>` gekennzeichnet.
- Content der eigentliche Inhalt des Elements. Kann ein Text oder andere Elemente sein (Verschachteln)
- Closing Tag bestehend aus dem Namen eines Elements und gibt an bis wann das Element gilt. Closing Tags werden immer mit einem `</` und einem `>` gekennzeichnet.

Ein Text beginnt also mit einem Opening Tag (Beschreib das aussehen) einem Inhalt (mit ggf. optionalen Elementen) und einem Closing Tag.

> [!CAUTION]
> Nicht alle HTML Elemente befinden sich in einem Opening und Closing Tag. Einige Elemente haben keinen Inhalt und werden daher nur mit einem Opening Tag gekennzeichnet sogenannte `void elemente`.

### Void Elemente

Besondere HTML Elemente bestehen nur aus einem einzelnen Tag u.a. Inhalt der in eine Webseite eingebettet wird (z.B. Bilder, Videos etc.). Diese Elemente werden auch als `void elements` bezeichnet.

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon"
/>
```

## Attribute

Attribute beschreiben zusätzliche Informationen auf einem HTML element z.B. wenn wir einen Button grün färben möchten können wir ein `class` Attribut verwenden um die CSS klasse zu referenzieren. Attribute tauchen nicht im eigentlichen HTML Dokument als Inhalt auf sondern werden im Hintergrund verwendet um das HTML Element zu beschreiben.

```html
<button class="success-button">Speichern</button>
```

Ein Attribute benötigt:

- Ein Leerzeichen zwischen dem Attribut und dem Element Namen. (Für ein Element mit mehreren Attributen müssen die Attribute auch durch Leerzeichen getrennt werden.)
- Der Name des Attributes gefolgt von einem `=` Zeichen
- Den Wert des Attributes in `"` Zeichen

### Boolsche Attribute

Einige Attribute haben keinen Wert sondern sind nur ein `true` oder `false` Wert. Diese Attribute werden auch als `boolsche Attribute` bezeichnet. Wenn ein boolsches Attribut vorhanden ist wird es als `true` interpretiert. Wenn ein boolsches Attribut nicht vorhanden ist wird es als `false` interpretiert.

```html
<button disabled>Speichern</button>
```

## HTML Dokument

Typischerweise besteht eine Webseite aus mehreren HTML Elementen. Um diese Elemente zu gruppieren wird ein HTML Dokument verwendet. Ein HTML Dokument enthält alle HTML Elemente die benötigt werden um eine Webseite darzustellen

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>Wetter</title>
  </head>
  <body>
    <p>Das Wetter in Heidemheim beträgt heute <strong>23 Grad</strong>.</p>
  </body>
</html>
```

> [!TIP]
> Kopiert den Code in eine `index.html` Datei und öffnet diese im Browser (Per Drag und Drop in die Adressleiste ziehen). Ändert dann etwas in der Datei ab und speichert diese neu. Die Änderungen sollten direkt im Browser sichtbar sein.

- Der Doctype gibt an das es sich um ein HTML Dokument handelt. In der Vergangenheit wurde dieser Verwendet um Regeln für eine "gute" HTML Seite zu definieren. Heutzutage reicht `<!DOCTYPE html>` aus.
- Das `<html>` Element ist das Wurzelelement eines HTML Dokuments. Es enthält alle anderen Elemente.
- Das `<head>` Element enthält alle Metadaten für ein HTML Dokument. Metadaten sind Informationen über das Dokument die nicht direkt im Dokument sichtbar sind. z.B. Titel, Beschreibung, Autor etc.
- Das `<meta>` Element enthält zusätzliche Informationen über das Dokument. z.B. Zeichensatz, Beschreibung, Autor etc.
- Das `<title`> Element enthält den Titel des Dokuments. Der Titel wird im Browser Tab angezeigt.
- Das `<body>` Element enthält den eigentlichen Inhalt des Dokuments. z.B. Text, Bilder, Videos etc.

### Special Characters

Nicht alle Zeichen können direkt in einem HTML Dokument verwendet werden. Einige Zeichen sind reservierte Keywords und haben eine spezielle Bedeutung. Deshalb gibt es folgende Special Characters um diese Zeichen abzubilden:

| Zeichen | Equivalent |
| :-----: | :--------: |
|   `&`   |  `&amp;`   |
|   `<`   |   `&lt;`   |
|   `>`   |   `&gt;`   |
|   `"`   |  `&quot;`  |
|   `'`   |  `&apos;`  |

### Kommentare in HTML

Kommentare werden in HTML mit `<!--` und `-->` gekennzeichnet. Kommentare werden vom Browser nicht angezeigt (Sind aber im HTML Dokument sichtbar).

```html
<!-- Das ist ein Kommentar -->
```