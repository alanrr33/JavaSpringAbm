// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuarios();

  $('#usuariosTabla').DataTable();
  actualizarEmailUsuario();
});

function actualizarEmailUsuario(){
    document.getElementById('txt-email-usuario').outerHtml=localStorage.email;
}

async function cargarUsuarios(){
    const request = await fetch('api/usuarios',{
    method: 'GET',
    headers: getHeaders()
    });

    const usuarios = await request.json();

    //creamos una variable para ir guardando los usuarios que recorremos con el foreach
    let listadoHtml='';
    //boton eliminar

    for (let usuario of usuarios){

       let botonEliminar='<a href="#" onclick="eliminarUsuario('+usuario.id+')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
       let telefonoTexto=usuario.telefono == null ?'-':usuario.telefono;
       let usuarioHtml = '<tr><td>'+usuario.id+'</td><td>'+usuario.nombre+' '+usuario.apellido+'</td><td>'
                           +usuario.email+'</td><td>'
                           +telefonoTexto+'</td><td>'+botonEliminar +'</td></tr>';
       listadoHtml+=usuarioHtml;
    }
    console.log(usuarios);

    //let usuarioHtml = ' <tr><td>1</td><td>Alan Rocha</td><td>alan@alan.com</td><td>15332121</td><td><a href="#" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a></td></tr>';
    document.querySelector('#usuariosTabla tbody').outerHTML=listadoHtml;

}

function getHeaders(){
    return {
           'Accept':'application/json',
           'Content-Type':'application/json',
           'Authorization':localStorage.token
           };
}

async function eliminarUsuario(id){

    //preguntamos antes de eliminar usuario
    if (!confirm('¿Desea eliminar este usuario?')){
        return;
    }



    const request = await fetch('api/usuarios/'+id,{
        method: 'DELETE',
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':getHeaders()
        }
        });
        location.reload();
}