import { Injectable } from '@angular/core';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  rests: Restaurant[]=[
    {
      "id": "Mc",
      "name": "Mc Donald's",
      "category": "Hamburgers",
      "deliveryEstimate": "100 min",
      "rating": 3.5,
      "imagePath": "assets/img/restaurants/mcDonald.png"
    },
    {
      "id": "coffee",
      "name": "Coffee Corner",
      "category": "Coffee Shop",
      "deliveryEstimate": "30-40 min",
      "rating": 4.8,
      "imagePath": "assets/img/restaurants/coffe.png"
    },
    
    {
      "id": "ice",
      "name": "Ice Cream",
      "category": "Ice Creams",
      "deliveryEstimate": "40-65 min",
      "rating": 4.5,
      "imagePath": "assets/img/restaurants/iceCream.png"
    },
    {
      "id": "tasty",
      "name": "Tasty Treats",
      "category": "Doces",
      "deliveryEstimate": "20 min",
      "rating": 4.4,
      "imagePath": "assets/img/restaurants/tasty.png"
    },
    {
      "id": "suchy",
      "name": "Suchy R A O",
      "category": "Suchi",
      "deliveryEstimate": "50 min",
      "rating": 4.3,
      "imagePath": "assets/img/restaurants/suchi.png"
    },
    {
      "id": "Green",
      "name": "Green Food",
      "category": "Food Green",
      "deliveryEstimate": "25 min",
      "rating": 4.7,
      "imagePath": "assets/img/restaurants/green.png"
    }
  ]

  constructor() { }

  ApiFoodUrl = "http://localhost:8098/restaurants"

  restaurants():Restaurant[]{
    return this.rests
  }
  
}
