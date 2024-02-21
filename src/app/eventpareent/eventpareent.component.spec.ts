import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventpareentComponent } from './eventpareent.component';

describe('EventpareentComponent', () => {
  let component: EventpareentComponent;
  let fixture: ComponentFixture<EventpareentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventpareentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventpareentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
