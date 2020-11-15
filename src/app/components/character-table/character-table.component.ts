import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { send } from 'process';
import { Observable } from 'rxjs';
import { ApiResources } from 'src/app/models/api-resources';
import { ApiResponseC } from 'src/app/models/api-response-c';
import { Character } from 'src/app/models/character';
import { Info } from 'src/app/models/info';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CharacterComponent } from 'src/app/pages/character/character.component';
import { ApiRequestService } from 'src/app/services/api-request.service';
import { CharacterRequestService } from 'src/app/services/character-request.service';
@Component({
  selector: 'character-table',
  templateUrl: './character-table.component.html',
  styleUrls: ['./character-table.component.scss']
})
export class CharacterTableComponent implements OnInit {
  characters: Array<Character> = [];
  info: Info;
  id: number;
  url: string = 'https://rickandmortyapi.com/api/character/';
  some: ApiResponseC;
  constructor( public data: ApiRequestService, http: HttpClient, public auth: AuthServiceService){
    data: new ApiRequestService(http);
   }
  ngOnInit(): void {
    this.data.getinfo(this.url).subscribe(char => {console.log(char.results); 
    this.characters =char.results;
    console.log(this.characters);
    this.info = char.info;
    });
    }
  getcharacters(page: number): void{
  }
  loadNext():void{
    this.url = this.info.next;
    this.data.getinfo(this.url).subscribe(char => {console.log(char.results); 
      this.characters =char.results;
      console.log(this.characters);
      this.info = char.info;
      })
  }
  loadPrev(): void{
    this.url = this.info.prev;
    this.data.getinfo(this.url).subscribe(char => {console.log(char.results); 
      this.characters =char.results;
      console.log(this.characters);
      this.info = char.info;
      })

  }
  charDetails(id: number){
    console.log(id);
    console.log(this.esAutenticado())
  }
  esAutenticado(): boolean{
    return this.auth.esAuthenticado()
  }
}