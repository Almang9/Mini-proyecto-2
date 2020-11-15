import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  id: string;
  constructor(
    private route: ActivatedRoute,
  ) { }
  
  ngOnInit(): void {this.getUrlParams();
  }
  getUrlParams(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('char.id');
    });
  }
  test(){
    console.log(this.id);
  }
}
