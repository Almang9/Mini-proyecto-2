import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor( private auth: AuthServiceService ) { }

  ngOnInit(): void {
  }
  logOut(){
    this.auth.logOut()
  }
  esAutenticado(){
    this.auth.esAuthenticado();
  }
}
