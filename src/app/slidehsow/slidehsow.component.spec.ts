import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidehsowComponent } from './slidehsow.component';

describe('SlidehsowComponent', () => {
  let component: SlidehsowComponent;
  let fixture: ComponentFixture<SlidehsowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidehsowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidehsowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
