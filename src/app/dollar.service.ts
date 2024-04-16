import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DollarService {

  constructor(private http:HttpClient) { }
  private apiKey='';
  apiUrl="https://openexchangerates.org/api/latest.json";
  private baseCurrency='USD';
  private targetCurrency='USZ';
  getExchangeRate():Promise<number>{
const url=`${this.apiUrl}?app_id=${this.apiKey}&base=${this.baseCurrency}`;

return this.http.get(url).toPromise().then((data:any)=>{
return data.rates[this.targetCurrency]
})
.catch(error =>{
console.log("Error",error);
return null;
})
  }
}
