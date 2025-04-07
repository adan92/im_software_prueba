package com.mx.imsoftware.model.dtos;

import com.mx.imsoftware.model.Persona;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

/**
 * DTO para transportar los datos de una persona y aplicar validaciones.
 */
@Setter
@Getter
public class RegistroPersonaDto {
    /**
     * Nombre de la persona. No debe exceder los 50 caracteres.
     */
    @NotBlank(message = "El nombre no puede estar vacío")
    @Size(max = 50, message = "El nombre no debe exceder los 50 caracteres")
    private String nombre;

    /**
     * Correo electrónico del usuario. Debe tener un formato válido.
     */
    @NotBlank(message = "El correo no puede estar vacío")
    @Email(message = "Debe ser un correo válido")
    private String email;

    /**
     * Edad del usuario. Debe ser un número positivo.
     */
    @NotNull(message = "La edad no puede ser nula")
    @Min(value = 0, message = "La edad debe ser positiva")
    private Integer edad;

    public Persona toPersona() {
        return new Persona()
                .setNombre(nombre)
                .setEmail(email)
                .setEdad(edad);
    }
}
