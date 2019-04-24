import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss'],
})
export class BookingHistoryComponent implements OnInit {

  constructor(private movieService:MoviesService) { }
  list:[];
  ngOnInit() {
    this.movieService.getBookings()._subscribe((result)=>{
      this.list = result.body.result;
      console.log(this.list);
    })
  }


}
