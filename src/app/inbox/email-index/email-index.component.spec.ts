import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmailIndexComponent } from './email-index.component';

describe('EmailIndexComponent', () => {
  let component: EmailIndexComponent;
  let fixture: ComponentFixture<EmailIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
