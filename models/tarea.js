const { v4: uuidv4 } = require('uuid');


class Tarea{
    id=''
    descripcion=''
    completadoEn=null

    constructor(descrip){
        this.descripcion=descrip
        this.id=uuidv4()
    }

}

module.exports=Tarea