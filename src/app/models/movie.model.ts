export interface Genre {
    id: number;
    name: string;
  }
  
export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
interface MovieVideo {
  key: string;
  site: string;
  type: string;
  official: boolean;
}
  
export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  videos:{
    results: MovieVideo[]
  };
  vote_average: number;
  vote_count: number;
}