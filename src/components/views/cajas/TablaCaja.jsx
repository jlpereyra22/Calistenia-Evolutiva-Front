import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { BorrarAsientoApi, consultarApiCaja } from "../../helpers/queris";

const TablaCaja = (props) => {
    const borrarAsiento = ()=>{
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
              BorrarAsientoApi(props.caja._id).then((respuesta)=>{
                if(respuesta.status===200){
                  consultarApiCaja().then((respuesta)=>{
                    props.setCaja(respuesta)
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
        console.log("desde mi funcion de borrado")
    }
  return (
    <tr>
      <td>{props.caja.Nombre}</td>
      <td>{props.caja.Operacion}</td>
      <td>{props.caja.Monto}</td>
      <td>{props.caja.Fecha}</td>
      <td>{props.caja.Hora}</td>
      <td>{props.caja.Operador}</td>
      <td>
        <Button  onClick={borrarAsiento} variant="danger" className="m-1" size="sm">
          <i className="bi bi-bookmark-x-fill  text-white-50"></i>
        </Button>
        <Link  className="m-1 btn btn-warning btn-sm" to={`/caja/formEditCaja/${props.caja._id}`}>
          <i className="bi bi-pencil-square text-white-50"></i>
        </Link>
      </td>
    </tr>
  );
};

export default TablaCaja;
