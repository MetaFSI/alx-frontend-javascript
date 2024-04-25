export default function iterateThroughObject(reportWithIterator) {
  // Utiliser méthode Array.from pour convertir l'itérateur en tableau
  const employeesArray = Array.from(reportWithIterator);

  // Utiliser méthode join pour concaténer les noms des employés avec '|'
  const result = employeesArray.join(' | ');

  return result;
}
