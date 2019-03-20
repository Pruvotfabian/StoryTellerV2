import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'home', component: AccueilComponent},
  { path: '**', component: Page404Component},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }