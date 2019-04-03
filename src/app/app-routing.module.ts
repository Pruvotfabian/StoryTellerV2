import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { Page404Component } from './page404/page404.component';
import { JeuxPrologueComponent } from './Jeux/jeux-prologue/jeux-prologue.component';
import { JeuxEpilogueComponent } from './Jeux/jeux-epilogue/jeux-epilogue.component';
import { GameguardianService } from './service/gameguardian.service';
import { GeneriqueComponent } from './Jeux/generique/generique.component';
import { SurchauffeComponent } from './surchauffe/surchauffe.component';

const routes: Routes = [
  { path: '',  redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AccueilComponent},
  { path: 'prologue', component: JeuxPrologueComponent},
  { path: 'generique', component: GeneriqueComponent},
  { path: 'choix', component: SurchauffeComponent },
  { path: 'epilogue', component: JeuxEpilogueComponent, canActivate: [GameguardianService]},
  { path: '**', component: Page404Component},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }