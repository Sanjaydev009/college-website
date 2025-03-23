import { Component } from '@angular/core';

@Component({
  selector: 'app-departments',
  standalone: true,
  template: `
    <div class="container">
      <h2>Departments</h2>
      <ul>
        <li>Computer Science Department</li>
        <li>Department of Economics</li>
        <li>Mechanical Engineering Department</li>
      </ul>
    </div>
  `,
  styles: [`
    .container { padding: 20px; }
  `]
})
export class DepartmentsComponent {}