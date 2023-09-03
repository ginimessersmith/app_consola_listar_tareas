const Tarea = require("./tarea")
const colores = require('colors')

class Tareas {
    constructor() {
        this._listado = {}
    }

    crearTarea(descrip = '') {
        const tarea = new Tarea(descrip)
        this._listado[tarea.id] = tarea
    }


    get listadoArray() {
        const arreglo = []
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            arreglo.push(tarea)
        })
        return arreglo
    }

    cargarTareasArray(tareasCargar = []) {
        tareasCargar.forEach(unaTarea => {
            this._listado[unaTarea.id] = unaTarea
        });
    }

    listadoCompleto() {

        this.listadoArray.forEach((unaTarea, index) => {
            const indexString = `${index + 1}`
            const { descripcion, completadoEn } = unaTarea
            if (completadoEn == null) {
                const estado = colores.red(' PENDIENTES ')
                console.log(colores.green(`TAREA NRO ${indexString} : `) + colores.blue(descripcion + ' ::') + estado)
            } else {
                const estado = colores.bgYellow(' COMPLETADO ')
                console.log(colores.green(`TAREA NRO ${indexString} : `) + colores.blue(descripcion + ' :: ') + colores.bgYellow('Completado'))
            }

        });

        // let listaTareas = this.listadoArray
        // let longitud = listaTareas.length
        // let n = 0
        // while (n < longitud) {
        //     let tarea = listaTareas[n]
        //     if (tarea.completadoEn == null) {
        //         console.log(colores.green(`TAREA NRO ${n} : `) + colores.blue(tarea.descripcion) + colores.red(' PENDIENTE '))
        //     } else {
        //         console.log(colores.green(`TAREA NRO ${n} : `) + colores.blue(tarea.descripcion + ' ') + colores.bgYellow(' COMPLETADA '))
        //     }
        //     n++
        // }

    }
    listadoTareasCompletadas() {
        let contador = 0
        this.listadoArray.forEach((unaTarea) => {
            const indexString = `${contador + 1}`
            const { descripcion, completadoEn } = unaTarea
            if (completadoEn !== null) {
                contador++               
                console.log(colores.green(`TAREA NRO ${indexString} : `) + colores.blue(descripcion + ' :: ') + colores.bgYellow(completadoEn))
            }
        })
    }

    listadoTareasPendientes() {
        let contador = 0
        this.listadoArray.forEach((unaTarea) => {
            const indexString = `${contador + 1}`
            const { descripcion, completadoEn } = unaTarea
            if (completadoEn == null) {
                contador++
                const estado = colores.red(' PENDIENTES ')
                console.log(colores.green(`TAREA NRO ${indexString} : `) + colores.blue(descripcion + ' ::') + estado)
            }
        })
    }

    completarTarea(idLista=[]) {
        idLista.forEach(unId => {
            const tarea = this._listado[unId]
            if(!tarea.completadoEn){
                tarea.completadoEn= new Date().toISOString()
            }
        });

        this.listadoArray.forEach(unaTarea => {
            if(!idLista.includes(unaTarea.id)){
                const tarea = this._listado[unaTarea.id]
                tarea.completadoEn=null
            }
        });
    }

    borrarTarea(id='') {
        if(this._listado[id]){
            delete this._listado[id]
        }
    }

}

module.exports = Tareas