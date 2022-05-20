import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultdataComponent } from './defaultdata.component';

describe('DefaultdataComponent', () => {
  let component: DefaultdataComponent;
  let fixture: ComponentFixture<DefaultdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
