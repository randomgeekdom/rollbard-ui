import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FateCoreCharacterComponent } from './fate-core-character.component';

describe('FateCoreCharacterComponent', () => {
  let component: FateCoreCharacterComponent;
  let fixture: ComponentFixture<FateCoreCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FateCoreCharacterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FateCoreCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
