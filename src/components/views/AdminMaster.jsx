import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { consultarApiUser } from "../helpers/queris";
import TablaUsuarios from "./user/TablaUsuarios";

const AdminMaster = () => {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
   consultarApiUser().then((respuesta)=>{
console.log(respuesta);
setUsuario(respuesta);
   })
  }, [])
  
  return (
    <section className="mainSection bgGradient">
      <Container className="text-center text-white">
        <h2>Administrador de Usuarios</h2>
        <hr />
        <div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Nombre y Apellido</th>
                <th>Usuario</th>
                <th>Contraseña</th>
                <th>Rol</th>
                <th>Modificar</th>
              </tr>
            </thead>
            <tbody>
              {usuario.map((usuario)=> <TablaUsuarios key={usuario._id} usuario={usuario}/>)}
            
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  );
};

export default AdminMaster;
