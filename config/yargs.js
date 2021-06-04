const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    description: "Es la base de la tabla de multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    description: "Hasta que numero se debe multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    description: "Muestra la tabla en consola",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    return true;
  }).argv;

module.exports = { argv };
