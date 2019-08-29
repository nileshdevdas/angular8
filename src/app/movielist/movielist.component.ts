import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { PubsubService } from '../pubsub.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  movies = [];
  totalcost = 1000;
  remotecount = 0;
  constructor(private movieService: MoviesService, private pubsub: PubsubService) {
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe((result) => {
      this.movies = result;
    });
    this.pubsub.getSubscriber().subscribe((result) => {
      console.log('got the event.......');
      this.remotecount = result;
    });





  }

}
