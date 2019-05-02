import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Page404Component } from './page404/page404.component';
import { JeuxPrologueComponent } from './Jeux/jeux-prologue/jeux-prologue.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { JeuxEpilogueComponent } from './Jeux/jeux-epilogue/jeux-epilogue.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { GameguardianService } from './service/gameguardian.service';
import { AuthService } from './service/auth.service';
import { GeneriqueComponent } from './Jeux/generique/generique.component';
import { HeaderComponent } from './header/header.component';
import { ChoixComponent } from './choix/choix.component';
import { ChargementComponent } from './chargement/chargement.component';
import { SurchauffeComponent } from './surchauffe/surchauffe.component';
import { HealbarComponent } from './healbar/healbar.component';
import { JeuxspacebattleComponent } from './Jeux/jeuxspacebattle/jeuxspacebattle.component';
import { ChoiceComponent } from './choice/choice.component';
import { ClickareaComponent } from './clickarea/clickarea.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    Page404Component,
    JeuxPrologueComponent,
    ConnexionComponent,
    JeuxEpilogueComponent,
    GeneriqueComponent,
    HeaderComponent,
    ChoixComponent,
    ChargementComponent,
    SurchauffeComponent,
    HealbarComponent,
    JeuxspacebattleComponent,
    ChoiceComponent,
    ClickareaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AuthService,
    GameguardianService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
