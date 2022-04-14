import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSheetComponent } from './skill-sheet.component';

describe('SkillSheetComponent', () => {
  let component: SkillSheetComponent;
  let fixture: ComponentFixture<SkillSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
