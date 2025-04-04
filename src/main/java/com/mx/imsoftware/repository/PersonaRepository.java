package com.mx.imsoftware.repository;

import com.mx.imsoftware.model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repositorio para acceder a los datos de las personas en la base de datos.
 * Extiende JpaRepository para operaciones CRUD.
 */
public interface PersonaRepository extends JpaRepository<Persona, Long> {}
