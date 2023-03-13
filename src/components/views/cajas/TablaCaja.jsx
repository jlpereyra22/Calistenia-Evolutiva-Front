import Button from "react-bootstrap/Button";

const TablaCaja = (props) => {
  return (
    <tr>
      <td>{props.caja.Nombre}</td>
      <td>{props.caja.Operacion}</td>
      <td>{props.caja.Monto}</td>
      <td>{props.caja.Fecha}</td>
      <td>{props.caja.Hora}</td>
      <td>{props.caja.Operador}</td>
      <td>
        <Button variant="danger" className="m-1" size="sm">
          <i className="bi bi-bookmark-x-fill  text-white-50"></i>
        </Button>
        <Button variant="warning" className="m-1" size="sm">
          <i className="bi bi-pencil-square text-white-50"></i>
        </Button>
      </td>
    </tr>
  );
};

export default TablaCaja;
