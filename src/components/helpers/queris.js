//const Json.server
//const url = "http://localhost:3004/clientes";
//const urlCajaDiaria ="http://localhost:3004/cajaDiaria"

//const mongo Local
const url = process.env.REACT_APP_API_CALISTENIA_CLIENTES;

const urlCajaDiaria = process.env.REACT_APP_API_CALISTENIA_CAJADIARIA;

const url_usser = process.env.REACT_APP_API_CALISTENIA_USSER;


//PETICIONES CLIENTES

export const consultarApiCliente = async () => {
  try {
    const respuesta = await fetch(url);
    const listaClientes = await respuesta.json();

    return listaClientes;
  } catch (error) {
  
  }
};

export const AgregarClienteApi = async (cliente) => {
  try {
    const respuesta = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cliente),
    });
    return respuesta;
  } catch (error) {
  
  }
};

export const BorrarClienteApi = async (id) => {
  try {
    const respuesta = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
  
  }
};

export const ObtenerClienteApi = async (id) => {
  try {
    const respuesta = await fetch(`${url}/${id}`);
    const clienteBuscado = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };
    return clienteBuscado;
  } catch (error) {
    
  }
};

export const EditarClienteApi = async (_id, datosActualizados) => {
  try {
    const respuesta = await fetch(`${url}/${_id}`, {
      method: "PUT",
      headers: {
        "CONTENT-TYPE": "application/json",
      },
      body: JSON.stringify(datosActualizados),
    });
    return respuesta;
  } catch (error) {
   
  }
};

//PETICIONES CAJA

export const consultarApiCaja = async () => {
  try {
    const respuesta = await fetch(urlCajaDiaria);
    const listaMovimientos = await respuesta.json();
    
    return listaMovimientos;
  } catch (error) {
    
  }
};

export const AgregarCajaApi = async (asiento) => {
  try {
    const respuesta = await fetch(urlCajaDiaria, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(asiento),
    });
    return respuesta;
  } catch (error) {
   
  }
};

export const BorrarAsientoApi = async (id) => {
  try {
    const respuesta = await fetch(`${urlCajaDiaria}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    
  }
};

export const ObtenerAsientoApi = async (id) => {
  try {
    const respuesta = await fetch(`${urlCajaDiaria}/${id}`);
    const clienteBuscado = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };
    return clienteBuscado;
  } catch (error) {
    console.log(error);
  }
};

export const EditarAsientoApi = async (id, datosActualizados) => {
  try {
    const respuesta = await fetch(`${urlCajaDiaria}/${id}`, {
      method: "PUT",
      headers: {
        "CONTENT-TYPE": "application/json",
      },
      body: JSON.stringify(datosActualizados),
    });
    return respuesta;
  } catch (error) {
    
  }
};

//PETICIONES USUARIO

export const consultarApiUser = async () => {
  try {
    const respuesta = await fetch(url_usser);
    const listaUsuarios = await respuesta.json();
 
    return listaUsuarios;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(url_usser);
    const listaUsuarios = await respuesta.json();
    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.Usuario === usuario.Usuario
    );
    if (usuarioBuscado.Contraseña === usuario.Contraseña) {
      return usuarioBuscado;
    } else {
      console.log("Usuario inexistente");
      return;
    }
  } catch (error) {
    console.log(error);
    return;
  }
};

export const AgregarUsuarioApi = async (usuario) => {
  try {
    const respuesta = await fetch(url_usser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
  
  }
};
export const EditarUsuarioApi = async (_id, datosActualizados) => {
  try {
    const respuesta = await fetch(`${url_usser}/${_id}`, {
      method: "PUT",
      headers: {
        "CONTENT-TYPE": "application/json",
      },
      body: JSON.stringify(datosActualizados),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerUsuarioApi = async (id) => {
  try {
    const respuesta = await fetch(url_usser + "/" + id);
    const usuarioBuscado = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };
    return usuarioBuscado;
  } catch (error) {
    
  }
};



export const BorrarUsuarioApi = async (id) => {
  try {
    const respuesta = await fetch(`${url_usser}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    
  }
};
