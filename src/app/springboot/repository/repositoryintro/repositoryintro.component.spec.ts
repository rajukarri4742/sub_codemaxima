import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryintroComponent } from './repositoryintro.component';

describe('RepositoryintroComponent', () => {
  let component: RepositoryintroComponent;
  let fixture: ComponentFixture<RepositoryintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryintroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
