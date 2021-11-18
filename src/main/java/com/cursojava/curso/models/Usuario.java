package com.cursojava.curso.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name="usuarios")
@ToString @EqualsAndHashCode

public class Usuario {
    //indicamos columna en el atributo y le indicamos que es un id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name="id")
    private Long Id;

    @Getter @Setter @Column(name="nombre")
    private String nombre;

    @Getter @Setter @Column(name="apellido")
    private String apellido;

    @Getter @Setter @Column(name="email")
    private String email;

    @Getter @Setter @Column(name="telefono")
    private String telefono;

    @Getter @Setter @Column(name="password")
    private String password;



}
