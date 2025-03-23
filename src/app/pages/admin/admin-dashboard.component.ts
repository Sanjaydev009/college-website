import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Notice {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  notices: Notice[] = [];
  noticeForm = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  });

  editing: boolean = false;
  editingId: number | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('isAdmin') !== 'true') {
      this.router.navigate(['/admin/login']);
    }
    const stored = localStorage.getItem('notices');
    if (stored) {
      this.notices = JSON.parse(stored);
    } else {
      this.notices = [
        { id: 1, title: 'Exam Schedule', content: 'Exam schedule will be released soon.' },
        { id: 2, title: 'Holiday Notice', content: 'College will be closed on Friday.' }
      ];
      localStorage.setItem('notices', JSON.stringify(this.notices));
    }
  }

  saveNotices() {
    localStorage.setItem('notices', JSON.stringify(this.notices));
  }

  onSubmit() {
    if (this.noticeForm.valid) {
      // Use non-null assertion operator (!) to ensure the form values are strings.
      const title = this.noticeForm.value.title!;
      const content = this.noticeForm.value.content!;
      
      if (this.editing && this.editingId !== null) {
        this.notices = this.notices.map(notice => {
          if (notice.id === this.editingId) {
            return { ...notice, title, content };
          }
          return notice;
        });
        this.editing = false;
        this.editingId = null;
      } else {
        const newNotice: Notice = {
          id: this.notices.length ? Math.max(...this.notices.map(n => n.id)) + 1 : 1,
          title,
          content
        };
        this.notices.push(newNotice);
      }
      this.noticeForm.reset();
      this.saveNotices();
    }
  }

  onEdit(notice: Notice) {
    this.editing = true;
    this.editingId = notice.id;
    this.noticeForm.patchValue({ title: notice.title, content: notice.content });
  }

  onDelete(id: number) {
    this.notices = this.notices.filter(n => n.id !== id);
    this.saveNotices();
  }

  logout() {
    localStorage.removeItem('isAdmin');
    this.router.navigate(['/admin/login']);
  }
}