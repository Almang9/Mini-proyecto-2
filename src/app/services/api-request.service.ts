import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { ApiResponseC } from '../models/api-response-c';
import { from, Observable } from 'rxjs';
import { ApiResources } from '../models/api-resources';
@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  apiUrl = 'https://rickandmortyapi.com/api/character/';
  info: ApiResources;
  apiCharacters: string;
  constructor(private http: HttpClient) { 
  }
  getinfo(url: string): Observable<ApiResponseC>{
    return this.http.get<ApiResponseC>(url);
  }}
