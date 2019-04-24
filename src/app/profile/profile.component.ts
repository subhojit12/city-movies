import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {}
  bookingHistory(){
    this.router.navigate(['/booking-history'])
  }
  movie(){
    this.router.navigate(['/movies'])
  }
  offers(){
    this.router.navigate(['/offers'])
  }

}
