import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { RegistroPage } from '../registro/registro.page'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Variables para almacenar los datos del inicio de sesión
  email: string = '';
  contra: string = '';

  // Variables predefinidas para el usuario admin
  adminEmail: string = 'admin1@gmail.com'; 
  adminContra: string = 'Admin1'; 

  constructor(private router: Router, private toastController: ToastController) {}

  ngOnInit() {
  }

  async iniciarSesion() {
    if (!this.email || !this.contra) {
      this.mostrarToast('Tiene campos vacíos.', 'danger');
      return; 
    }

    // Verifica si es el admin
    if (this.email === this.adminEmail && this.contra === this.adminContra) {
      console.log('El administrador ha iniciado sesión correctamente');
      this.mostrarToast('¡Bienvenido admin!', 'success');
      this.router.navigate(['/home']); 
      return; 
    }

    // Obtiene los usuarios de la pagina de registro
    const users = RegistroPage.getUsers();
    // Verifica si los datos coinciden
    const user = users.find(user => user.email === this.email && user.contra === this.contra);
    
    // Si son iguales, se inicia sesion y  lo redirige a la pagina de inicio
    if (user) {
      console.log('Has iniciado sesión correctamente', user);
      this.mostrarToast(`Bienvenido, ${user.email}! Iniciaste sesión correctamente.`, 'success');
      this.router.navigate(['/home']); 
    } else {
      // Sino, envia un mensaje corto para verificar nuevamente los datos ingresados
      this.mostrarToast('Error en el inicio de sesion. Vuelve a verificar tus datos o registrate.', 'danger');
    }
  }
      //Se declara la función que devolverá la promesa mostrarToast
  private async mostrarToast(mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color: color
    });
    toast.present();
  }
}