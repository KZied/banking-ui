import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransactionComponent } from './new-transaction.component';

describe('NewTransactionComponent', () => {
  let component: NewTransactionComponent;
  let fixture: ComponentFixture<NewTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTransactionComponent]
    });
    fixture = TestBed.createComponent(NewTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
