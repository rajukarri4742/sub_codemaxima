import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphisamComponent } from './polymorphisam.component';

describe('PolymorphisamComponent', () => {
  let component: PolymorphisamComponent;
  let fixture: ComponentFixture<PolymorphisamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolymorphisamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolymorphisamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
