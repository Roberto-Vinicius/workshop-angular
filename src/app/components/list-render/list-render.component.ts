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

  showPhone(usuario: Usuarios) {
    this.detalhesUsuarios = `Usuario: ${usuario.name} telefone: ${usuario.phone}`;
    console.log(usuario)
  }

  removerUsuario(usuario: Usuarios) {
    this.users = this.listService.remove(this.users, usuario);
  }

  getUsers(): void {
    this.listService.getAll().subscribe((users) => (this.users = users));
  }
}
