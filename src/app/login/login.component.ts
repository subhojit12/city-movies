import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public alertController: AlertController,private movieService:MoviesService,private router:Router) { }
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
        this.presentAlert();
        this.data={
          email:'',
          password:''
        }
      }
    });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Failed',
      subHeader: 'Please Enter the correct Credentials',
      message: 'Try Logging Again.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
