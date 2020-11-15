import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnsignedGuard } from './guards/unsigned-guard';
import { UserGuard} from './guards/user-guard';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { CharacterComponent } from './pages/character/character.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: '',
   component: HomepageComponent},
   {path: 'characters',
   component: CharacterListComponent,
   },
   {path: 'profile/:userId',
  component: FavoritesComponent,
  canActivate: [UserGuard]},
  {path: 'login',
  component: LoginComponent,
  canActivate: [UnsignedGuard],
  },
  {pathMatch: 'prefix',
  path: 'characters/char/:charid',
  component: CharacterComponent,
  },
  {path: 'character/char/2',
  component: CharacterComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
