import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorsubjectchildComponent } from './behaviorsubjectchild.component';

describe('BehaviorsubjectchildComponent', () => {
  let component: BehaviorsubjectchildComponent;
  let fixture: ComponentFixture<BehaviorsubjectchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorsubjectchildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviorsubjectchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
