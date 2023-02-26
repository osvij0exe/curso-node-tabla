
//? *****************************    CREAR UN ARCHIVO TXT  *****************************
//TODO *******************************   fs.writeFileSync   *******************************

const fs = require('fs');
const colors = require('colors');


const crearArchivo = async( base = 5,listar = false,hasta=10 )=>{

    try{

    
        let salida = '';
        let consola = '';
    
    
    
    for(let i = 1 ; i <=hasta ; i++){
        salida += ` ${ base } x ${ i } = ${i*base}\n`;
        consola += ` ${ base } ${'x'.red} ${ i } ${'='.red} ${i*base}\n`;
    }

    if(listar){
        console.log('=================='.blue);
        console.log(  'Tabla del:'.green,colors.red(base)  );
        console.log('=================='.blue);

        console.log(consola);

    }

    
    
    
    
    
    fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);
    
    return `tabla-${ base }.txt`;

    }catch(err){
        throw err;
    }



}


module.exports = {
    crearArchivo
}

