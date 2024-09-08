import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'login',component: LoginComponent },
  {path: 'menu', component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
