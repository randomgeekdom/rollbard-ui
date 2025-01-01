import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VigilantCityComponent } from './vigilant-city.component';

describe('VigilantCityComponent', () => {
  let component: VigilantCityComponent;
  let fixture: ComponentFixture<VigilantCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VigilantCityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VigilantCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
