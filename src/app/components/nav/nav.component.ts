import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieSearchService } from 'src/app/services/movie-search.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  searchQuery: string;
  @Output() searchQ = new EventEmitter<string>(); 
  constructor(private searchTerm: MovieSearchService) { }

  ngOnInit() {
  }

  search(search: string) {
    this.searchTerm.search.emit(this.searchQuery);
  }

}
