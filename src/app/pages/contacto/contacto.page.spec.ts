import { ComponentFixture, TestBed } from '@angular/core/testing';
import { contactoPage } from './contacto.page';

describe('contactoPage', () => {
  let component: contactoPage;
  let fixture: ComponentFixture<contactoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(contactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
