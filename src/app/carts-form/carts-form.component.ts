import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-carts-form',
  templateUrl: './carts-form.component.html',
  styleUrls: ['./carts-form.component.scss']
})
export class CartsFormComponent {
  constructor(private carservice:CartService){}
  addCart(titls:string,cardtexts:string,cardstexts:string,footertexts:string){
if(titls && cardtexts && cardstexts && footertexts && titls.trim() && cardtexts.trim() && cardstexts.trim() && footertexts.trim()){
this.carservice.addCarts({titls,cardtexts,cardstexts,footertexts});
}
else {
alert("none")
}
  }
  // titls.value,cardtexts.value,cardstexts.value,footertexts.value
}
