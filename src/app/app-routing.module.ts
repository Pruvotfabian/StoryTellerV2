import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { Page404Component } from './page404/page404.component';
import { JeuxPrologueComponent } from './Jeux/jeux-prologue/jeux-prologue.component';
import { JeuxEpilogueComponent } from './Jeux/jeux-epilogue/jeux-epilogue.component';
import { GameguardianService } from './service/gameguardian.service';
import { GeneriqueComponent } from './Jeux/generique/generique.component';
// import { TestComponent } from './test/test.component';
import { JeuxspacebattleComponent } from './Jeux/jeuxspacebattle/jeuxspacebattle.component';
import { JeuxAssaultComponent } from './Jeux/jeux-assault/jeux-assault.component';
import { JeuxFinalBattleComponent } from './Jeux/jeux-final-battle/jeux-final-battle.component';
import { TheGameComponent } from './Jeux/the-game/the-game.component';

const routes: Routes = [
  { path: '',  redirectTo: 'home', pathMatch: 'full' },
  { path: 'la-chute-du-simplonis', component: TheGameComponent },
  { path: 'home', component: AccueilComponent},
  { path: 'test', component: JeuxPrologueComponent},
  { path: 'testspace', component: JeuxspacebattleComponent},
  { path: 'testassault', component: JeuxAssaultComponent},
  { path: 'testfinal', component: JeuxFinalBattleComponent},
  { path: 'generique', component: GeneriqueComponent},
  { path: 'epilogue', component: JeuxEpilogueComponent, canActivate: [GameguardianService]},
  { path: '**', component: Page404Component},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }