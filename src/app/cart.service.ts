import { Injectable } from '@angular/core';
import { Notif } from './notifications/notif';

@Injectable({
  providedIn: 'root'
})
export class CartService {
carts:Notif[] =[
  {
    titls: 'Dog Breed',
    cardtexts: 'Dog Breed',
    cardstexts: 'This card has divider and indeterminate progress as footer',
    footertexts: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting." 
  },
  {
    titls: 'Dog Breed',
    cardtexts: 'Dog Breed',
    cardstexts: 'This card has divider and indeterminate progress as footer',
    footertexts: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting." 
  }
]
addCarts(addcart:Notif){
  this.carts.push(addcart);
  
}

  constructor() { }
}
