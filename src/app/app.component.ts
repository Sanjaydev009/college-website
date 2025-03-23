
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MultimeadiaComponent } from './multimeadia/multimeadia.component';
import { NoticeboardComponent } from './components/noticeboard/noticeboard.component';
import { NewsComponent } from './news/news.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { StudentTestimonialsComponent } from './components/student-testimonials/student-testimonials.component';
import { StatsComponent } from './components/stats/stats.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FeaturesComponent } from './components/features/features.component';
import { NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgIf,RouterOutlet, HeaderComponent, FooterComponent,MultimeadiaComponent, 
    NoticeboardComponent,NewsComponent,TestimonialsComponent, 
    StudentTestimonialsComponent, StatsComponent, AboutUsComponent, FeaturesComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isHomePage = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.url === '/' || event.url === '/home';
      }
    });
  }
}