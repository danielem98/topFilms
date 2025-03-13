import { Component, Inject, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() movie!: Movie
  
  constructor(private router: Router){
  }

  movieDetails(){
    this.router.navigate(['/movie', this.movie.id])
  }
}
