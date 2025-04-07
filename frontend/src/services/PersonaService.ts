import axios from "axios";
import { Persona } from "./../interfaces/Persona"; // ajusta el path si va en otro archivo

const BASE_REST_API_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Obtiene listado de personas registradas
 * @returns Promesa con la respuesta del backend
 */
export const getAllPersonas = () => axios.get<Persona[]>(BASE_REST_API_URL);

/**
 * Guarda una nueva persona en la base de datos
 * @param persona Objeto con nombre, email y edad
 * @returns Promesa con la respuesta del backend
 */
export const savePersona = (Persona: Omit<Persona, 'id'>) =>
  axios.post<Persona>(BASE_REST_API_URL, Persona);
