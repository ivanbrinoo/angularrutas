import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicaComponent } from './components/musica-component/musica-component';
import { HomeComponent } from './components/home-component/home-component';

const routes: Routes = [
  {path: "musica", component: MusicaComponent},
  {path: "casa", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
