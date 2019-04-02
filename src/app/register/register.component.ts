import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  customer={
    name:'',
    email:'',
    password:'',
    phone:''
  }
  constructor(private movieService:MoviesService,private router:Router) { }

  ngOnInit() {}
  addCustomer(){
  	this.movieService.addCustomer(this.customer).subscribe(()=>{this.router.navigate(['/movies']);});
  }
  goto(){
    this.router.navigate(['/login'])
  }

}
