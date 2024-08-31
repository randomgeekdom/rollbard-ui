import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZumaroethComponent } from './zumaroeth.component';

describe('ZumaroethComponent', () => {
  let component: ZumaroethComponent;
  let fixture: ComponentFixture<ZumaroethComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZumaroethComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZumaroethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
