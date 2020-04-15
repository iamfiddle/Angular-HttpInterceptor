import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentUsingIntercepterComponent } from './component-using-intercepter.component';

describe('ComponentUsingIntercepterComponent', () => {
  let component: ComponentUsingIntercepterComponent;
  let fixture: ComponentFixture<ComponentUsingIntercepterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentUsingIntercepterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentUsingIntercepterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
