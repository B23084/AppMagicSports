// Componente de Recuperación de Contraseña
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { RegistroPage } from '../registro/registro.page';

@Component({
  selector: 'app-verificar-correo',
  templateUrl: './verificar-correo.page.html',
  styleUrls: ['./verificar-correo.page.scss'],
})
export class VerificarCorreoPage implements OnInit {
  email: string = '';

  constructor(private router: Router, private toastController: ToastController) {}

  ngOnInit() {
  }

  async enviarCorreo() {
    if (!this.email) {
      this.mostrarToast('Ingresa tu correo.', 'danger');
      return;
    }

    const users = RegistroPage.getUsers();
    const user = users.find(user => user.email === this.email);

    if (user) {
      this.mostrarToast('Correo verificado, puedes cambiar tu contraseña.', 'success');

      // Redirigir a la pagina de cambiar contraseña y pasar el correo electronico
      this.router.navigate(['/recuperar-contra'], { queryParams: { email: this.email } });
    } else {
      this.mostrarToast('El correo electronico no esta registrado.', 'danger');
    }
  }

  private async mostrarToast(mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color: color
    });
    toast.present();
  }
}