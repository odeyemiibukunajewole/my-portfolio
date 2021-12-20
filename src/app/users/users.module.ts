import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UsersRoutingModule } from './users-routing/users-routing.module';
import { MatCardModule } from '@angular/material/card';
import { UsersComponent } from './users.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    UsersComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatCardModule

  ]
})
export class UsersModule { }
