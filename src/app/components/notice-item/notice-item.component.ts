import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notice } from '../noticeboard/noticeboard.component';

@Component({
  selector: 'app-notice-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notice-item.component.html',
  styleUrls: ['./notice-item.component.css']
})
export class NoticeItemComponent {
  @Input() notice!: Notice;
}