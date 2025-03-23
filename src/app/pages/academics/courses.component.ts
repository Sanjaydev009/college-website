import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: true,
  template: `
    <div class="container">
      <h2>Courses Offered</h2>
      <ul>
        <li>Bachelor of Science in Computer Science</li>
        <li>Bachelor of Arts in Economics</li>
        <li>Bachelor of Engineering in Mechanical Engineering</li>
      </ul>
    </div>
  `,
  styles: [`
    .container { padding: 20px; }

  `]
})
export class CoursesComponent {}