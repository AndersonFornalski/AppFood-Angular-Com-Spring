import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { CompanyComponent } from './company/company.component';
import { CustomerComponent } from './customer/customer.component';


const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"restaurants", component: RestaurantsComponent},

  {path:"company", component: CompanyComponent},
  {path:"custumer", component: CustomerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
