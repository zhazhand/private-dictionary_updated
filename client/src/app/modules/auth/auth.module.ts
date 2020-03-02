import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './view/login/login.component';
import { RegistryComponent } from './view/registry/registry.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, RegistryComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
