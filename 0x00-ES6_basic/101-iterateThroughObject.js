export default function iterateThroughObject(reportWithIterator) {
  // Utiliser la méthode Array.
  const employeesArray = Array.from(reportWithIterator);

  // Utiliser méthode 
  const result = employeesArray.join(' | ');

  return result;
}
