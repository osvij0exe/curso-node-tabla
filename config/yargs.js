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
                .check( (argv,options) =>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
                .argv;


//TODO ********************     exportar el modulo      **********************************


module.exports = argv;


