import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  apiUrl = 'https://rickandmortyapi.com/api/';
  constructor(private http: HttpClient) { 
    this.http.get(this.apiUrl);
  }
  getinfo(){
    this.http.get(this.apiUrl).subscribe(data => {
      console.log(data);
    })
  }
}
