package br.com.api.produtos.controle;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class ProdutoControle {

    @GetMapping("/")
    public String rota(){
        return "API de produtos funcionando!";
    }
    
}
