const colores = require('colors')
const { resolve } = require('path')

const mostrarMenu = () => {
    return new Promise(resolve=>{
        console.clear()
        console.log(colores.rainbow('=============================='))
        console.log(colores.green('     OPCIONES:'))
        console.log(colores.rainbow('==============================\n'))
    
        console.log(colores.green(`${colores.blue('1.')} Crear Tarea `))
        console.log(colores.green(`${colores.blue('2.')} Listar Tarea `))
        console.log(colores.green(`${colores.blue('3.')} Listar Tarea Completada `))
        console.log(colores.green(`${colores.blue('4.')} Listar Tarea Pendientes `))
        console.log(colores.green(`${colores.blue('5.')} Completar Tareas `))
        console.log(colores.green(`${colores.blue('6.')} Borrar Tareas `))
        console.log(colores.green(`${colores.blue('0.')} Salir `))
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question('seleccione una opcion: ', (opcion) => {
            resolve(opcion)
            readline.close()
        })
    })
    

}
const pausa = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question(`\nPresione ${colores.blue('ENTER')} para continuar \n`, (opcion) => {
            resolve(opcion)
            readline.close()
        })
    })

}
module.exports = {
    mostrarMenu,
    pausa
}
