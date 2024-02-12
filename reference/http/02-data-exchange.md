# Informationen über das HTTP Protokoll

Nach einer einfachen Definition ist ein Browser ein Software Client für die Verarbeitung von HTTP Anfragen und das Darstellen von Webseiten (Rendering HTML, CSS etc.). Mit einem Browser können wir zwischen Webseiten navigieren, Benutzereingaben erfassen und dadurch Informationen an einen Server schicken. 

> [!TIP]
> Ein Browser ermöglicht Menschen einen einfachen Zugang zum größten Verteilten System der Welt - Das Internet.

Das Internet besteht aber nur aus Webseiten. Heutzutage lassen sich über das Internet fast alle Informationen Digital austauschen. Wie können jetzt also Server miteinander kommunizieren?

## HTTP Als Transportprotokoll

Auch für die Maschine-zu-Maschine Kommunikation kommt HTTP zum Einsatz für den Austausch von Daten. Der Standard von HTTP hat sich hier etabliert, weil Daten nicht nur als HTML sondern in beliebigen Formaten verschickt werden kann (Bspw. JSON, XML, etc.). HTTP kann also von jedem Software System eingesetzt werden. Ein paar Beispiele:

- Ein Lokales Skript erstellt Daten auf einer Azure Ressource (Azure bietet auch einfach eine API für ihre Cloud Komponenten an)
- Eine Maschine hat einen Fehler festgestellt und schickt eine Information an ein Nachrichten System
- Ein Server möchte Informationen über meinen User bekommen (z.B. Email und Name) muss dies aber von einem Identity Server abfragen
- Mein Online Broker löst eine Kauforder aus, die muss an die Börse geschickt werden
- Meine App muss Daten anzeigen bspw. wie ist das Wetter heute

Warum hat sich HTTP als Standard durchgesetzt? HTTP ist ein sehr einfaches Protokoll (Und Teilweise auch Menschen lesbar) was immer aus einer Anfrage und einer Ressource aufgebaut ist. Die Ressourcen und Anfragen können dabei komplett frei definiert werden. Es können auch eigene spezielle HTTP Header für meine eigene Software definiert werden. 

## Bereitstellen von einer API

In diesem Zusammenhang spricht man häufig von APIs die man über HTTP ansprechen kann. Eine API ermöglicht Softwareanwendungen miteinander zu kommunizeren. Mit einer API kann eine Anwendung A auf Daten bzw. Funktionen von Anwendung B zugreifen und diese nutzen, ohne interne Details (z.B. Implementierungen) zu kennen. 

> [!NOTE]
> Ein einfaches Beispiel: Wenn ich dieses Referenz Dokument in meinem Code Editor speichern möchte ruft mein Code Editor eine Funktion vom Betriebssystem auf um die Datei auf eine Festplatte zu schreiben.

Warum bauen wir APIs? Die nachfolgenden Eigenschaften sollen das Konzept von APIs verdeutlichen:

**Abstraktion**
Eine API ist immer eine Abstraktion von einer bestimmten Funktionsweise oder Detail von einem System. Dadurch lassen sich Interaktionsprozesse leichter abbilden.

> [!NOTE]
> Als Anwender muss ich nicht wissen wie eine Wetterstation das Wetter misst. Ich kann aber eine API anfragen um das aktuelle Wetter zu bekommen.

**Interoperabilität**
HTTP ist Programmiersprachen unabhängig und auch meine API kann mit einer anderen Programmiersprache implementiert werden. Sogar unterschiedliche Plattform können mit APIs angesprochen werden.

> [!NOTE]
> Mein Code Editor weiß ob er auf Unix oder Windows File Operationen arbeiten muss

**Wiederverwendbarkeit**
Eine API für einen bestimmten Dienst kann beliebig wiederverwendet werden. 

> [!NOTE]
> Das Speichern von Dateien auf dem System muss nur einmal entwickelt werden und kann dann von beliebigen Anwendungen wiederverwendet werden

**Sicherheit**
APIs können mechanismen implementieren, um den Zugriff auf Ressourcen und Diensten zu steuern.

> [!NOTE]
> Als Entwickler möchte ich Informationen über einen gewissen User bekommen. Hierfür kann ich von meinem Idenitty Provider eine API ansprechen ob ich diese Informationen lesen darf oder nicht.

Es gibt dabei verschiedene Arten von APIs bspw. Auf Betriebssystem Ebene oder Hardware Ebene. Für die Webentwicklung konzentriert man sich meistens auf APIs die über HTTP angesprochen werden können.