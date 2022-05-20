import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingsparagraphComponent } from './headingsparagraph.component';

describe('HeadingsparagraphComponent', () => {
  let component: HeadingsparagraphComponent;
  let fixture: ComponentFixture<HeadingsparagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingsparagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingsparagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
