import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

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

  eliminarProducto() {
      //logica eliminar pendiente
      this.mostrarToast('Producto eliminado.', 'danger');
    }
    
  vaciarCarrito() {
      //logica eliminar pendiente
    this.mostrarToast('Carrito vaciado correctamente.', 'danger');
  }


}
