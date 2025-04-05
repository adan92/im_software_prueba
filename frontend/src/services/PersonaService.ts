import axios from "axios";
import { Persona } from "./../interfaces/Persona"; // ajusta el path si va en otro archivo

const BASE_REST_API_URL = 'http://localhost:9090/api/persona';

export const getAllPersonas = () => axios.get<Persona[]>(BASE_REST_API_URL);

export const savePersona = (Persona: Omit<Persona, 'id'>) =>
  axios.post<Persona>(BASE_REST_API_URL, Persona);
