import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.page.html',
  styleUrls: ['./agregar-productos.page.scss'],
})
export class AgregarProductosPage implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  precio: number | null = null;

  constructor(private toastController: ToastController) {}

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

  agregarProducto() {
    // Validar que no haya campos vacios
    if (!this.nombre || !this.descripcion || this.precio === null) {
      this.mostrarToast('Por favor, completa todos los campos.', 'danger');
    } else {
      this.mostrarToast('El producto ha sido agregado exitosamente.', 'success');
      //limpiar datos luego de agregar el producto
      this.nombre = '';
      this.descripcion = '';
      this.precio = null;
    }
  }
}