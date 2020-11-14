import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from 'src/app/services/api-request.service';
@Component({
  selector: 'character-table',
  templateUrl: './character-table.component.html',
  styleUrls: ['./character-table.component.scss']
})
export class CharacterTableComponent implements OnInit {

  constructor(public apiRequestService: ApiRequestService ) { }

  ngOnInit(): void {
    this.apiRequestService.getinfo();
  }

}
