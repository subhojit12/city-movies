import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookingComponent } from './booking/booking.component';
import { MoviesComponent } from './movies/movies.component';
import { OffersComponent } from './offers/offers.component';
import { PaymentComponent } from './payment/payment.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { PaymentDoneComponent} from './payment-done/payment-done.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-screen',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register-user',
    component:RegisterComponent
  },
  {
    path:'booking/:id',
    component:BookingComponent
  },
  {
    path:'movies',
    component:MoviesComponent
  },
  {
    path:'offers',
    component:OffersComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {
    path:'reset-password',
    component:ResetPasswordComponent
  },
  {
    path:'home-screen',
    component:HomescreenComponent
  },
  {
    path:'payment-done',
    component:PaymentDoneComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
