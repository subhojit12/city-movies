import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {

  constructor(private movieService:MoviesService,private router:Router) { }
  list=[];
  ngOnInit() {
    this.movieService.getMovies().subscribe((result) => {this.list = result;
    console.log(result)});
  }
  onselect(m){
    this.router.navigate(['/booking/'+m.id]);
  }
  goto(){
    this.router.navigate(['/offers']);
  }

}
