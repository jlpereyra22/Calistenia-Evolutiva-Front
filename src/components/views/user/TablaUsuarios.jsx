import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { BorrarUsuarioApi, consultarApiUser } from "../../helpers/queris";

const TablaUsuarios = (props) => {
  const borrarUsuario = ()=>{
    Swal.fire({
      title: '¿Estas Seguro de borrar?',
      text: "¡No podras revertir esta accion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, Borrar!',
      cancelButtonText: '¡Cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        BorrarUsuarioApi(props.usuario._id).then((respuesta)=>{
          if(respuesta.status===200){
            consultarApiUser().then((respuesta)=>{
              props.setUsuario(respuesta)
            })
            Swal.fire(
              '¡Eliminaste!',
              'Se elimino con exito el cliente',
              'success'
            )
          }
        })
          }
        })
       
  }
  return (
    <tr>
      <td>{props.usuario.Nombre}</td>
      <td>{props.usuario.Usuario}</td>
      <td>{props.usuario.Rol}</td>
      <td>{props.usuario.Contraseña}</td>
      <td>
        <Button variant="danger" className="m-1" size="sm" onClick={borrarUsuario}>
          <i className="bi bi-bookmark-x-fill  text-white-50"></i>
        </Button>
        <Link to={`/adminMaster/editarUsuario/${props.usuario._id}` }className="m-1 btn btn-warning btn-sm">
          <i className="bi bi-pencil-square text-white-50"></i>
        </Link>
      </td>
    </tr>
  );
};

export default TablaUsuarios;
