package com.mx.imsoftware.service;

import com.mx.imsoftware.model.Persona;

import java.util.List;

/**
 * Interfaz que define los métodos del servicio para la gestión de personas.
 */
public interface PersonaService {
    /**
     * Guarda una nueva persona en el sistema.
     *
     * @param persona Objeto con los datos de la persona a guardar
     * @return Persona guardada
     */
    Persona savePersona(Persona persona);

    /**
     * Obtiene un listado de las personas.
     *
     * @return Listado de personas
     */
    List<Persona> findAllPersonas();
}
