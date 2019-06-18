import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private Http:HttpClient) {
      }
       getpeople(){
         this.Http.get("http://jsonplaceholder.typicode.com/users")
        return
        } 
}
