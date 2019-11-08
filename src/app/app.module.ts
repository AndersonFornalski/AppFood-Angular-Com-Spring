import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsService } from './serviços/restaurants.service';
import { CustomerComponent } from './customer/customer.component';
import { CompanyComponent } from './company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    CustomerComponent,
    CompanyComponent,    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [RestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
