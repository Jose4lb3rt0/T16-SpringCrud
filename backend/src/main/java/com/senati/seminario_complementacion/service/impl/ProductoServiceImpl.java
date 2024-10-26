package com.senati.seminario_complementacion.service.impl;

import com.senati.seminario_complementacion.dao.ProductoDao;
import com.senati.seminario_complementacion.models.entity.Producto;
import com.senati.seminario_complementacion.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoServiceImpl implements ProductoService {
    @Autowired
    private ProductoDao productoDao;

    @Override
    public List<Producto> listar() {
        return (List<Producto>) productoDao.findAll();
    }

    @Override
    public Producto findById(Long id) {
        return productoDao.findById(id).orElse(null);
    }

    @Override
    public Producto save(Producto producto) {
        return productoDao.save(producto);
    }

    @Override
    public void delete(Long id) {
        productoDao.deleteById(id);
    }
}
