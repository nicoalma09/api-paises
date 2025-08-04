const prompt = require('prompt-sync')();
const fetch = require('node-fetch');

const entrada = prompt('🔎 Ingresá un país: ');

fetch(`https://restcountries.com/v3.1/name/${entrada}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error('No se encontró el país');
    }
    return response.json();
  })
  .then((data) => {
    const pais = data[0];
    console.log('\n🌍 Información del país:');
    console.log(`- Nombre: ${pais.name.common}`);
    console.log(`- Capital: ${pais.capital ? pais.capital[0] : 'No tiene'}`);
    console.log(`- Región: ${pais.region}\n`);
  })
  .catch((error) => {
    console.log(`\n❌ Error: ${error.message}\n`);
  });


