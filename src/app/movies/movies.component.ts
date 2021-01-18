import { Component, OnDestroy, OnInit } from "@angular/core";
import { overviewAnimation } from "../animations/animations";
import { MoviesService } from "../services/movies.service";
import { IMovie } from "../components/single-movie/single-movie.component";
import { MovieSearchService } from "../services/movie-search.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
  animations: [overviewAnimation],
})
export class MoviesComponent implements OnInit, OnDestroy {
  moviesArr: IMovie;
  images = "https://image.tmdb.org/t/p/w1280";
  showOverview = false;
  state: Object;
  filteredMoviesArr: IMovie;
  query: string;
  subscription: Subscription;
  subscriptionTwo: Subscription;
  constructor(
    private movies: MoviesService,
    private moviesSearch: MovieSearchService
  ) {}

  ngOnInit() {
    this.subscription = this.movies.getPopularMovies().subscribe((movie) => {
      this.filteredMoviesArr = movie;
    });
    this.subscriptionTwo = this.moviesSearch.search.subscribe((res) => {
      this.query = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionTwo.unsubscribe();
  }
}
