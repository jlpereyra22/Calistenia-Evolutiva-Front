import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { BorrarClienteApi, consultarApiCliente } from "../../helpers/queris";


const TablaCliente = (props) => {
  const borrarCliente = ()=>{
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
        BorrarClienteApi(props.cliente._id).then((respuesta)=>{
          if(respuesta.status===200){
            consultarApiCliente().then((respuesta)=>{
              props.setCliente(respuesta)
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
        <td>{props.cliente.Nombre}</td>
        <td>{props.cliente.Dni}</td>
        <td>{props.cliente.Telefono}</td>
        <td>{props.cliente.Mail}</td>
        <td>{props.cliente.FNacimiento}</td>
        <td>{props.cliente.Estado}</td>
        <td>{props.cliente.FPago}</td>
        <td>{props.cliente.Monto}</td>
        <td>
          <Button variant="danger" className="m-1" size="sm" onClick={borrarCliente}>
            <i className="bi bi-bookmark-x-fill  text-white-50"></i>
          </Button>
          <Link  className="m-1 btn btn-warning btn-sm" to={`/administrar/editarcliente/${props.cliente._id}`}>
            <i className="bi bi-pencil-square text-white-50"></i>
          </Link>
        </td>
      </tr>
    );
};

export default TablaCliente;