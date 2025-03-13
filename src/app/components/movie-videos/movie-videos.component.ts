import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-videos.component.html',
  styleUrl: './movie-videos.component.css'
})
export class MovieVideosComponent {
@Input() movie!: Movie;

constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(key: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${key}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  get mainVideo() {
    if (!this.movie.videos?.results) return null;

    // Trova il primo trailer ufficiale su YouTube
    return this.movie.videos.results.find(video => 
      video.site === 'YouTube' && 
      video.type === 'Trailer' &&
      video.official
    );
  }
}
