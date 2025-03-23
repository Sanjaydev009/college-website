import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports:[NgFor],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  stats = [
    {
      percentage: "100%",
      description: "3-MONTHS INTERNSHIP STIPEND FROM FIRST YEAR",
      image: "assets/stats/internship.jpg"
    },
    {
      percentage: "100%",
      description: "COURSE PROJECTS",
      image: "assets/stats/projects.jpg"
    },
    {
      percentage: "60%",
      description: "Ph.D FACULTY",
      image: "assets/stats/faculty.jpg"
    }
  ];
}