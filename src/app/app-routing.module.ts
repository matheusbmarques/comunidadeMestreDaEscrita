import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path: '', 
    component: LandingPageComponent 
  },
  {
    path: 'history', 
    component: HistoryComponent,

  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled' // ou 'enabled' para rolagem instantânea
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
