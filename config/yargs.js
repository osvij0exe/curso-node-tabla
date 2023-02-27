//? *************************** implementando yargs **************************************


const argv = require('yargs')
                    .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe:'Es la base de la tabla de multiplicar'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe:'hasta que tabla vamos a calcular'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: false,
                    describe:'Muestra la tabla en consola'
                })
                .check( (argv,options) =>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
                .argv;


//TODO ********************     exportar el modulo      **********************************


module.exports = argv;


