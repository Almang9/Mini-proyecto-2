import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {CharacterTableComponent} from  'src/app/components/character-table/character-table.component';
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
