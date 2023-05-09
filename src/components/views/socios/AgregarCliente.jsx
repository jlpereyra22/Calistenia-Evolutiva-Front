import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { AgregarClienteApi } from "../../helpers/queris";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AgregarCliente = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (datos) => {
   
    AgregarClienteApi(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Cliente Agregado",
          "El cliente fue agregado con exito",
          "success"
        );
        navegacion("/administrar");
      } else {
        Swal.fire(
          "Ocurrio un Error",
          "La solicitud no pudo ser procesada, intente nuevamente",
          "error"
        );
      }
    });
    console.log("Desde Nuestra funcion onSubmit");
  };
  const navegacion = useNavigate();
  return (
    <section className="bg-black font">
      <Container>
        <div className="text-center text-white">
          <h2>Agregar Cliente </h2>
          <hr />
        </div>
        <div>
          <Form className="text-success" onClick={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="inputNombre">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
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
            <Form.Group className="mb-3" controlId="inputDni">
              <Form.Label>DNI</Form.Label>
              <Form.Control
                type="number"
                placeholder="Numero de Documento"
                {...register("Dni", {
                  required: "El Dni es un dato obligatorio",
                  minLength: {
                    value: 6,
                    message: "El dni debe tener un minimo de 6 caracteres",
                  },
                  maxLength: {
                    value: 8,
                    message: "El nombre no debe superar los 8 caracteres ",
                  },
                })}
              />
              <Form.Text className="text-warning">
                {errors.Dni?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputCel">
              <Form.Label>Celular</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Ingrese numero de telefono"
                {...register("Telefono", {
                  required: "El telefono es un dato obligatorio",
                  minLength: {
                    value: 7,
                    message: "El telefono debe tener como minimo 7 caracteres",
                  },
                  maxLength: {
                    value: 18,
                    message:
                      "El telefono como maximo debe tener hasta 18 caracteres",
                  },
                })}
              />
              <Form.Text className="text-warning">
                {errors.Telefono?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="mail"
                placeholder="Ingrese Mail..."
                {...register("Mail", {
                  required: "El Mail es un dato obligatorio",
                  minLength: {
                    value: 6,
                    message: "El Mail debe tener como minimo 76caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message:
                      "El Mail como maximo debe tener hasta 50 caracteres",
                  },
                   pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Debe ingresar un mail válido.",
                  },
                })}
              />
              <Form.Text className="text-warning">
                {errors.Mail?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputFNacimiento">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control
                type="date"
                placeholder="Ingrese fecha de nacimiento"
                {...register("FNacimiento", {
                  required: "La fecha de nacimiento es un datro requerido",
                })}
              />
              <Form.Text className="text-warning">
                {errors.FNacimiento?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputMembresia">
              <Form.Label>Estado de Membresia</Form.Label>
              <Form.Select
                aria-label="Estado de Membresia"
                {...register("Estado", {
                  required: "Este es un dato obligatorio",
                })}
              >
                <option value="">Estado</option>
                <option value="Activo">Activo</option>
                <option value="Baja">Baja</option>
              </Form.Select>
              <Form.Text className="text-warning">
                {errors.Estado?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputFechaIngreso">
              <Form.Label>Fecha de Ingreso</Form.Label>
              <Form.Control
                type="date"
                placeholder="Fecha de pago"
                {...register("FPago", {
                  required: "Este es un dato obligatorio",
                })}
              />
              <Form.Text className="text-warning">
                {errors.FPago?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputMonto">
              <Form.Label>Monto</Form.Label>
              <Form.Control
                type="number"
                placeholder="Monto del pago"
                {...register("Monto", {
                  required: "Este es un dato obligatorio",
                  minLength: {
                    value: 1,
                    message: "La cantidad minimas de caracteres es 1",
                  },
                  maxLength: {
                    value: 5,
                    message: "La cantidad maxima de caracteres es 5",
                  },
                })}
              />
              <Form.Text className="text-warning">
                {errors.Monto?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="outline-success" size="lg" type="submit">
              Agregar
            </Button>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default AgregarCliente;
