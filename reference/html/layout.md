# Layout

HTML bietet Block Elemente an um Inhalte bestimmten Bereichen zuzuordnen (Bspw. eine Navigation ganz oben auf einer Webseite). Eine Webseite besteht (In den meisten Fällen) aus folgenden Bereichen:

- Header
- Navigation
- Main Content
- Sidebar
- Footer

Die eigentliche Positionierung sowie die Gestaltung der einzelnen Bereiche wird zwar über CSS gelöst, jedoch bieten Block Elemente den Vorteil von Browsern (Und anderen Tools) interpretiert zu werden. So kann bspw. ein Screen Reader die Navigation dem User vorlesen. 

## Layout Elemente

- `<main>` ist für Inhalte die Einzigartig auf einer einzelnen Seite sind. Es sollte nur ein `<main>` pro Seite geben und am besten direkt als erstes Element im `<body>` stehen.
- `<article>` ist für Inhalte die auch unabhängig vom Rest der Seite Sinn ergeben (Bspw. ein Blog Post).
- `<section>` ist für Inhalte die zusammengehören (Bspw. eine Liste von Blog Posts).
- `<aside>` ist für Inhalte die nicht direkt zum Hauptinhalt gehören (Bspw. eine Sidebar).
- `<header>` ist für Inhalte die am Anfang einer Seite stehen (Bspw. ein Logo). Wenn es als Child von `<body>` verwendet wird, ist es der globale Header der Webseite. Als Child von `<article>` oder `<section>` ist es der Header des Artikels / Abschnitt.
- `<nav>` ist für Inhalte die eine Navigation darstellen (Bspw. ein Menü).
- `<footer>` ist für Inhalte die am Ende einer Seite stehen (Bspw. ein Impressum).

## Nicht-Sematische Wrapper

Neben HTML Elementen die im Standard sind benötigt es häufig Elemente um selbst Inhalte entsprechend zu layouten / strukturieren. HTML bietet deshalb `<div>` und `<span>` als wrapper Elemente an. Diese Elemente sind fast immer in Kombination mit einer entsprechenden CSS Klasse verbunden. Alle Layout Elemente die im HTML Standard vorhanden sind können auch durch mehrere `<div>` Elemente ersetzt werden. Allerdings passiert es häufig das später die Webseite nur noch aus `<div>` Elementen besteht die mit entsprechenden Klassen versehen sind. Darunter leidet meistens die Barrierefreiheit und entsprechende Browser Funktionen Inhalte z.B. ein oder auszublenden (Ein Div hat für den Browser keinen Sematischen Unterschied zu einem anderen div). Deshalb ist es besser die grundlegende Struktur mit HTML Standard Elementen aufzubauen und nur für gesonderte Inhalte innerhalb dieser Elemente divs zu verwenden.

## Break Elemente

- `<br>` ist ein Zeilenumbruch bspw. innerhalb von einem Paragraphen
- `<hr>` ist ein horizontaler Trenner bspw. zwischen zwei Abschnitten