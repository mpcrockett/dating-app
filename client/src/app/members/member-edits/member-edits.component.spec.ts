import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEditsComponent } from './member-edits.component';

describe('MemberEditsComponent', () => {
  let component: MemberEditsComponent;
  let fixture: ComponentFixture<MemberEditsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberEditsComponent]
    });
    fixture = TestBed.createComponent(MemberEditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
