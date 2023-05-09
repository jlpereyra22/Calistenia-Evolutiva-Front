import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AgregarCajaApi } from "../../helpers/queris";

const FormIngresoCaja = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (datos) => {
 
    AgregarCajaApi(datos).then((respuesta)=>{
      if (respuesta.status === 201) {
        Swal.fire("Asiento generado", "Asiento generado Correctamente", "success");
        navegacion("/administrar/caja")
      } else {
        Swal.fire("Error inesperado", "Intente Nuevamente", "error");
      }
    });
  };
  const navegacion = useNavigate()
  return (
    <section className="mainSection bgGradient font">
      <Container>
        <div className="text-center text-white">
          <h2>Asiento Diario</h2>
          <hr />
        </div>
        <div>
          <Form className="text-success" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese Nombre"
                {...register("Nombre", {
                  required: "Este es un dato obligatorio",
                  minLength: {
                    value: 2,
                    message: "Minimo de caracteres 2",
                  },
                  maxLength: {
                    value: 25,
                    message: "Maximo de caracteres 25",
                  },
                })}
              />
              <Form.Text className="text-warning">
                {errors.Nombre?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formOperacion">
              <Form.Label>Tipo de Operacion</Form.Label>
              <Form.Select
                id="formOperacion"
                {...register("Operacion", {
                  required: "Este es un campo obligatorio",
                })}
              >
                <option value="">Tipo de Gestion</option>
                <option value="Ingreso">Ingreso</option>
                <option value="Egreso">Egreso</option>
              </Form.Select>
              <Form.Text className="text-warning">
                {errors.Operacion?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMonto">
              <Form.Label>Monto</Form.Label>
              <Form.Control
                type="number"
                placeholder="ingrese el Monto"
                {...register("Monto", {
                  required: "Este es un campo obligatorio",
                  min: {
                    value:1,
                    message: "No puede ingresor un valor menor a  $1",
                  },
                  max: {
                    value:100000,
                    message: "No puede ingresor un valor mayor a  $100000",
                  },
                })}
              />
              <Form.Text className="text-warning">
                {errors.Monto?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formFecha">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                placeholder="Fecha"
                {...register("Fecha", {
                  required: "Este es un campo obligatorio",
                })}
              />
              <Form.Text className="text-warning">
                {errors.Fecha?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHora">
              <Form.Label>Hora</Form.Label>
              <Form.Control
                type="time"
                placeholder="Ingrese la hora"
                {...register("Hora", {
                  required: "Este es un campo obligatorio",
                })}
              />
              <Form.Text className="text-warning">
                {errors.Hora?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formOperador">
              <Form.Label>Operador</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del Operador"
                {...register("Operador", {
                  required: "Este es un campo obligatorio",
                  minLength: {
                    value: "3",
                    message: "El operador debe tener un minimo de 3 caracteres",
                  },
                  maxLength: {
                    value: "20",
                    message:
                      "El operador debe tener una cantidad de caracteres maximos de 20",
                  },
                })}
              />
              <Form.Text className="text-warning">
                {errors.Operador?.message}
              </Form.Text>
            </Form.Group>

            <Button variant="outline-success" type="submit">
              Aceptar
            </Button>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default FormIngresoCaja;
