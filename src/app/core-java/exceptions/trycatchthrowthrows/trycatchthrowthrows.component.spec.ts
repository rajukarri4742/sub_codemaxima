import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrycatchthrowthrowsComponent } from './trycatchthrowthrows.component';

describe('TrycatchthrowthrowsComponent', () => {
  let component: TrycatchthrowthrowsComponent;
  let fixture: ComponentFixture<TrycatchthrowthrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrycatchthrowthrowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrycatchthrowthrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
