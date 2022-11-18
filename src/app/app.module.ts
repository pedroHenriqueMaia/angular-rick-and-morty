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

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterPageComponent,
    EpisodeComponent,
    NavbarComponent
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
