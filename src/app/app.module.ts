import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Page404Component } from './page404/page404.component';
import { JeuxPrologueComponent } from './Jeux/jeux-prologue/jeux-prologue.component';
import { TestComponent } from './test/test.component';
import { JeuxspacebattleComponent } from './Jeux/jeuxspacebattle/jeuxspacebattle.component';
import { JeuxAssaultComponent } from './Jeux/jeux-assault/jeux-assault.component';
import { JeuxFinalBattleComponent } from './Jeux/jeux-final-battle/jeux-final-battle.component';
import { TheGameComponent } from './Jeux/the-game/the-game.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { JeuxEpilogueComponent } from './Jeux/jeux-epilogue/jeux-epilogue.component';
import { GeneriqueComponent } from './Jeux/generique/generique.component';
import { HeaderComponent } from './header/header.component';
import { ChoixComponent } from './choix/choix.component';
import { ChargementComponent } from './chargement/chargement.component';
import { HealbarComponent } from './healbar/healbar.component';
import { ChoiceComponent } from './choice/choice.component';
import { ClickareaComponent } from './clickarea/clickarea.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { GameguardianService } from './service/gameguardian.service';
import { AuthService } from './service/auth.service';
import { EnemisService } from './service/enemis.service';
import { TropheeService } from './service/trophee.service';
import { SurchauffeService } from './service/surchauffe.service';
import { KarmaService } from './service/karma.service';
import { HeaderService } from './service/header.service';
import { HealhbarService } from './service/healhbar.service';


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
    TestComponent,
    HealbarComponent,
    ChoiceComponent,
    ClickareaComponent,
    JeuxspacebattleComponent,
    JeuxAssaultComponent,
    JeuxFinalBattleComponent,
    TheGameComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
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
    TestComponent,
    HealbarComponent,
    ChoiceComponent,
    ClickareaComponent,
    JeuxspacebattleComponent,
    JeuxAssaultComponent,
    JeuxFinalBattleComponent,
    TheGameComponent,
    HealhbarService,
    HeaderService,
    KarmaService,
    SurchauffeService,
    TropheeService,
    EnemisService,
    AuthService,
    GameguardianService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
