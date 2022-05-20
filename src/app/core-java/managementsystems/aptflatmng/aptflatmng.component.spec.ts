import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptflatmngComponent } from './aptflatmng.component';

describe('AptflatmngComponent', () => {
  let component: AptflatmngComponent;
  let fixture: ComponentFixture<AptflatmngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AptflatmngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AptflatmngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
