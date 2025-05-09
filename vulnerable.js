// vulnerable.js

// Simula una entrada del usuario desde la URL
const userInput = window.location.search;

// ⚠️ Uso inseguro de eval
// Esta línea permite ejecutar cualquier código que venga desde la URL, lo cual es una vulnerabilidad crítica.
eval(userInput);

// Este código es solo para fines educativos y de prueba de herramientas de análisis estático como CodeQL.
console.log("Código ejecutado: " + userInput);
