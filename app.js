const { crearArchivo } = require('./helpers/multiplicar'); 
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();


crearArchivo( argv.base,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.green,'creado'))
    .catch(err => console.log( err));






//? Recibir información desde linea de comando (de forma educativa NO RECOMENDABLE)
// const [,,arg3 = 'base=5'] = process.argv;//es el tercer elemento por que manda 3 elementos en el arreglo
// const [,base=5]=arg3.split('=');//extra el numero




// const base = 4;






















/*//? *****************************    CREAR UN ARCHIVO TXT  *****************************
//TODO *******************************   fs.writeFile   *******************************

const fs = require('fs');

let salida = '';
let num = 3;

console.log('==================');
console.log(`   Tabla del: ${num}   `);
console.log('==================');



const tabla = (num) =>{

    for(let i = 1 ; i <=10 ; i++){

        salida += ` ${ num } x ${ i } = ${i*num}\n`;
    
    }
    console.log(salida);
}


tabla( num );


fs.writeFile( `tabla-${num}.txt`, salida, (err)=>{
    if (err) throw err;

    console.log( `tabla-${num}.txt creado` );
})
*/