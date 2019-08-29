import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { PubsubService } from '../pubsub.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  title = 'Information Portlet';
  count = 1;
  constructor(private movieService: MoviesService, private pubsub: PubsubService) { }
  increment(evt) {
    this.count = this.count + 1;
  }
  ngOnInit() {
  }
}




