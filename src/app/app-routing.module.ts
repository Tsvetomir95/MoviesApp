import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleMovieComponent } from './components/single-movie/single-movie.component';


const routes: Routes = [
  {path: '', loadChildren: () => import('./movies/movies.module').then( m => m.MoviesModule)},
  {path: '**' , redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
