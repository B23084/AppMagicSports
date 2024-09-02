import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.page.html',
  styleUrls: ['./gestion-usuarios.page.scss'],
})
export class GestionUsuariosPage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  private async mostrarToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: color, 
    });

    await toast.present();
  }

  eliminarUsuario() {
    //logica eliminar pendiente
    this.mostrarToast('Usuario eliminado correctamente.', 'danger');
  }

}
