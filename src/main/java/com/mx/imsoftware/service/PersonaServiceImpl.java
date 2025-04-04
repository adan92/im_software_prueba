package com.mx.imsoftware.service;

import com.mx.imsoftware.model.Persona;
import com.mx.imsoftware.repository.PersonaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Implementación de la interfaz PersonaService.
 * Contiene la lógica de negocio relacionada con las personas.
 */
@Service
public class PersonaServiceImpl implements PersonaService {
    private final PersonaRepository personaRepository;

    public PersonaServiceImpl(PersonaRepository personaRepository) {
        this.personaRepository = personaRepository;
    }
    /**
     * Guarda una nueva persona en el sistema.
     *
     * @param persona Objeto con los datos de la persona a guardar
     * @return Persona guardada
     */
    @Override
    public Persona savePersona(Persona persona) {
        return personaRepository.save(persona);
    }
    /**
     * Obtiene un listado de las personas.
     *
     * @return Listado de personas
     */
    @Override
    public List<Persona> findAllPersonas() {
        return personaRepository.findAll();
    }
}
