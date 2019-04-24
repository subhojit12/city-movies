import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {}

  home(){
    this.router.navigate(['movies'])
  }
  profile(){
    this.router.navigate(['/profile'])
  }
  logout(){
    this.router.navigate(['login'])
  }

}
