import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import {  EditarUsuarioApi, obtenerUsuarioApi } from "../../helpers/queris";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditarUsuario = () => {
  const {id}= useParams();
 
useEffect(()=>{
    obtenerUsuarioApi(id).then((respuesta)=>{
setValue("Nombre",respuesta.dato.Nombre)
setValue("Usuario",respuesta.dato.Usuario)
setValue("Rol",respuesta.dato.Rol)
setValue("Contraseña",respuesta.dato.Contraseña)
    })
},[])
  const {
    register,
    handleSubmit,
    formState: { errors },
   setValue
  } = useForm();

  const onSubmit = (usuarioActua) => {
    
    EditarUsuarioApi(id, usuarioActua).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire("Usuario Actualizado", "Actualizacion Correcta", "success");
        navegacion("/admin/adminMaster");
      } else {
        Swal.fire("Error inesperado", "Intente Nuevamente", "error");
      }
    });
  };

  const navegacion = useNavigate()

 

  return (
    <section className="bgGradient mainSection font">
      <Container className=" p-5 text-white">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              className="w-75"
              type="text"
              placeholder="Ingrese el nombre..."
              {...register("Nombre", {
                required: "Este dato es obligatorio",
                minLength: {
                  value: 2,
                  message: "El nombre como minimo debe contener 2 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "El nombre no debe superar los 30 caracteres ",
                },
              })}
            />
            <Form.Text className="text-warning">
              {errors.Nombre?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formUsuario">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              className="w-75"
              type="text"
              placeholder="Ingrese el Usuario..."
              {...register("Usuario", {
                required: "Este dato es obligatorio",
                minLength: {
                  value: 2,
                  message: "El Usuario como minimo debe contener 2 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "El Usuario no debe superar los 30 caracteres ",
                },
              })}
            />
            <Form.Text className="text-warning">
              {errors.Usuario?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 w-75" controlId="formRol">
            <Form.Label>Rol</Form.Label>
            <Form.Select
              aria-label="Rol"
              {...register("Rol", {
                required: "Este es un dato obligatorio",
              })}
            >
              <option value=""> Rol</option>
              <option value="Empleado"> Empleado</option>
              <option value="Maestro"> Maestro</option>
            </Form.Select>
            <Form.Text className="text-warning">
              {errors.Rol?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formContraseña">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              className="w-75"
              placeholder="Ingrese el nombre..."
              {...register("Contraseña", {
                required: "Este dato es obligatorio",
                minLength: {
                  value: 2,
                  message: "La contraseña como minimo debe contener 2 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "La contraseña no debe superar los 30 caracteres ",
                },
              })}
            />
            <Form.Text className="text-warning">
              {errors.Contraseña?.message}
            </Form.Text>
          </Form.Group>

          <Button variant="outline-success" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default EditarUsuario;
