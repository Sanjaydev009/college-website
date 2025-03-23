import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  imports:[NgFor],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = [
    {
      title: 'Full Stack Web Development',
      description: 'Learn MERN & MEAN stack development from scratch.',
      image: 'assets/images/web-development.jpg',
      price: '$299'
    },
    {
      title: 'Data Science & Machine Learning',
      description: 'Master Python, AI, and ML with hands-on projects.',
      image: 'assets/images/data-science.jpg',
      price: '$349'
    },
    {
      title: 'Android App Development',
      description: 'Build native Android apps with Kotlin and Jetpack.',
      image: 'assets/images/android-development.jpg',
      price: '$249'
    },
    {
      title: 'Cybersecurity & Ethical Hacking',
      description: 'Learn penetration testing and cybersecurity fundamentals.',
      image: 'assets/images/cybersecurity.jpg',
      price: '$399'
    },
    {
      title: 'UI/UX Design',
      description: 'Master Figma, Adobe XD, and user experience strategies.',
      image: 'assets/images/ui-ux.jpg',
      price: '$199'
    }
  ];
}