import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent2 } from './login2.component';

describe('Login2Component', () => {
  let component: LoginComponent2;
  let fixture: ComponentFixture<LoginComponent2>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent2]
    });
    fixture = TestBed.createComponent(LoginComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
