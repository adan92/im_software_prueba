import { useEffect, useState } from "react";
import { getAllPersonas } from "../services/PersonaService";
import { useNavigate } from "react-router-dom";
import { Persona } from "../interfaces/Persona";

const ListPersonaComponent = () => {
  const [personas, setPersonas] = useState<Persona[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    listPersonas();
  }, []);

  function listPersonas() {
    getAllPersonas()
      .then((response) => {
        console.log(response);
        setPersonas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

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
              <tr key={persona.id}>
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
