import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'#',redirectTo:'/home',pathMatch:'full'},
  {path:'orders',component:OrdersComponent},
  {path:'themes',component:ThemesComponent},
  {path:'reviews',component:ReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
