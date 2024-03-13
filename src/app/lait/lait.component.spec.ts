import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaitComponent } from './lait.component';

describe('LaitComponent', () => {
  let component: LaitComponent;
  let fixture: ComponentFixture<LaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
