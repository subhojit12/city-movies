import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router} from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private movieService:MoviesService,private router:Router,public toastController: ToastController) { }
  data={
    email:'',
    password:''
  }
  res:any={};
  ngOnInit() {}
  login(data){
    this.movieService.authenticate(data).subscribe((result)=>{console.log(result);
      this.res=result;
      localStorage.setItem('customer',JSON.stringify(result))
      if(this.res.result.password==data.password){
        this.router.navigate(['/movies'])
      }else{
        alert('Wrong Password');
        this.presentToast();
      }
    });
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

}
