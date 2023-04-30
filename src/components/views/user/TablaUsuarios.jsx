import { Button } from "react-bootstrap";


const TablaUsuarios = (props) => {
  return (
    <tr>
      <td>{props.usuario.Nombre}</td>
      <td>{props.usuario.Usuario}</td>
      <td>{props.usuario.Rol}</td>
      <td>{props.usuario.Contraseña}</td>
      <td>
        <Button variant="danger" className="m-1" size="sm">
          <i className="bi bi-bookmark-x-fill  text-white-50"></i>
        </Button>
        <Button className="m-1 btn btn-warning btn-sm">
          <i className="bi bi-pencil-square text-white-50"></i>
        </Button>
      </td>
    </tr>
  );
};

export default TablaUsuarios;
