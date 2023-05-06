import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { consultarApiUser } from "../helpers/queris";
import TablaUsuarios from "./user/TablaUsuarios";
import { Link } from "react-router-dom";

const AdminMaster = () => {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
   consultarApiUser().then((respuesta)=>{
console.log(respuesta);
setUsuario(respuesta);
   })
  }, [])
  
  return (
    <section className="bgGradient mainSection font">
      <Container className="text-center text-white">
        <h2>Administrador de Usuarios</h2>
        <hr />
        <div className="d-flex justify-content-end">
          
          <Link
            className="m-3 btn btn-outline-success"
            size="sm"
            to="/admin/agregarUsuario"
          >
            Agregar Usuario
          </Link>
        </div>
        <div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Nombre y Apellido</th>
                <th>Usuario</th>
                <th>Rol</th>
                <th>Contraseña</th>
                <th>Modificar</th>
              </tr>
            </thead>
            <tbody>
              {usuario.map((usuario)=> <TablaUsuarios key={usuario._id} usuario={usuario} setUsuario={setUsuario}/>)}
            
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  );
};

export default AdminMaster;
