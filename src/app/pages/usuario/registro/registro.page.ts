import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre: string = '';
  email: string = '';
  contra: string = '';
  confirmarContra: string = '';

  private static users: { nombre: string; email: string; contra: string }[] = [];

  constructor(private router: Router, private toastController: ToastController) {}

  ngOnInit() {
  }

  async registrarse() {
    // Verificar si hay campos vacios
    if (!this.nombre || !this.email || !this.contra || !this.confirmarContra) {
      this.mostrarToast('Todos los campos son obligatorios.', 'danger');
    } else if (this.contra !== this.confirmarContra) {
      this.mostrarToast('Las contraseñas no son iguales.', 'danger');
    } else if (RegistroPage.users.some(user => user.email === this.email)) {
      this.mostrarToast('El correo/email ya esta registrado.', 'danger');
    } else if (this.caracteresEspeciales()) {
      this.mostrarToast('El nombre o correo contienen caracteres especiales.', 'danger');
    } else {
      RegistroPage.users.push({ nombre: this.nombre, email: this.email, contra: this.contra });
      this.mostrarToast('¡Registrado exitosamente! Ahora puedes iniciar sesión', 'success');
      this.router.navigate(['/login']);
    }
  }

  private caracteresEspeciales(): boolean {
    const regex = /[!@#$%^&*(),.?":{}|<>]/;
    return regex.test(this.nombre) || regex.test(this.email);
  }

  private async mostrarToast(mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color: color
    });
    toast.present();
  }

  static getUsers() {
    return RegistroPage.users;
  }
}