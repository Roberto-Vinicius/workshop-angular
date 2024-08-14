import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivesComponent } from "./components/directives/directives.component";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DirectivesComponent, EmitterComponent, EventosComponent, FirstComponentComponent, IfRenderComponent, ParentDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'workshop-angular';
}
