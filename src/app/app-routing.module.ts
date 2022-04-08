import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPageComponent } from './character-page/character-page.component';
import { CharacterComponent } from './character/character.component';

const routes: Routes = [
  {
  path: "character",
  component: CharacterComponent
  },
  {
    path: "character/:id",
    component: CharacterPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
