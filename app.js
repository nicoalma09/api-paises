const prompt = require('prompt-sync')();

const datosPaises = {
  argentina: { nombre: "Argentina", capital: "Buenos Aires", region: "América del Sur" },
  japon: { nombre: "Japón", capital: "Tokio", region: "Asia" },
  brasil: { nombre: "Brasil", capital: "Brasilia", region: "América del Sur" }
};

function buscarPais(nombre) {
  const pais = datosPaises[nombre.toLowerCase()];
  if (pais) {
    console.log('\n🌍 Información del país:');
    console.log(`- Nombre: ${pais.nombre}`);
    console.log(`- Capital: ${pais.capital}`);
    console.log(`- Región: ${pais.region}\n`);
  } else {
    console.log('\n❌ País no encontrado\n');
  }
}

while (true) {
  const entrada = prompt('🔎 Ingresá un país (o escribí "salir"): ');
  if (entrada.toLowerCase() === 'salir') break;
  buscarPais(entrada);
}

console.log('👋 Aplicación finalizada.');

