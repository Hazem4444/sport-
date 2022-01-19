import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayersComponent } from './components/add-players/add-players.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { DisplayArticleComponent } from './components/display-article/display-article.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayerStatusComponent } from './components/player-status/player-status.component';
import { PlayersComponent } from './components/players/players.component';
import { SearchMatchesComponent } from './components/search-matches/search-matches.component';
import { SignupComponent } from './components/signup/signup.component';
import { StatsComponent } from './components/stats/stats.component';
import { TeamsComponent } from './components/teams/teams.component';
import { WeatherComponent } from './components/weather/weather.component';


const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'signupAdmin', component:SignupComponent},
  {path:'', component:HomeComponent},
  {path:'addMatch', component:AddMatchComponent},
  {path:'addPlayers', component:AddPlayersComponent},
  {path:'admin', component:AdminComponent},
  {path:'matches', component:MatchesComponent},
  {path:'teams', component:TeamsComponent},
  {path:'players', component:PlayersComponent},
  {path:'addTeam', component:AddTeamComponent},
  {path:'stat', component:StatsComponent},
  
  {path:'statusPlayer', component:PlayerStatusComponent},
  
  {path:'displayMatch/:id', component:DisplayMatchComponent},
  {path:'displayPlayer/:id', component:DisplayPlayerComponent},
  {path:'displayTeam/:id', component:DisplayTeamComponent},
 
  

  {path:'editMatch/:id', component:EditMatchComponent},
  {path:'editTeam/:id', component:EditTeamComponent},
  {path:'editPlayer/:id', component:EditPlayerComponent},
  {path:'addArticle', component:ArticleFormComponent},
  {path:'editArticle/:id', component:ArticleFormComponent},
  {path:'displayArticle/:id', component:DisplayArticleComponent},
  {path:'displayUser/:id', component:DisplayUserComponent},
  {path:'search', component:SearchMatchesComponent},
  {path:'addTeam', component:AddTeamComponent},
  {path:'weather', component:WeatherComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
