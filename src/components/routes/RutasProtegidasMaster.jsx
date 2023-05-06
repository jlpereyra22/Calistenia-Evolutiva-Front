import React from 'react';
import { Navigate } from 'react-router-dom';

const RutasProtegidasMaster = ({children}) => {
    const token = JSON.parse(localStorage.getItem("tokenUsuario"))|| null;
    if(token.Rol === "Maestro"){
        return children;
    }else{
        return <Navigate to={"/"}></Navigate>
    }
    
};

export default RutasProtegidasMaster;