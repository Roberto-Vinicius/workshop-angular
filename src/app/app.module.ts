import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-usuarios/list-render.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ListProdutosComponent } from './components/list-produtos/list-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ListRenderComponent,
    TwoWayBindingComponent,
    ListProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
