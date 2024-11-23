import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FateCoreComponent } from './fate-core.component';

describe('FateCoreComponent', () => {
  let component: FateCoreComponent;
  let fixture: ComponentFixture<FateCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FateCoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FateCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
