import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestService } from './service/request';
import { EpisodeComponent } from './pages/episode/episode.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharacterComponent } from './pages/character/character.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { CardCharacterComponent } from './components/card-character/card-character.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterPageComponent,
    EpisodeComponent,
    NavbarComponent,
    CardCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
