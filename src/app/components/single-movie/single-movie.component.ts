import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

export interface IMovie {
  id: number;
  title: string;
  overview: string;
  date: string;
  vote_average: string;
  results: any[];
  posterPath: string;
}

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit, OnDestroy {
  moviesArr: any;
  movie: IMovie;
  subscription: Subscription;
  bigOverview: string;
  constructor( private route: ActivatedRoute, private movies: MoviesService) { 
    
  }

  ngOnInit() {
   const index = this.route.snapshot.params["id"];
  this.subscription = this.movies.getPopularMovies().subscribe((res) => {
    this.moviesArr = res;
    this.moviesArr.results.map((el: IMovie)=> { 
      if (el.id === +index) {
        this.movie = el;
      }
      if(el.overview.length > 220 && el.id === +index ) {
        this.bigOverview = el.overview;
      }
    });
    
   });

  //  
    
   
  }
  colorRatingNumber() {
    if(this.movie.vote_average < '5') {
      return 'rating__color1';
    }
    else if(this.movie.vote_average >= '5' && this.movie.vote_average < '8' ) {
      return 'rating__color2';
    }
    else if(this.movie.vote_average >= '8') {
      return 'rating__color3';
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
