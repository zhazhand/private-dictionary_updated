import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistryComponent } from './view/registry/registry.component';
import { LoginComponent } from './view/login/login.component';

const authRouts: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistryComponent}
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(authRouts)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }