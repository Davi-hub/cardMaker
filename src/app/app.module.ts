import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlsoComponent } from './cards/also/also.component';
import { FelsoComponent } from './cards/felso/felso.component';
import { CardsComponent } from './cards/cards.component';
import { AszComponent } from './cards/asz/asz.component';
import { HetComponent } from './cards/het/het.component';
import { NyolcComponent } from './cards/nyolc/nyolc.component';
import { KilencComponent } from './cards/kilenc/kilenc.component';
import { TizComponent } from './cards/tiz/tiz.component';
import { KiralyComponent } from './cards/kiraly/kiraly.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { PanelComponent } from './panel/panel.component';
import { PlusComponent } from './cards/plus/plus.component';
import { BackComponent } from './cards/back/back.component';

@NgModule({
  declarations: [
    AppComponent,
    AlsoComponent,
    FelsoComponent,
    CardsComponent,
    AszComponent,
    HetComponent,
    NyolcComponent,
    KilencComponent,
    TizComponent,
    KiralyComponent,
    PanelComponent,
    PlusComponent,
    BackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
