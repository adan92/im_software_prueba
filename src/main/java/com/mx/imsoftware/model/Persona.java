package com.mx.imsoftware.model;


import jakarta.persistence.*;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * Representa la entidad Persona en la base de datos.
 * Esta clase se mapea a la tabla 'usuarios'.
 */
@Data
@Entity
@Table(name = "personas")
@Accessors(chain = true)
public class Persona {
    /**
     * Identificador único del usuario.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    /**
     * Nombre completo de la persona.
     */
    @Column(name = "nombre", length = 50, nullable = false)
    private String nombre;
    /**
     * Edad del usuario.
     */
    @Column(name = "edad", nullable = false)
    private Integer edad;
    /**
     * Correo electrónico de la persona.
     */
    @Column(name = "email", length = 50,nullable = false)
    private String email;
}
