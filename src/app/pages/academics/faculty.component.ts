import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty',
  standalone: true,
  template: `
    <div class="container">
      <h2>Faculty</h2>
      <p>Meet our distinguished faculty members who drive excellence in education and research.</p>
      <!-- List faculty details here -->
    </div>
  `,
  styles: [`
    .container { padding: 20px; }
  `]
})
export class FacultyComponent {}