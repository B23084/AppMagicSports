import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/usuario/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/usuario/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.contactoPageModule)
  },
  {
    path: 'zapatilla1',
    loadChildren: () => import('./pages/catalogo/zapatilla1/zapatilla1.module').then( m => m.zapatilla1PageModule)
  },
  {
    path: 'zapatilla2',
    loadChildren: () => import('./pages/catalogo/zapatilla2/zapatilla2.module').then( m => m.zapatilla2PageModule)
  },
  {
    path: 'zapatilla3',
    loadChildren: () => import('./pages/catalogo/zapatilla3/zapatilla3.module').then( m => m.zapatilla3PageModule)
  },
  {
    path: 'zapatilla4',
    loadChildren: () => import('./pages/catalogo/zapatilla4/zapatilla4.module').then( m => m.zapatilla4PageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'gestion-productos',
    loadChildren: () => import('./admin/gestion-productos/gestion-productos.module').then( m => m.GestionProductosPageModule)
  },
  {
    path: 'agregar-productos',
    loadChildren: () => import('./admin/agregar-productos/agregar-productos.module').then( m => m.AgregarProductosPageModule)
  },
  {
    path: 'gestion-usuarios',
    loadChildren: () => import('./admin/gestion-usuarios/gestion-usuarios.module').then( m => m.GestionUsuariosPageModule)
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./pages/usuario/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },
  {
    path: 'ajustes-usuario',
    loadChildren: () => import('./pages/usuario/ajustes-usuario/ajustes-usuario.module').then( m => m.AjustesUsuarioPageModule)
  },
  {
    path: 'ayuda-usuario',
    loadChildren: () => import('./pages/usuario/ayuda-usuario/ayuda-usuario.module').then( m => m.AyudaUsuarioPageModule)
  },
  {
    path: 'verificar-correo',
    loadChildren: () => import('./pages/usuario/verificar-correo/verificar-correo.module').then( m => m.VerificarCorreoPageModule)
  },
  {
    path: 'recuperar-contra',
    loadChildren: () => import('./pages/usuario/recuperar-contra/recuperar-contra.module').then( m => m.RecuperarContraPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
