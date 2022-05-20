import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceintroComponent } from './serviceintro.component';

describe('ServiceintroComponent', () => {
  let component: ServiceintroComponent;
  let fixture: ComponentFixture<ServiceintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceintroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
