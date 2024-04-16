import { Component, OnInit } from '@angular/core';
import { DollarService } from '../dollar.service';

@Component({
  selector: 'app-dollar',
  templateUrl: './dollar.component.html',
  styleUrls: ['./dollar.component.scss']
})
export class DollarComponent implements OnInit {
usdToUZSRate!:number;
uzdAmount!:number;
usdAmount!:number;
constructor( private currency:DollarService){}
  ngOnInit(): void {
   this.currency.getExchangeRate().then(rate =>{
    this.usdToUZSRate=rate;
   })
  }


  convert():void{
this.uzdAmount=this.usdAmount * this.usdToUZSRate
  }

}
