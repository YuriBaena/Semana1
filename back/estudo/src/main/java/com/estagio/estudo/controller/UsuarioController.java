package com.estagio.estudo.controller;

import com.estagio.estudo.model.Usuario;
import com.estagio.estudo.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "http://localhost:4200") // Habilita CORS para o Angular
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    // Criar um novo usuário
    @PostMapping
    public Usuario criarUsuario(@RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    // Listar todos os usuários
    @GetMapping
    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }
}
