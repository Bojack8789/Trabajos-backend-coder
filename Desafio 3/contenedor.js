const fs = require('fs')

class Contenedor {
    constructor(filename)  {
        this.filename = filename
    }

    async save(obj) {
        let data = []
        try {
            data = await this.getData()
        } catch(e) {
            console.log('No file')
        }

        let lastID = 1
        if (data.length > 0) {
            lastID = data[data.length-1].id + 1
        }

        obj.id = lastID
        data.push(obj)
        await this.writeData(data)
        return obj
    }
//Funcion asincronica de archivo aleatorio 

    async getByAleatorioEntre(max, min) {
        let id= random ( max, min)
        const data = await this.getData()
        const idx = data.findIndex(d => d.id == id)
        const obj = data[idx]
        await this.writeData(data)
        return obj
    }

    //Funcion asincronica de todos los archivos 


    async getAll() {
        const data = await this.getData()
        const idx = 0
        const idy= data[data.length]
        const obj = data.slice(idx, idy )
        await this.writeData(data)
        return obj
    }




    getData() {
        return fs.promises.readFile(this.filename,  'utf-8')
            .then(d => JSON.parse(d))
    }

    writeData(data) {
        const str = JSON.stringify(data)
        return  fs.promises.writeFile(this.filename, str)
    }

    
        
}
function random (max , min) {
    return Math.floor((Math.random() * (max - min + 1)) + min);};

module.exports = Contenedor