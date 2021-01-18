import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleMovieComponent } from '../components/single-movie/single-movie.component';
import { MoviesComponent } from './movies.component';



const routes: Routes = [
  {path: '', component: MoviesComponent },  
  {path: 'movie/:id', component: SingleMovieComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
