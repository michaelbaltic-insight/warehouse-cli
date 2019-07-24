import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestSearchComponent } from './manifest-search.component';

describe('ManifestSearchComponent', () => {
  let component: ManifestSearchComponent;
  let fixture: ComponentFixture<ManifestSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManifestSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
