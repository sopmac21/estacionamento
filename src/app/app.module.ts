import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    ReservaComponent,
    ServicosComponent,
    SobreNosComponent,
    OpenCloseComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
