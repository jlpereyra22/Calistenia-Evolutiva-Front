import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { login } from "../helpers/queris";

const LoginUsser = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    login(data).then((respuesta) => {
      console.log(respuesta);
      if (respuesta) {
        localStorage.setItem("tokenUsuario", JSON.stringify(respuesta));
        props.setUsuarioLogueado(respuesta);
        navegacion("/administrar");
      } else {
        Swal.fire("Error","Usuario o contraseña incorrecta", "error")
      }
    });
  };

 
  return (
    <section className="mainSection bg-black d-flex flex-column justify-content-center">
      <Container className=" text-white  p-2">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="EmailUsser">
            <Form.Label>Email de Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su Email"
              {...register("Usuario", {
                required: "Este campo es obligatorio",
                minLength: {
                  value: 2,
                  message: " Como minimo debe contener 2 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: " No debe superar los 30 caracteres ",
                },
              })}
            />
            <Form.Text className="text-warning">
              {errors.Usuario?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="ContraseñaUsser">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese su Contraseña"
              {...register("Contraseña", {
                required: "este es un campo obligatorio",
                minLength: {
                  value: 2,
                  message: " Como minimo debe contener 2 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: " No debe superar los 30 caracteres ",
                },
              })}
            />
            <Form.Text className="text-warning">
              {errors.Contraseña?.message}
            </Form.Text>
          </Form.Group>

          <Button variant="outline-success" type="submit">
            LogIn
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default LoginUsser;
