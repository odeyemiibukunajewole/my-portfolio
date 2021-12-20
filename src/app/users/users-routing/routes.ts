import { Routes } from '@angular/router';
import { UsersComponent } from '../users.component';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

export const UserRoutes: Routes = [
  {
    path: 'user',
    component: UsersComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignUpComponent }
    ]
  },
]
