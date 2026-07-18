import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeclanAbout } from './teclan-about';

describe('TeclanAbout', () => {
  let component: TeclanAbout;
  let fixture: ComponentFixture<TeclanAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeclanAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(TeclanAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
