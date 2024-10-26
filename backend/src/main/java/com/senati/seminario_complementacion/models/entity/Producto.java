package com.senati.seminario_complementacion.models.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "productos")
@Getter
@Setter
public class Producto implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nombre;

    private double precio;

    @Column(name = "created_at")
    @Temporal(TemporalType.DATE)
    private Date createdAt;
}
