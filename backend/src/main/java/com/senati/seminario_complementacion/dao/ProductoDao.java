package com.senati.seminario_complementacion.dao;

import com.senati.seminario_complementacion.models.entity.Producto;
import org.springframework.data.repository.CrudRepository;

public interface ProductoDao extends CrudRepository<Producto, Long> {

}
