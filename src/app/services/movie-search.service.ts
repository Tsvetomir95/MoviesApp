import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {
  search = new EventEmitter<string>();
  constructor() { }


}
