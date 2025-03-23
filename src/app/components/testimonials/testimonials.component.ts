import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports:[NgFor],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials = [
    { name: "Ashwin Kumar", position: "Test Engineer, Boeing", review: "The C-RAP is an insightful and well-structured guide.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Boeing_full_logo.svg/200px-Boeing_full_logo.svg.png" },
    { name: "Sophia Lee", position: "Software Engineer, Google", review: "A great platform for learning and career insights.", image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Google_2020_logo.svg" },
    { name: "Michael Brown", position: "Senior Developer, Microsoft", review: "Exceptional resources and mentorship.", image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Emily Davis", position: "UI/UX Designer, Apple", review: "Fantastic career insights and structured resources.", image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "John Smith", position: "Data Scientist, Amazon", review: "The platform gave me access to excellent career-building resources.", image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" }
  ];
}