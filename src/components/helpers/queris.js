const url = "http://localhost:3004/clientes";

export const consultarApiCliente = async () => {
  try {
    const respuesta = await fetch(url);
    const listaClientes = await respuesta.json();
    console.log(listaClientes);
    return(listaClientes);
  } catch (error) {
    console.log(error);
  }
};
