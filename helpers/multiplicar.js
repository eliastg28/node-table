const colors = require('colors');

const fs = require("fs");

const crearArchivo = async (base, listar, hasta) => {
  try {
    let salida = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("============================".rainbow);
      console.log(`        Tabla del ${base}         `.green.bold);
      console.log("============================".rainbow);
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`.rainbow.bold;
  } catch (err) {
    return err;
  }
};

module.exports = {
  crearArchivo,
};
