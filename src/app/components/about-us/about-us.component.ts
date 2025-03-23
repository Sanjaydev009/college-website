import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  imports:[CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements AfterViewInit {
  years = 0;
  institutions = 0;
  alumni = 0;
  isExpanded: boolean = false;

  toggleExploreMore() {
    this.isExpanded = !this.isExpanded;
  }

  ngAfterViewInit() {
    this.animateCounter(0, 35, 2000, (val) => (this.years = val));
    this.animateCounter(0, 30, 2000, (val) => (this.institutions = val));
    this.animateCounter(0, 160000, 2000, (val) => (this.alumni = val));
  }
  

  animateCounter(start: number, end: number, duration: number, callback: (val: number) => void) {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      callback(value);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }
  
}

