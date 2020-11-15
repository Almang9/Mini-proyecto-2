import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiResources } from '../models/api-resources';
import { ApiResponseC } from '../models/api-response-c';
import { Character } from '../models/character';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterRequestService {
  info: Array<Character>;
//  apiRe: ApiRequestService =new ApiRequestService(this.http);
  characters: ApiResponseC;
  constructor(private http: HttpClient, private Tapi: ApiRequestService) {
  }
  getCharacters(): any{
  return this.Tapi.getinfo('https://rickandmortyapi.com/api/character/').subscribe();
  }
}
