import { Component } from '@angular/core';

import { Produtos } from '../../Produtos';
import { ListService } from '../../services/produtos.service';

@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.component.html',
  styleUrls: ['./list-produtos.component.css'] // Correção do nome da propriedade
})

export class ListProdutosComponent {

  products: Produtos[] = []; // Atualize a variável para produtos

  detalhesProduto = ''; // Atualize o nome da variável

  constructor(private listService: ListService) {
    this.getProdutos();
  }

  mostrarDetalhes(produto: Produtos) { // Atualize o nome do método
    this.detalhesProduto = `Produto: ${produto.name}\n` + 
                          `Preço: ${produto.price}\n` + 
                          `Descrição: ${produto.description}`;
  }

  getProdutos(): void { // Atualize o nome do método
    this.listService.getAllProducts().subscribe((produtos) => (this.products = produtos)); // Correção do parâmetro
  }
}
