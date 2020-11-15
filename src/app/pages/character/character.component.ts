import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiResponseC } from 'src/app/models/api-response-c';
import { Character } from 'src/app/models/character';
import { Info } from 'src/app/models/info';
import { ApiRequestService } from 'src/app/services/api-request.service';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  id: string;
  num: number;
  info: Info;
  personaje: Character;
  datos: Array<Character>;
  url: string = 'https://rickandmortyapi.com/api/character/';
  constructor(
    private route: ActivatedRoute,
    private api: ApiRequestService,
  ) { }
  
  ngOnInit(): void {this.getUrlParams();
    this.test();
  }
  getUrlParams(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('charid');
      console.log(this.id);
    });
  }
  test(){
    this.api.getinfo(this.url).subscribe((data) => {              
      this.info = data.info;
      this.datos = data.results;
     this.datos.forEach(element => {
       if(Number.parseInt(this.id) == element.id){
         this.personaje = element;
       }
     });
     if (!this.personaje) {
       this.url = data.info.next;
       this.test();
     };
     console.log(data.info);
     console.log(this.personaje);
    })    
    
  }

}
