package com.senati.seminario_complementacion.controllers;

import com.senati.seminario_complementacion.dao.ProductoDao;
import com.senati.seminario_complementacion.models.entity.Producto;
import com.senati.seminario_complementacion.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // Permite las solicitudes desde React
@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping("/listar")
    public List<Producto> listar(){
        return productoService.listar();
    }

    @GetMapping("/ver/{id}")
    public Producto detalle(@PathVariable Long id){
        return productoService.findById(id);
    }

    @PostMapping("/crear")
    public Producto crear(@RequestBody Producto producto) {
        return productoService.save(producto);
    }

    @PutMapping("/editar/{id}")
    public Producto actualizar(@RequestBody Producto producto, @PathVariable Long id) {
        Producto productoActual = productoService.findById(id);

        if (productoActual != null) {
            productoActual.setNombre(producto.getNombre());
            productoActual.setPrecio(producto.getPrecio());
            productoActual.setCreatedAt(producto.getCreatedAt());
            return productoService.save(productoActual);
        }
        return null;
    }

    @DeleteMapping("/eliminar/{id}")
    public void eliminar(@PathVariable Long id) {
        productoService.delete(id);
    }
}
