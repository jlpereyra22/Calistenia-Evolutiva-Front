import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/commons/Footer";
import Menu from "./components/commons/Menu";
import Administrador from "./components/views/Administrador";
import Error404 from "./components/views/Error404";
import Home from "./components/views/Home";
import AgregarCliente from "./components/views/socios/AgregarCliente";
import EditarCliente from "./components/views/socios/EditarCliente";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/app.css"

function App() {
  return (
    <BrowserRouter>
   <Menu/>
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
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
