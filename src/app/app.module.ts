import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { RankingComponent } from './components/ranking/ranking.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'autoclicker', component:GameComponent},
  {path: 'ranking', component:RankingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
