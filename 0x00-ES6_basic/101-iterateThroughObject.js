export default function iterateThroughObject(reportWithIterator) {
  // Use the Array.from method to convert the iterator into an array
  const employeesArray = Array.from(reportWithIterator);

  // Use the join method to concatenate the names of employees with '|'
  const result = employeesArray.join(' | ');

  return result;
}
