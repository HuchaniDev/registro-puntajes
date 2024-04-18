import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { ListParticipantesComponent } from './components/list-participantes/list-participantes.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'participantes',component:ListParticipantesComponent ,canActivate:[AuthGuard]},
  {path:'registro',component:RegistroComponent,canActivate:[AuthGuard]}
];


// , canActivate:[Authguard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
