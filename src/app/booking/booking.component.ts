import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var RazorpayCheckout:any;
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private moviesService:MoviesService,public loadingController: LoadingController) { }
  movie:any;
  private sub:any;
  id:number;
  data={
    tickets:0
  }
  goto(){
    this.router.navigate(['movies'])
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
    this.presentLoadingWithOptions();
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id']; // (+) converts string 'id' to a number
       console.log("id is "+this.id);
       this.moviesService.getMovieById(this.id).subscribe((movie)=>{
         this.movie=movie;
         console.log(this.movie);
       })
    });
    
  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
  
  amount=this.data.tickets*200
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
    // this.moviesService.addBooking(this.movies).subscribe((e)=>{console.log(JSON.stringify(e));
    // this.router.navigate(['/payment'])
    // });
    var options = {
      description: 'Credits towards consultation',
      image: 'https://static1.squarespace.com/static/5a5031001f318dd30f2083e1/t/5c4f48ea21c67cd91a84822a/1548699884343/?format=1000w',
      currency: 'INR',
      key:'rzp_test_BtOGQk79ks3D6L',
      // order_id: 'order_7HtFNLS98dSj8x',
      amount: '5000000',
      name: 'foo',
      prefill: {
      email: 'subhojit@razorpay.com',
      contact: '8904074607',
      name: 'Subhojit'
      },
      theme: {
      color: '##528FF0'
      }
      }
      var successCallback = function(success) {
      alert('payment_id: ' + success.razorpay_payment_id)
      var orderId = success.razorpay_order_id
      var signature = success.razorpay_signature
      }
      var cancelCallback = function(error) {
      alert(error.description + ' (Error '+error.code+')')
      }
      RazorpayCheckout.on('payment.success', successCallback)
      RazorpayCheckout.on('payment.cancel', cancelCallback)
      RazorpayCheckout.open(options)
      this.router.navigate(['/payment-done'])
      }
      
    
  }
  // { "id": 2, "customer_id": 2, "tickets": 3, "movie_id": 2, "movie_name": "Aquaman", "movie_time": "12:50", "theatre": "Cinepolis", "screen": "Screen 2", "city": "Bangalore", "movie_date": "2019-05-07T18:30:00.000Z", "date": "2019-06-07T18:30:00.000Z", "amount": 100, "ticket_price": 50 }
  



