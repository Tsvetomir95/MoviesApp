import { Component, Input, OnInit } from '@angular/core';
import { overviewAnimation } from 'src/app/animations/animations';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  animations: [overviewAnimation]
})
export class MovieComponent implements OnInit {
  moviesArr: any;
  @Input() title: string;
  @Input() description: string;
  @Input() movieImg: string;
  @Input() rating: string;
  @Input() overviewText: string;
  @Input() ratingColor: string;
  showOverview = false;
   constructor() { }

  ngOnInit() {
    
  }

  colorRatingNumber() {
    if(this.ratingColor < '5') {
      return 'rating__color1';
    }
    else if(this.ratingColor >= '5' && this.ratingColor < '8' ) {
      return 'rating__color2';
    }
    else if(this.ratingColor >= '8') {
      return 'rating__color3';
    }
  }

}
