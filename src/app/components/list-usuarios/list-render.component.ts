import { Component, OnInit } from '@angular/core';

import { Usuarios } from '../../Usuarios';

import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})

export class ListRenderComponent {

  users: Usuarios[] = [];

  detalhesUsuarios = '';

  constructor(private listService: ListService) {
    this.getUsers();
  }

  showDados(usuario: Usuarios) {
    this.detalhesUsuarios = `Usuário: ${usuario.name}\n` + `Email: ${usuario.email}\n` + `Telefone: ${usuario.phone}`;
  }

  removerUsuario(usuario: Usuarios) {
    this.users = this.listService.remove(this.users, usuario);
  }

  getUsers(): void {
    this.listService.getAll().subscribe((users) => (this.users = users));
  }
}
