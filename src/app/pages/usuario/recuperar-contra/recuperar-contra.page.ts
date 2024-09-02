import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { RegistroPage } from '../registro/registro.page';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {
  nuevaContra: string = '';
  confirmarContra: string = '';
  email: string = '';

  constructor(private router: Router, private toastController: ToastController, private route: ActivatedRoute) {
    // Obtener el correo electronico 
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
    });
  }

  ngOnInit() {
  }

  async enviar() {
    // Verificar si hay campos vacios
    if (!this.nuevaContra || !this.confirmarContra) {
      this.mostrarToast('Todos los campos son obligatorios.', 'danger');
      return;
    }

    // Verificar si las contraseñas coinciden
    if (this.nuevaContra !== this.confirmarContra) {
      this.mostrarToast('Las contraseñas no son iguales.', 'danger');
      return;
    }

    // Obtener la lista de usuarios
    const users = RegistroPage.getUsers();
    const user = users.find(user => user.email === this.email); // Buscar al usuario por correo electrónico

    if (user) {
      user.contra = this.nuevaContra; // Cambiar la contraseña
      this.mostrarToast('Contraseña cambiada correctamente.', 'success');
      this.router.navigate(['/login']);
    } else {
      this.mostrarToast('Error al cambiar la contraseña. Usuario no encontrado.', 'danger');
    }
  }

  async mostrarToast(mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color: color
    });
    toast.present();
  }
}