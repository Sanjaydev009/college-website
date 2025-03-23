import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports:[NgFor],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent {
  features = [
    { icon: '⏳', title: 'Quarter System Calendar' },
    { icon: '🎓', title: 'Class Size 30' },
    { icon: '🛠️', title: 'Multi-Layer Integrated Program Framework' },
    { icon: '📖', title: 'Reflective Teaching Learning' },
    { icon: '📝', title: 'Continuous Assessment' },
    { icon: '💻', title: 'Student Laptops' }
  ];
}