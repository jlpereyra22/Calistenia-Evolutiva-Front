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

import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";

function App() {
  const usuario = JSON.parse(localStorage.getItem("tokenUsuario")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <BrowserRouter>
      <Menu
        UsuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="*" element={<Error404 />} />

        <Route
          exact
          path="/loginUser"
          element={<LoginUsser setUsuarioLogueado={setUsuarioLogueado} />}
        />

        <Route exact path="administrar/*" element={
          <RutasProtegidas>
            <RutasAdmin/>
          </RutasProtegidas>
        }/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
