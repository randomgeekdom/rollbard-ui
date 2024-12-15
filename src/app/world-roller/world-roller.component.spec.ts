import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldRollerComponent } from './world-roller.component';

describe('WorldRollerComponent', () => {
  let component: WorldRollerComponent;
  let fixture: ComponentFixture<WorldRollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldRollerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorldRollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
