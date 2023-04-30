//const Json.server
//const url = "http://localhost:3004/clientes";
//const urlCajaDiaria ="http://localhost:3004/cajaDiaria"

//const mongo Local
const url = process.env.REACT_APP_API_LOCAL_CLIENTE;
console.log(url)
const urlCajaDiaria =process.env.REACT_APP_API_LOCAL_CAJADIARIA;
console.log(urlCajaDiaria)
const url_usser = process.env.REACT_APP_API_LOCAL_USSER;
console.log(url_usser)

//PETICIONES CLIENTES

export const consultarApiCliente = async () => {
  try {
    const respuesta = await fetch(url);
    const listaClientes = await respuesta.json();
    console.log(listaClientes);
    return listaClientes;
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
};

export const BorrarClienteApi = async (id) => {
  try {
    const respuesta = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
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
    console.log(error);
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
    console.log(error);
  }
};

//PETICIONES CAJA

export const consultarApiCaja = async () => {
  try {
    const respuesta = await fetch(urlCajaDiaria);
    const listaMovimientos = await respuesta.json();
    console.log(listaMovimientos);
    return listaMovimientos;
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
};

export const BorrarAsientoApi = async (id) => {
  try {
    const respuesta = await fetch(`${urlCajaDiaria}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
};

//PETICIONES USUARIO  

export const consultarApiUser = async () => {
  try {
    const respuesta = await fetch(url_usser);
    const listaUsuarios = await respuesta.json();
    console.log(listaUsuarios);
    return listaUsuarios;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (usuario)=>{
  try {
    const respuesta = await fetch(url_usser);
    const listaUsuarios= await respuesta.json();
    const usuarioBuscado = listaUsuarios.find((itemUsuario)=>itemUsuario.Usuario===usuario.Usuario)
    if (usuarioBuscado.Contraseña=== usuario.Contraseña) {
      return usuarioBuscado;
    } else {
      console.log("Usuario inexistente")
      return
    }
  } catch (error) {
    console.log(error)
    return
  }
}