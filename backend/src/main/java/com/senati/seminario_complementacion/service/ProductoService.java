package com.senati.seminario_complementacion.service;

import com.senati.seminario_complementacion.models.entity.Producto;

import java.util.List;

public interface ProductoService {
    List<Producto> listar();
    Producto findById(Long id);
    Producto save(Producto producto); 
    void delete(Long id);
}
