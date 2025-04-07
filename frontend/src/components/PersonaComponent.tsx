import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { savePersona } from "../services/PersonaService";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Persona } from "../interfaces/Persona";
/**
 * Esquema de validación utilizando Yup para cada campo del formulario:
 * - nombre: obligatorio.
 * - email: debe tener formato válido y es obligatorio.
 * - edad: debe ser un número positivo entre 1 y 120.
 */
const schema = Yup.object().shape({
  nombre: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo es obligatorio"),
  edad: Yup.number()
    .typeError("La edad debe ser un número")
    .positive("Debe ser mayor que 0")
    .max(120, "La edad máxima es 120")
    .required("La edad es obligatoria"),
});
/**
 * Componente que muestra un formulario para crear una nueva persona.
 * Utiliza react-hook-form y Yup para validación de datos.
 */
const PersonaComponent = () => {
  const navigate = useNavigate();

  // Configuración del formulario con validación por Yup.
  const {
    register, // Registra los inputs para su seguimiento.
    handleSubmit, // Maneja el submit del formulario.
    formState: { errors, isValid }, // Proporciona errores y validez general del formulario.
  } = useForm<Persona>({
    resolver: yupResolver(schema), // Enlaza la validación con Yup.
    mode: "onChange", // Valida conforme el usuario escribe.
  });

  /**
   * Función para guardar a la persona que se ejecuta al enviar el formulario si los datos son válidos.
   * @param data Datos del formulario de tipo Persona
   */
  const onSubmit = (data: Persona) => {
    savePersona(data)
      .then((response) => {
        console.log(response.data);
        navigate("/personas");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Nueva persona</h2>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group mb-2">
                <label className="form-label">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("nombre")}
                  placeholder="Ingresa el nombre"
                />
                {errors.nombre && (
                  <small className="text-danger">{errors.nombre.message}</small>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Correo electrónico:</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("email")}
                  placeholder="correo@ejemplo.com"
                />
                {errors.email && (
                  <small className="text-danger">{errors.email.message}</small>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Edad:</label>
                <input
                  type="number"
                  className="form-control"
                  {...register("edad")}
                  placeholder="Edad"
                />
                {errors.edad && (
                  <small className="text-danger">{errors.edad.message}</small>
                )}
              </div>
              {/* Botón de guardar (deshabilitado si el formulario no es válido) */}
              <button
                type="submit"
                className="btn btn-success"
                disabled={!isValid}
              >
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonaComponent;
