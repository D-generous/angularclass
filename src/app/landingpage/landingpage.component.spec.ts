import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageComponent } from './landingpage.component';
import { CommonModule } from '@angular/common';

describe('LandingpageComponent', () => {
  let component: LandingpageComponent;
  let fixture: ComponentFixture<LandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingpageComponent, CommonModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
