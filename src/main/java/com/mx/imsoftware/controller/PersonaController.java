package com.mx.imsoftware.controller;

import com.mx.imsoftware.model.Persona;
import com.mx.imsoftware.model.dtos.RegistroPersonaDto;
import com.mx.imsoftware.service.PersonaService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
/**
 * Controlador para gestionar personas en la aplicación.
 * Expone endpoints para crear y consultar personas.
 */
@RestController
@RequestMapping("api/persona")
@Validated
public class PersonaController {
    private final PersonaService personaService;

    public PersonaController(PersonaService personaService) {
        this.personaService = personaService;
    }

    /**
     * Crea una nueva persona.
     *
     * @param registroPersonaDto Objeto con la información de la persona.
     * @return Respuesta HTTP indicando el resultado.
     */
    @Operation(summary = "Crear persona", description = "Crea una nueva persona con nombre, email y edad.")
    @PostMapping
    public ResponseEntity<Persona> savePersona(@Valid @RequestBody RegistroPersonaDto registroPersonaDto) {
        return new ResponseEntity<>(
                personaService.savePersona(registroPersonaDto.toPersona()),
                HttpStatus.CREATED
        );
    }
    /**
     * Obtiene listado de personas existentes.
     *
     * @return Respuesta HTTP con el listado de personas registradas.
     */
    @Operation(summary = "Listado de personas", description = "Regresa un listado de las personas registradas en la BD.")
    @GetMapping
    public ResponseEntity<List<Persona>> getAllPersonas() {
        return ResponseEntity.ok(personaService.findAllPersonas());
    }
}

