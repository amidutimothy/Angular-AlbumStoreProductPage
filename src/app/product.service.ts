import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { rxjs } from 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _albumUrl ="../assets/album.json";
  constructor(private _http: Http) { 
   
  }
getAlbum(id:number){
  this._http.get(this._albumUrl).subscribe(response=>{
    return response.json();
  })
}
}
