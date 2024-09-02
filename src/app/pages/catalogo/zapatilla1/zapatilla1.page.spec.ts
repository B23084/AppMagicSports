import { ComponentFixture, TestBed } from '@angular/core/testing';
import { zapatilla1Page } from './zapatilla1.page';

describe('zapatilla1Page', () => {
  let component: zapatilla1Page;
  let fixture: ComponentFixture<zapatilla1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(zapatilla1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
