import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotRollerComponent } from './plot-roller.component';

describe('PlotRollerComponent', () => {
  let component: PlotRollerComponent;
  let fixture: ComponentFixture<PlotRollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlotRollerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlotRollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
