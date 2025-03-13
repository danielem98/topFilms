import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesContainerComponent } from "../movies-container/movies-container.component";
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, MoviesContainerComponent, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  popularMovies$ = this.movieService.getPopularMovies();
  topRatedMovies$ = this.movieService.getTopRated();
  upcomingMovies$ = this.movieService.getUpcoming();
  scienceFictionMovies$ = this.movieService.getScienceFictionMovies();
  comedyMovies$ = this.movieService.getComedyMovies();
  horrorMovies$ = this.movieService.getHorrorMovies();
  actionMovies$ = this.movieService.getActionMovies();
  dramaMovies$ = this.movieService.getDramaMovies();

  constructor(public movieService: MovieService){
  }

  
}
