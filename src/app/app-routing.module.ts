import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {path: '',
   component: HomepageComponent},
   {path: 'characters',
   component: CharacterListComponent,
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
