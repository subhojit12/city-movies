import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private moviesService:MoviesService) { }
  movie:any;
  private sub:any;
  id:number;
  data={
    tickets:0
  }
  movies={
    customer_id:0,
    tickets:0,
    movie_id:0,
    movie_name:'',
    movie_time:'',
    theatre:'',
    screen:'',
    city:'',
    movie_date:'',
    date:'',
    amount:0,
    ticket_price:0
  };
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id']; // (+) converts string 'id' to a number
       console.log("id is "+this.id);
       this.moviesService.getMovieById(this.id).subscribe((movie)=>{
         this.movie=movie;
         console.log(this.movie);
       })
    });
  }
  amount=this.data.tickets*50
  addBooking(movie,t){
    console.log(movie,t);
    this.movies={
    customer_id:2,
    tickets:t,
    movie_id:movie.id,
    movie_name:movie.name,
    movie_time:'12:50',
    theatre:'Cinepolis Meenakshi Mall',
    screen:'Screen 2',
    city:'Bangalore',
    movie_date:'2019-05-07',
    date:'2019-03-27',
    amount:this.amount,
    ticket_price:50
    }
    console.log('data sent====>',this.addBooking)
    this.moviesService.addBooking(this.movies).subscribe((e)=>{console.log(JSON.stringify(e));
    this.router.navigate(['/payment'])
    });
    
  }
  // { "id": 2, "customer_id": 2, "tickets": 3, "movie_id": 2, "movie_name": "Aquaman", "movie_time": "12:50", "theatre": "Cinepolis", "screen": "Screen 2", "city": "Bangalore", "movie_date": "2019-05-07T18:30:00.000Z", "date": "2019-06-07T18:30:00.000Z", "amount": 100, "ticket_price": 50 }
  

}
