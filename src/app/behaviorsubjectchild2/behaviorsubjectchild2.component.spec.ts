import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behaviorsubjectchild2Component } from './behaviorsubjectchild2.component';

describe('Behaviorsubjectchild2Component', () => {
  let component: Behaviorsubjectchild2Component;
  let fixture: ComponentFixture<Behaviorsubjectchild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Behaviorsubjectchild2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Behaviorsubjectchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
