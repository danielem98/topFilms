import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie.model';
import { MovieVideosComponent } from "../movie-videos/movie-videos.component";

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, MovieVideosComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  movie!: Movie
  constructor(
    private movieService: MovieService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router) {
    }
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.movieService.getMovieDetails(id).subscribe({
        next: (data: Movie) => {
          this.movie = data
        },
        error: (err) => {
          console.error('Errore nel recupero del film', err);
        }
      });
    } else{
      this.router.navigate([''])
    }
  }

}
