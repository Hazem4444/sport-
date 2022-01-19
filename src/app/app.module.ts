import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwPaginationModule } from 'jw-angular-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminMatchesComponent } from './components/admin-matches/admin-matches.component';
import { AdminPlayersComponent } from './components/admin-players/admin-players.component';
import { AddPlayersComponent } from './components/add-players/add-players.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { BannerComponent } from './components/banner/banner.component';
import { TeamsVsComponent } from './components/teams-vs/teams-vs.component';
import { NewsComponent } from './components/news/news.component';
import { MatchTeamComponent } from './components/match-team/match-team.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { MatchesComponent } from './components/matches/matches.component';
import { Banner2Component } from './components/banner2/banner2.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamComponent } from './components/team/team.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatsComponent } from './components/stats/stats.component';
import { HttpClientModule } from "@angular/common/http";
import { AdminTeamsComponent } from './components/admin-teams/admin-teams.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { ReplacePipe } from './pipes/replace.pipe';
import { TtcPipe } from './pipes/ttc.pipe';
import { PlayerStatusComponent } from './components/player-status/player-status.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { AdminArticleComponent } from './components/admin-article/admin-article.component';
import { DisplayArticleComponent } from './components/display-article/display-article.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { SearchMatchesComponent } from './components/search-matches/search-matches.component';
import { WeatherComponent } from './components/weather/weather.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    AdminMatchesComponent,
    AdminPlayersComponent,
    AddPlayersComponent,
    AddMatchComponent,
    BannerComponent,
    TeamsVsComponent,
    NewsComponent,
    MatchTeamComponent,
    VideosComponent,
    BlogComponent,
    HomeComponent,
    InfoComponent,
    ArticleComponent,
    MatchesComponent,
    Banner2Component,
    TeamsComponent,
    TeamComponent,
    PlayersComponent,
    PlayerComponent,
    AddTeamComponent,
    StatsComponent,
    AdminTeamsComponent,
    EditMatchComponent,
    EditPlayerComponent,
    EditTeamComponent,
    ReversePipe,
    ReplacePipe,
    TtcPipe,
    PlayerStatusComponent,
    DisplayMatchComponent,
    DisplayPlayerComponent,
    DisplayTeamComponent,
    AdminUsersComponent,
    ArticleFormComponent,
    AdminArticleComponent,
    DisplayArticleComponent,
    DisplayUserComponent,
    SearchMatchesComponent,
    WeatherComponent,
    
    


  ], //definir les composants
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule
  ],
  providers: [], //les services deja integrer dans serveur.ts
  bootstrap: [AppComponent] //lancement de component general
})
export class AppModule { }
