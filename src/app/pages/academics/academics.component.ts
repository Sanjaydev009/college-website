import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-academics',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="container">
      <h1>Academics</h1>
      <p>Explore our diverse range of academic programs.</p>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container { padding: 20px; }
  `]
})
export class AcademicsComponent {}