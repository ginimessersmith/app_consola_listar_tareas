const colores = require('colors')
const { inquirerMenu, inquirerPausa,
    inquirerLeer, inquirerLeerInput, inquirerListaTareasBorrar, confirmarBorrar, inquirerListaTareasCompletar } = require('./helpers/inquirer')
const Tarea = require('./models/tarea')
const Tareas = require('./models/tareas')
const { saveFile, readFile } = require('./helpers/fileSave')


//const { mostrarMenu, pausa } = require('./helpers/message')

const main = async () => {
    let opt = 0
    const tareas = new Tareas()
    const datos = readFile()
    //await inquirerPausa()

    if (datos) {
        //? cargar las tareas del arreglo al objeto Tareas
        tareas.cargarTareasArray(datos)
    }


    do {
        //?imprime el menu
        opt = await inquirerMenu()
        //console.log(opt)

        switch (opt) {
            //* seleccionar la opcion y guardar la descripcion
            case '1':
                const descripcion1 = await inquirerLeerInput('Descripcion: ')
                tareas.crearTarea(descripcion1)
                break;
            case '2':
                //* LISTAR LAS TAREAS
                //console.log(tareas._listado)
                //console.log(tareas.listadoArray)
                tareas.listadoCompleto()

                break;
            case '3':
                //* LISTAR LAS TAREAS COMPLETADAS               
                tareas.listadoTareasCompletadas()

                break
            case '4':
                //* LISTAR LAS TAREAS PENDIENTES              
                tareas.listadoTareasPendientes()

                break;
            case '5':
                const tareasCompletar= await inquirerListaTareasCompletar(tareas.listadoArray)
                tareas.completarTarea(tareasCompletar)

                break;
            case '6':
                const idTareaBorrar = await inquirerListaTareasBorrar(tareas.listadoArray)
                //console.log({idTareasBorrar})
                if (idTareaBorrar != '0') {
                    const borrarConfirmacion = await confirmarBorrar('Estas Seguro?')
                    // console.log({borrarConfirmacion})
                    if (borrarConfirmacion) {
                        tareas.borrarTarea(idTareaBorrar)
                        console.log('Tarea Eliminada con Exito')
                    }
                }
                break;


        }
        //?guardar las tareas que estan en el arreglo
        saveFile(tareas.listadoArray)
        //*detener la app con el mensaje "Presione Enter para continuar"
        await inquirerPausa()
        //const tarea= new Tarea('comprar comida')
        //console.log(tarea)

        //await pausa()
        //console.log(opt)

    } while (opt != 0)

}
main()