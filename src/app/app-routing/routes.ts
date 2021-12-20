import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component'
import{ContactUsComponent} from '../contact-us/contact-us.component'
import { AboutUsComponent } from '../about-us/about-us.component';

export const AppRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'user', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  // { path: '**', component:errorComponent  }


]
