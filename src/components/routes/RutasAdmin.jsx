import { Route, Routes } from "react-router-dom";
import Administrador from "../views/Administrador";
import CajaDiaria from "../views/cajas/CajaDiaria";
import FormEditarCaja from "../views/cajas/FormEditarCaja";
import FormIngresoCaja from "../views/cajas/FormIngresoCaja";
import AgregarCliente from "../views/socios/AgregarCliente";
import EditarCliente from "../views/socios/EditarCliente";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador />} />
        <Route
          exact
          path="administrar/agregarcliente"
          element={<AgregarCliente />}
        />
        <Route exact path="/editarcliente/:id" element={<EditarCliente />} />
        <Route exact path="/caja" element={<CajaDiaria />} />
        <Route exact path="/caja/administrar/formCaja" element={<FormIngresoCaja />} />
        <Route
          exact
          path="caja/administrar/formEditCaja/:id"
          element={<FormEditarCaja />}
        />
      </Routes>
    </>
  );
};

export default RutasAdmin;
