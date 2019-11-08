import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from '../serviços/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
 
  restaurants: Restaurant[]

  constructor(private restaurantService: RestaurantsService) { }

  ngOnInit() {
    this.restaurants = this.restaurantService.restaurants()
      
      
  }

}
