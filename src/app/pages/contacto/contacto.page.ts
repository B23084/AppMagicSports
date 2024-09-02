import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class contactoPage implements OnInit {
  formulario = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    comuna: '',
    descripcion: ''
  };

  constructor(private toastController: ToastController) {}

  ngOnInit() {
  }

  contactoForm() {
    // Verificar si hay campos vacios
    if (!this.formulario.nombre || !this.formulario.apellido || !this.formulario.email || !this.formulario.telefono || !this.formulario.comuna || !this.formulario.descripcion) {
      this.mostrarToast('Todos los campos son obligatorios.', 'danger');
    } else {
      this.mostrarToast('¡Formulario enviado!. Nuestro equipo se pondra en contacto contigo lo antes posible.', 'success');
      this.resetForm();
    }
  }

  private async mostrarToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      color: color, 
      duration: 2000,
    });

    await toast.present();
  }

  resetForm() {
    this.formulario = {
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      comuna: '',
      descripcion: ''
    };
  }


}