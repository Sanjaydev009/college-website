import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-testimonials',
  imports:[NgFor],
  templateUrl: './student-testimonials.component.html',
  styleUrls: ['./student-testimonials.component.css']
})
export class StudentTestimonialsComponent {
  studentTestimonials = [
    {
      image: 'assets/students/badri.png',
      name: 'A.V Badrinath Reddy',
      course: 'LLB - Criminal Law',
      review: 'The campus life is vibrant, and the placement support is excellent!'
    },
    {
      image: 'assets/students/teju.png',
      name: 'Kambhampati Tejaswi',
      course: 'B.Tech- Computer Science Engineering',
      review: 'The campus life is vibrant, and the placement support is excellent!'
    },
    {
      image: 'assets/students/sandeep.png',
      name: 'Arramshetti Sandeep',
      course: 'MCA - Software Engineering',
      review: 'The hands-on approach to learning really helped me improve my skills.'
    },
    {
      image: 'assets/students/priya.png',
      name: 'D Priyanka Reddy',
      course: 'MBA - Business Analytics',
      review: 'Best decision of my life! The curriculum is well-structured and practical.'
    },
    {
      image: 'assets/students/sanju.png',
      name: 'Bandi Sanjay',
      course: 'Master of Computer Applications',
      review: 'The faculty here is amazing, and the environment is truly inspiring!'
    },
    {
      image: 'assets/students/vamshi.png',
      name: 'Chunchu Vamshi',
      course: 'Master of Computer Applications',
      review: 'The campus life is vibrant, and the placement support is excellent!'
    },
    {
      image: 'assets/students/hari.png',
      name: 'Chitikeshi Harichandhana',
      course: 'B.Tech - Electronics and Communication Engineering',
      review: 'The campus life is vibrant, and the placement support is excellent!'
    },
    {
      image: 'assets/students/shiva.png',
      name: 'Chigurumamidi Shivaraj',
      course: 'MCA - Master of Computer Applications',
      review: 'mdlo clg  we had a lot of fun in our clg and as well minglu also for the fees'
    },
    {
      image: 'assets/students/kalyan.png',
      name: 'Kola Kalyan',
      course: 'MCA - Master of Computer Applications',
      review: 'The campus life is vibrant, and the placement support is excellent!'
    },
  ];
}