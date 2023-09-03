const colores = require('colors')
const inquirer = require('inquirer')

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: 'SELECCIONE UNA OPCION: ',
    choices: [
        {
            value: '1',
            name: (`${colores.green(1.)} Crear Tarea`)
        },
        {
            value: '2',
            name: (`${colores.green(2.)} Listar Tarea`)
        },
        {
            value: '3',
            name: (`${colores.green(3.)} Listar Tarea Completada`)
        },
        {
            value: '4',
            name: (`${colores.green(4.)} Listar Tarea Pendientes`)
        },
        {
            value: '5',
            name: (`${colores.green(5.)} Completar Tareas`)
        },
        {
            value: '6',
            name: (`${colores.green(6.)} Borrar Tareas`)
        },
        {
            value: '0',
            name: (`${colores.green(0.)} Salir`)
        }

    ]
}]


const inquirerMenu = async () => {
    console.clear()
    console.log(colores.rainbow('=============================='))
    console.log(colores.green('     OPCIONES:'))
    console.log(colores.rainbow('==============================\n'))

    const { opcion } = await inquirer.prompt(preguntas)
    return opcion
}

const inquirerPausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `\nPresione ${colores.blue('ENTER')} para continuar \n`
        }
    ]
    await inquirer.prompt(question)
}

const inquirerLeer = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `\nPresione ${colores.blue('ENTER')} para continuar \n`
        }
    ]
    await inquirer.prompt(question)
}

const inquirerLeerInput = async (mensaje = '') => {
    const question = [
        {
            type: 'input',
            name: 'descripcion',
            message: mensaje,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor'
                }
                return true
            }
        }
    ]
    const { descripcion: descrip } = await inquirer.prompt(question)
    return descrip
}

const inquirerListaTareasBorrar = async (tareas = []) => {
    // {
    //     valies:'1'
    //     name:'descripcion de la tarea'
    // }
    const choices = tareas.map((unaTarea, index) => {

        return {
            value: unaTarea.id,
            name: `${colores.green(index + 1)} ${unaTarea.descripcion}`
        }

    })
    //console.log(choices)
    choices.unshift({
        value: '0',
        name: `${colores.green('0.')} Cancelar`
    })
    const preguntas = [{
        type: 'list',
        name: 'id',
        message: 'Borrar',
        choices
    }]

    const { id } = await inquirer.prompt(preguntas)
    return id

}

const confirmarBorrar = async (mensaje) => {
    const pregunta = [
        {
            type: 'confirm',
            name: 'ok',
            message: mensaje
        }
    ]

    const { ok } = await inquirer.prompt(pregunta)
    return ok

}

const inquirerListaTareasCompletar = async (tareas = []) => {
    
    const choices = tareas.map((unaTarea, index) => {

        return {
            value: unaTarea.id,
            name: `${colores.green(index + 1)} ${unaTarea.descripcion}`,
            checked:(unaTarea.completadoEn)?true:false
        }

    })
    
    // choices.unshift({
    //     value: '0',
    //     name: `${colores.green('0.')} Cancelar`
    // })
    const pregunta = [{
        type: 'checkbox',
        name: 'ids',
        message: 'Seleccion a Completar',
        choices
    }]

    const { ids } = await inquirer.prompt(pregunta)
    return ids

}

module.exports = {
    inquirerMenu,
    inquirerPausa,
    inquirerLeer,
    inquirerLeerInput,
    inquirerListaTareasBorrar,
    confirmarBorrar,
    inquirerListaTareasCompletar,
}