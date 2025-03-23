import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTestimonialsComponent } from './student-testimonials.component';

describe('StudentTestimonialsComponent', () => {
  let component: StudentTestimonialsComponent;
  let fixture: ComponentFixture<StudentTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentTestimonialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
