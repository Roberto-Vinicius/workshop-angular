import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-usuarios/list-render.component';
import { ListProdutosComponent } from './components/list-produtos/list-produtos.component';

const routes: Routes = [
  { path: "", component: FirstComponentComponent },
  { path: "list", component: ListRenderComponent },
  { path: "product", component: ListProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})

export class AppRoutingModule { }
