import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  features = [
    { icon: '🌟', title: 'Quality Service', description: 'We provide top-notch services tailored for you.' },
    { icon: '⚡', title: 'Fast & Secure', description: 'Experience lightning-fast and secure operations.' },
    { icon: '📞', title: '24/7 Support', description: 'Our team is available anytime to assist you.' }
  ];
}