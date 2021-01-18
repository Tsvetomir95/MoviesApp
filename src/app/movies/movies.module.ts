import { NgModule } from '@angular/core';
import { SingleMovieComponent } from '../components/single-movie/single-movie.component';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MovieComponent } from '../components/movie/movie.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesService } from '../services/movies.service';

import {FormsModule} from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    SingleMovieComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,    
  ],
  providers: [MoviesService]
})
export class MoviesModule { }
