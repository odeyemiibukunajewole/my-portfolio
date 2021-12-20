import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRoutes } from './routes'


@NgModule({
  imports: [RouterModule.forChild(UserRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
