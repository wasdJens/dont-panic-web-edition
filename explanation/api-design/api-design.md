# About: API Design

> Was macht eine gute Schnittstelle aus? Auf was sollte geachtet werden wenn man eine neue Schnittstelle baut?

Für Schnittstellen gibt es kein Richtig oder Falsch. Die meisten Schnittstellen die man in der Praxis findet unterscheiden sich fundamental von anderen. Das liegt auch daran, dass es keinen einheitlichen Standard für Schnittstellen gibt. Fast jedes Unternehmen hat seine ganz eigenen Guidelines um eine Schnittstelle zu bauen. 

Diese Erklärung soll einen Einblick in die Philosohpie hinter API Design bieten. Es basiert auf unterschiedlichen Unterlagen von Tech Firmen die ihre API Design Unterlagen öffentlich zugänglich machen. Es soll außerdem eine Reflexion über Erfahrungen aus der Praxis sein. Das Ziel sind Schnittstelle die ein Customer[^1] Problem lösen. Egal wie diese am Ende gestaltet sind.

## 👏 APIs

Was sind Merkmale für eine gute Schnittstelle? Im ersten Moment, dass diese intuitive für den Client sind. Das Datenmodell wird auf eine einfache Art und Weise nach außen transportiert und wie sich die API verhält ist vorhersehbar. Als Client kann ich mit meiner Sprache die Schnittstelle ansprechen. Ich kann also selbst entscheiden welche Programmiersprache, Frameworks oder ähnliches ich verwende. Eine gute Schnittstelle bietet mir als Client also alle Freiheiten und schränkt mich nicht in meiner Lösung ein. Im Gegenteil eine gute API sollte es Clients leicht machen diese zu adaptieren [^3]. Das bedeutet auch wenn sich die Schnittstelle über die Zeit verändert kann ich als Client darauf reagieren oder aber auch nicht [^2].
















[^1]: Customer beschreibt hierbei ein anderes System das eine Schnittstelle benutzt. Das können Menschen, Systeme oder ähnliches sein. Alles was die Funktionalität der Schnittstelle verwenden möchte.
[^2]: https://github.com/microsoft/api-guidelines/blob/vNext/azure/ConsiderationsForServiceDesign.md
[^3]: https://github.com/zalando/restful-api-guidelines