import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  data={email:''};
  password:any;
  newPassword:any;
  res:any;
  constructor(private movieService:MoviesService,private router:Router) { }
  showPassword=false;
  ngOnInit() {}
  resetPassword(email){
    this.movieService.getCustomerByEmail(email).subscribe((result)=>{
      this.res=result;
      if(this.res.password){
        this.showPassword=true;
        this.password=this.res.password
      }else{
        alert('Wrong email');
      }
      console.log(result)
    })
  }
  goto(){
    this.router.navigate(['login'])
  }
  updatePassword(pwd){
    var customer1={
      id:this.res.id,
      address:this.res.address,
      email:this.res.email,
      name:this.res.name,
      password:pwd,
      phone:this.res.phone
    }
    this.movieService.updateCustomerPassword(customer1).subscribe((result)=>{
      console.log(result);
    })
  }

}
