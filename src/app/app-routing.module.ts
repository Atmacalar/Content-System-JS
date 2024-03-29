import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
   
   
  {
    path:'movie/:id',
    component:MovieDetailsComponent
  },


  {
    path:'about',
    component:AboutComponent
  },

  { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
