import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AppRoutes} from './routes'

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
