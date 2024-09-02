import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjustesUsuarioPage } from './ajustes-usuario.page';

describe('AjustesUsuarioPage', () => {
  let component: AjustesUsuarioPage;
  let fixture: ComponentFixture<AjustesUsuarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustesUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
