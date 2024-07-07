import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerraMachinaComponent } from './terra-machina.component';

describe('TerraMachinaComponent', () => {
  let component: TerraMachinaComponent;
  let fixture: ComponentFixture<TerraMachinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerraMachinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerraMachinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
