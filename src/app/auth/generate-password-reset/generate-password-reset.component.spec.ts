import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePasswordResetComponent } from './generate-password-reset.component';

describe('GeneratePasswordResetComponent', () => {
  let component: GeneratePasswordResetComponent;
  let fixture: ComponentFixture<GeneratePasswordResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratePasswordResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratePasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
