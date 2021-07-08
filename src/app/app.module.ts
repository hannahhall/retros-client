import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RetrosListComponent } from './components/retros/retros-list/retros-list.component';
import { RetrosDetailComponent } from './components/retros/retros-detail/retros-detail.component';
import { CardsFormComponent } from './components/cards/cards-form/cards-form.component';
import { CardsDetailComponent } from './components/cards/cards-detail/cards-detail.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RetrosListComponent,
    RetrosDetailComponent,
    CardsFormComponent,
    CardsDetailComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
