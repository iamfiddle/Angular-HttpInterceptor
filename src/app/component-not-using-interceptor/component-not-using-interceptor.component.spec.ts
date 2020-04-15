import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNotUsingInterceptorComponent } from './component-not-using-interceptor.component';

describe('ComponentNotUsingInterceptorComponent', () => {
  let component: ComponentNotUsingInterceptorComponent;
  let fixture: ComponentFixture<ComponentNotUsingInterceptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentNotUsingInterceptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentNotUsingInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
