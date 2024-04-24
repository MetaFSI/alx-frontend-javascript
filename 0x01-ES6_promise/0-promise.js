// file : 0-promise.js

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Implemeting api response
    // ...
    resolve(/* result */); // Résoudre la promesse avec le résultat approprié
    // or
    // eslint-disable-next-line no-unused-vars
    reject(new Error("Message d'erreur")); // reject response with error message
  });
}

export default getResponseFromAPI;
