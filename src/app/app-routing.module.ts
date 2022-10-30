import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: 'reserva', component: ReservaComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'sobre-nos', component: SobreNosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
