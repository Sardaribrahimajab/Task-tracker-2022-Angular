import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoliaComponent } from './algolia.component';

describe('AlgoliaComponent', () => {
  let component: AlgoliaComponent;
  let fixture: ComponentFixture<AlgoliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoliaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
