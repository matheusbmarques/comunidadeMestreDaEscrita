import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubtsPageComponent } from './doubts-page.component';

describe('DoubtsPageComponent', () => {
  let component: DoubtsPageComponent;
  let fixture: ComponentFixture<DoubtsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubtsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubtsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
