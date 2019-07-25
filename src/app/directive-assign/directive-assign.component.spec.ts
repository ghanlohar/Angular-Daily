import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveAssignComponent } from './directive-assign.component';

describe('DirectiveAssignComponent', () => {
  let component: DirectiveAssignComponent;
  let fixture: ComponentFixture<DirectiveAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
