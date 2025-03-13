import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { HttpClient } from '@angular/common/http';
import { MovieResponse } from '../models/movie.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = environment.apiUrl
  private apiKey = environment.apiKey

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<MovieResponse>{
    return this.http.get<MovieResponse>(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`)
  }
  getTopRated(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}`)
  }
  getUpcoming(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.apiUrl}/movie/upcoming?api_key=${this.apiKey}`)
  }

  getMoviesByGenre(genreId: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_genres=${genreId}`
    );
  }
  getScienceFictionMovies(): Observable<MovieResponse> {
    const genreId = 878; // ID per fantascienza
    return this.getMoviesByGenre(genreId);
  }

  getComedyMovies(): Observable<MovieResponse> {
    const genreId = 35; // ID per commedia
    return this.getMoviesByGenre(genreId);
  }

  getHorrorMovies(): Observable<MovieResponse> {
    const genreId = 27; // ID per horror
    return this.getMoviesByGenre(genreId);
  }

  getActionMovies(): Observable<MovieResponse> {
    const genreId = 28; // ID per azione
    return this.getMoviesByGenre(genreId);
  }

  getDramaMovies(): Observable<MovieResponse> {
    const genreId = 18; // ID per dramma
    return this.getMoviesByGenre(genreId);
  }

  getMovieDetails(id: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/movie/${id}`, {
      params: {
        api_key: this.apiKey,
        append_to_response: 'videos' // Aggiungi questo parametro
      }
    })
  }
}
