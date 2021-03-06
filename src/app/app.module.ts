import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import {environment} from 'src/environments/environment';
import { from } from 'rxjs';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { CharacterTableComponent } from './components/character-table/character-table.component';
import { LoginComponent } from './pages/login/login.component';
import { CharacterComponent } from './pages/character/character.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { BotonesDePasarPagComponent } from './components/botones-de-pasar-pag/botones-de-pasar-pag.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavBarComponent,
    CharacterListComponent,
    CharacterTableComponent,
    LoginComponent,
    CharacterComponent,
    FavoritesComponent,
    BotonesDePasarPagComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
