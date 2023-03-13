import Button from "react-bootstrap/Button";

const TablaCaja = () => {
  return (
    <tr>
      <td>Aguas Bachur</td>
      <td>Egreso</td>
      <td>3000</td>
      <td>Fecha</td>
      <td>Hora</td>
      <td>Agustin</td>
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
