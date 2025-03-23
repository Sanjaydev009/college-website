import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [ReactiveFormsModule, NgIf, CommonModule],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  years: number = 35;
  institutions: number = 30;
  alumni: number = 160000;
  isExpanded: boolean = false;

  toggleExploreMore() {
    this.isExpanded = !this.isExpanded;
  }
}
