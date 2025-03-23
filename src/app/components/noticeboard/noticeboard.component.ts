import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeItemComponent } from '../notice-item/notice-item.component';

export interface Notice {
  title: string;
  category: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-noticeboard',
  standalone: true,
  imports: [CommonModule, NoticeItemComponent],
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.css']
})
export class NoticeboardComponent implements OnInit {
  categories = [
    { name: 'All', key: 'all' },
    { name: 'Examinations', key: 'examinations' },
    { name: 'Events', key: 'events' },
    { name: 'Results', key: 'results' },
    { name: 'Sports', key: 'sports' }
  ];

  notices: Notice[] = [];
  filteredNotices: Notice[] = [];
  selectedCategory = 'all';
  scrollIndex = 0;

  
  ngOnInit() {
    console.log("🟢 Initializing Noticeboard...");
    this.loadNotices();
    
    setInterval(() => {
      console.log("🔄 Refreshing notices...");
      this.loadNotices();
    }, 5000);

    setInterval(() => {
      console.log("▶ Auto-scrolling...");
      this.autoScrollNotices();
    }, 3000);
  }

  loadNotices() {
    console.log("📥 Loading notices from localStorage...");
    const storedNotices = localStorage.getItem('notices');

    if (storedNotices) {
      try {
        this.notices = JSON.parse(storedNotices);
        console.log("✅ Notices loaded from localStorage:", this.notices);
      } catch (error) {
        console.error("❌ Error parsing notices from localStorage:", error);
        this.notices = this.getDefaultNotices();
      }
    } else {
      console.log("📌 No notices found in localStorage. Using defaults...");
      this.notices = this.getDefaultNotices();
    }

    this.filterNotices(this.selectedCategory);
    console.log("📌 Filtered Notices:", this.filteredNotices);
  }

  getDefaultNotices(): Notice[] {
    return [
      { title: '📜 Exam Schedule Released', category: 'examinations', date: 'Feb 20, 2025', description: 'Check the latest semester exam schedule.' },
      { title: '🎭 Cultural Fest 2025', category: 'events', date: 'March 10, 2025', description: 'Join us for a fun-filled cultural fest.' },
      { title: '📢 Mid-Term Results Published', category: 'results', date: 'Feb 18, 2025', description: 'Mid-term exam results are now available.' },
      { title: '⚽ Sports Meet 2025', category: 'sports', date: 'April 5, 2025', description: 'Annual sports meet - register now!' },
      { title: '🔬 Lab Exams Notice', category: 'examinations', date: 'Feb 25, 2025', description: 'Lab exams will start from next week.' },
      { title: '🏆 Final Results Announced', category: 'results', date: 'May 10, 2025', description: 'Final semester results are published.' }
    ];
  }

  filterNotices(category: string) {
    console.log(`📌 Filtering by category: ${category}`);
    this.selectedCategory = category;
    this.filteredNotices = category === 'all' ? this.notices : this.notices.filter(n => n.category === category);
    console.log("🔍 Filtered Notices After Update:", this.filteredNotices);
    
    this.scrollIndex = Math.min(this.scrollIndex, this.filteredNotices.length - 1);
  }

  autoScrollNotices() {
    if (this.filteredNotices.length > 0) {
      this.scrollIndex = (this.scrollIndex + 1) % this.filteredNotices.length;
      console.log("🔄 Auto-scroll index:", this.scrollIndex);
    }
  }
}