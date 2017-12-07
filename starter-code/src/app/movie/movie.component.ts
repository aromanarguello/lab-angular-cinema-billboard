import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})


export class MovieComponent implements OnInit {

movieDetails: any = {};

  constructor(
    private cinemaThang: CinemaService,
    private activatedThang: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedThang.params.subscribe( myReqParams => {
      console.log(myReqParams);

      this.movieDetails = this.cinemaThang.getMovie(myReqParams.movieId);
    });

  }

}
