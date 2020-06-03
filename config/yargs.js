const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'

};

const argv = require('yargs')
    .command('crear', 'crear tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado de una tarea', { descripcion, completado })
    .command('borrar', 'borrar tarea completada', { descripcion })
    .help()
    .argv;


module.exports = {
    argv,
};