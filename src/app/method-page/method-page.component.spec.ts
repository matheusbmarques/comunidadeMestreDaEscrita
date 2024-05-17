import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodPageComponent } from './method-page.component';

describe('MethodPageComponent', () => {
  let component: MethodPageComponent;
  let fixture: ComponentFixture<MethodPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MethodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
