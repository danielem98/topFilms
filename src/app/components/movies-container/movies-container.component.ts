import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Observable} from 'rxjs';
import { MovieResponse } from '../../models/movie.response';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'movies-container',
  standalone: true,
  imports: [MovieCardComponent, CommonModule],
  templateUrl: './movies-container.component.html',
  styleUrl: './movies-container.component.css'
})
export class MoviesContainerComponent {
  @Input() title: string = ''
  @Input() movies$!: Observable<MovieResponse>

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  scroll(offset: number) {
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = container.clientWidth * 0.8; // Scrolla l'80% della larghezza visibile
    container.scrollBy({ 
      left: scrollAmount * offset,
      behavior: 'smooth' 
    })
  }
  
}
