import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/commons/Footer";
import Menu from "./components/commons/Menu";
import Administrador from "./components/views/Administrador";
import Error404 from "./components/views/Error404";
import Home from "./components/views/Home";
import AgregarCliente from "./components/views/socios/AgregarCliente";
import EditarCliente from "./components/views/socios/EditarCliente";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../src/app.css";
import LoginUsser from "./components/views/LoginUsser";
import CajaDiaria from "./components/views/cajas/CajaDiaria";
import FormIngresoCaja from "./components/views/cajas/FormIngresoCaja";
import FormEditarCaja from "./components/views/cajas/FormEditarCaja";
import { useState } from "react";

function App() {
  const usuario= JSON.parse(localStorage.getItem("tokenUsuario"))|| {}
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario)
 
 
  return (
    <BrowserRouter>
      <Menu UsuarioLogueado={usuarioLogueado}  setUsuarioLogueado={setUsuarioLogueado}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/administrar" element={<Administrador />} />
        <Route exact path="*" element={<Error404 />} />
        <Route exact path="/agregarcliente" element={<AgregarCliente />} />
        <Route
          exact
          path="/administrar/editarcliente/:id"
          element={<EditarCliente />}
        />
      
        <Route exact path="/loginUser" element={<LoginUsser setUsuarioLogueado={setUsuarioLogueado} />} />
        <Route exact path="/caja" element={<CajaDiaria/>} />
        <Route exact path="/caja/formCaja" element={<FormIngresoCaja/>} />
        <Route exact path="/caja/formEditCaja/:id" element={<FormEditarCaja/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
