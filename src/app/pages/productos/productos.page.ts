import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

    productos = [
    {
      nombre: 'zapatilla basketball',
      precio: 200000,
      imagen: 'assets/img/zapatilla1.avif'
    },
    {
      nombre: 'zapatilla futbol',
      precio: 150000,
      imagen: 'assets/img/zapatilla2.jpeg'
    },
    {
      nombre: 'zapatilla voleyball',
      precio: 120000,
      imagen: 'assets/img/zapatilla3.webp'
    },
    {
      nombre: 'zapatilla running',
      precio: 35000,
      imagen: 'assets/img/zapatilla4.avif'
    }
  ];

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

  agregarAlCarrito() {
    //logica agregar pendiente
    this.mostrarToast('Producto agregado al carrito.', 'success');
  }

}
