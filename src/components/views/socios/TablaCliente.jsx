import Button from "react-bootstrap/Button";

const TablaCliente = (props) => {
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

export default TablaCliente;