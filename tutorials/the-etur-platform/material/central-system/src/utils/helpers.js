export function checkSystemHealth() {
  return Math.random() < 0.2;
}

export function reportToMainServer() {
  return new Promise(() => {});
}

export function handleReadError() {
  const errorReports = [
    { message: "Datenbankverbindung fehlgeschlagen." },
    { message: "Fehler beim Zugriff auf das Dateisystem." },
    { message: "Unbekannter Fehler beim Lesen der Daten." },
    { message: "Berechtigungsfehler beim Zugriff auf die Log-Datei." }
  ];

  const randomIndex = Math.floor(Math.random() * errorReports.length);
  return errorReports[randomIndex];
}