import { useEffect, useState } from "react";
import { getAllPersonas } from "../services/PersonaService";
import { useNavigate } from "react-router-dom";
import { Persona } from "../interfaces/Persona";
/**
 * Componente que se encarga de mostrar el listado de personas.
 */
const ListPersonaComponent = () => {
  const [personas, setPersonas] = useState<Persona[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    listPersonas();
  }, []);
  /**
   * Hook que se encarga de obtener todas las personas desde el backend
   */
  function listPersonas() {
    getAllPersonas()
      .then((response) => {
        setPersonas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  /**
   * Función encargada de redirigir a la pantalla de agregar persona
   */
  function addNewPersona() {
    navigate("/agregar-persona");
  }

  return (
    <div className="container">
      <h2 className="text-center">Listado de personas</h2>
      <button className="btn btn-primary mb-2" onClick={addNewPersona}>
        Nueva persona
      </button>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>
            {personas.map((persona) => (
              <tr key={persona.nombre}>
                <td>{persona.nombre}</td>
                <td>{persona.email}</td>
                <td>{persona.edad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListPersonaComponent;
