import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../services/cinema.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() movieBillboards: any;

  constructor(
    private cinemaThang: CinemaService,
    private activatedThang: ActivatedRoute
  ) { }

  ngOnInit() {
  this.movieBillboards = this.cinemaThang.getMovies()
  }

}
