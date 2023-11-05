import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdminPageComponent } from './main-admin-page.component';

describe('MainAdminPageComponent', () => {
  let component: MainAdminPageComponent;
  let fixture: ComponentFixture<MainAdminPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainAdminPageComponent]
    });
    fixture = TestBed.createComponent(MainAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
