const prompt = require('prompt-sync')();
const fetch = require('node-fetch');

async function buscarPais(nombre) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${nombre}`);

    if (!response.ok) {
      throw new Error('No se encontró el país');
    }

    const data = await response.json();

    const pais = data[0];
    console.log('\n🌍 Información del país:');
    console.log(`- Nombre: ${pais.name.common}`);
    console.log(`- Capital: ${pais.capital ? pais.capital[0] : 'No tiene'}`);
    console.log(`- Región: ${pais.region}\n`);
  } catch (error) {
    console.log(`❌ Error: ${error.message}\n`);
  }
}

async function main() {
  while (true) {
    const entrada = prompt('🔎 Ingresá un país (o escribí "salir"): ');
    if (entrada.toLowerCase() === 'salir') break;
    await buscarPais(entrada);
  }

  console.log('👋 Aplicación finalizada.');
}

main();
