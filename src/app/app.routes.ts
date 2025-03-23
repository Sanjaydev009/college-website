import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AcademicsComponent } from './pages/academics/academics.component';
import { CoursesComponent } from './pages/academics/courses.component';
import { DepartmentsComponent } from './pages/academics/departments.component';
import { FacultyComponent } from './pages/academics/faculty.component';
import { AdmissionsComponent } from './pages/admissions/admissions.component';
import { NoticeboardComponent } from './components/noticeboard/noticeboard.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminLoginComponent } from './pages/admin/admin-login.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard.component';
import { MultimeadiaComponent } from './multimeadia/multimeadia.component';
import { NewsComponent } from './news/news.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'noticeboard', component: NoticeboardComponent },

  { path: 'about', component: AboutComponent },
  
  // Academics routes as separate components
  { path: 'academics', component: AcademicsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'faculty', component: FacultyComponent },

  { path: 'multimedia', component: MultimeadiaComponent },
  { path: 'admissions', component: AdmissionsComponent },

  { path: 'contact', component: ContactComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },

  { path: '**', redirectTo: '' }
];