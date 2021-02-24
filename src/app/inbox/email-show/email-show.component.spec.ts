import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmailShowComponent } from './email-show.component';

describe('EmailShowComponent', () => {
  let component: EmailShowComponent;
  let fixture: ComponentFixture<EmailShowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
