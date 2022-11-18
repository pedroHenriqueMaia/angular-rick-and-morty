import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { CharacterComponent } from './pages/character/character.component';
import { EpisodeComponent } from './pages/episode/episode.component';

const routes: Routes = [
  {
  path: "",
  component: CharacterComponent
  },
  {
    path: "character/:id",
    component: CharacterPageComponent
  },
  {
    path: "episode/:id",
    component: EpisodeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
