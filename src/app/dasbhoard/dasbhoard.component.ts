import { Component, OnInit } from '@angular/core';
import { Notif } from '../notifications/notif';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-dasbhoard',
  templateUrl: './dasbhoard.component.html',
  styleUrls: ['./dasbhoard.component.scss']
})
export class DasbhoardComponent implements OnInit{
  cartes:Notif[]=[];
constructor(private cartservice:CartService){

}
  ngOnInit(): void {
   this.cartes=this.cartservice.carts
  }
}
