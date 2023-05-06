import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminMaster from '../views/AdminMaster';
import AgregarUsuario from '../views/user/AgregarUsuario';
import EditarUsuario from '../views/user/EditarUsuario';

const RutasMaster = () => {
    return (
    <>
    <Routes>
    <Route exact path="/adminMaster" element={<AdminMaster />} />
        <Route exact path="/agregarUsuario" element={<AgregarUsuario />} />
        <Route exact path="/editarUsuario/:id" element={<EditarUsuario />} />
    </Routes>
    </>
    );
};

export default RutasMaster;