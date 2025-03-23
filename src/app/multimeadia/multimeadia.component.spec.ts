import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimeadiaComponent } from './multimeadia.component';

describe('MultimeadiaComponent', () => {
  let component: MultimeadiaComponent;
  let fixture: ComponentFixture<MultimeadiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultimeadiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultimeadiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
