const fs = require('fs')
const filePath = './data/data.json'

const saveFile = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data))
}

const readFile = () => {
    if(!fs.existsSync(filePath)){
        return null
        //? si no existe el archivo no hace nada
    }
//?? si existe lo parsea a JSON, porque en info es un string
    const info=fs.readFileSync(filePath,{encoding:'utf-8'})
    const data=JSON.parse(info)
    //console.log(data)
    return data
    //return data

}

module.exports = {
    saveFile,
    readFile,
}