import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'movie/:id', loadComponent: () => import('./components/movie-details/movie-details.component')
        .then(c => c.MovieDetailsComponent)},
    { path: '**', redirectTo: '' }
];
