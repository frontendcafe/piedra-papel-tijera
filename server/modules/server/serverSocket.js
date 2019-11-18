
const { io } = require('./index');

let libreta=[];


let dato = (id, mac) =>{
    let json={socketID:id, mac, stat:false}

    let findIt = libreta.findIndex(tarea =>tarea.socketID === id);
    if(findIt>=0){
        console.log(`No estoy Autorizado para guardar a este Sr(${id})`);
    }else{
        libreta.push(json)
        console.log(libreta);
        
    }

}


let setlist = ()=>{
    
    io.emit('libreta-list', libreta)
    io.emit('Option-to-Validator', etiqueta)

}
let refresh = () =>{

    let actualiza=`Actualizar libreta del server`
    io.emit('refresh', actualiza)
    io.emit('Option-to-Validator', etiqueta)

}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

io.on('connection', function(socket){
    console.log('An user connected......');

    
    socket.on('libreta', data=>{

        console.log(`Add to libreta! serversockert.js line 84`);
        dato(socket.id , data);
        setlist();
        
    })


    socket.on('refresh-client', data=>{
        console.log(data);
        refresh();
    })


    
    
    
    
    socket.on("disconnect", () => {

        let nuevoListado = libreta.filter(tarea=>{
            return tarea.socketID !== socket.id;
    
        });
        if (libreta.length === nuevoListado.length){
    
        }else{
            libreta=nuevoListado;
    
        }

        console.log(libreta.indexOf({socket:socket.id}));
        client_count--;
        console.info(`Client gone [id=${socket.id}]`);
        console.log(libreta);
        setlist()
    });
});
// io.on

module.exports = io
