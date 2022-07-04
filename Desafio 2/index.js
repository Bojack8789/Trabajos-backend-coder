
const Contenedor = require('./contenedor')

const contenedorProducts =  new Contenedor('products.json')

//CONSTRUCTORES SAVE 
    /* 
   contenedorProducts.save({title: 'Escuadra',                                                                                                                                 
     price: 123.45,                                                                                                                                     
     thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',   
     id: 1})
     .then(r => console.log(r));
     */
     
    /*
   contenedorProducts.save({                                                                                                                                                    
     title: 'Calculadora',                                                                                                                              
     price: 234.56,                                                                                                                                     
     thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                          
     id: 2                                                                                                                                              
     })                
     .then(r => console.log(r));
     */
 
    /*
   contenedorProducts.save({                                                                                                                                                    
     title: 'Globo Terráqueo',                                                                                                                          
     price: 345.67,                                                                                                                                     
     thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                   
     id: 2 })
     .then(r => console.log(r));
    */

// GET BY ID
    /*
    contenedorProducts.getById(3)
    .then(r => console.log(r));
    */
// GET ALL
    /*
    contenedorProducts. getAll()
    .then(r => console.log(r));
    */
// DELETE ALL 
    /*
    contenedorProducts. deleteAll()
    .then(r => console.log(r));   
    */

    contenedorProducts.getByAleatorioEntre(7, 1)
    .then(r => console.log(r));


   