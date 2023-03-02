const yargs = require('yargs');
const child = require('child_process');

const argv = yargs.command("ejecutar", "muestra en consola el nombre de un usuario",
    {
        nombre:{
            describe: "Argumento que almacena el nombre de un usuario.",
            //demand: true,
            alias: "n"
        },
        apellido:{
            describe: "Argumento que almacena el apellido de un usuario.",
            //demand: true,
            alias: "a"
        },

    },
    (args) => {
        let nombreCompleto = `${args.nombre} ${args.apellido}`;
        child.exec(`node ejecutar.js "${nombreCompleto}"`, (err, data) => {
            if(err){
              console.log("algo ha fallado al ejecutar el archivo.")  
            }else{
                console.log(data)
            }
        })

    }
).help().argv;

