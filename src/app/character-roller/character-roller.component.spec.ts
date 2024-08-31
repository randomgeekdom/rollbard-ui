import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterRollerComponent } from './character-roller.component';

describe('CharacterRollerComponent', () => {
  let component: CharacterRollerComponent;
  let fixture: ComponentFixture<CharacterRollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterRollerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterRollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
