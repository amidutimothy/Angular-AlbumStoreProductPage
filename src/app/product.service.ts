import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';

@Injectable()
export class ProductService {

  // let _albumUrl:string = "../assets/album.json";
  constructor(private _http: Http) { 
    let _albumUrl:string = "../assets/album.json"
  }

}
