import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Définition de l'interface Cocktail
export interface Cocktail {
  name: string;
  price: number;
  img: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private http = inject(HttpClient);

  constructor() { }

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>("assets/cocktails.json");
  }
}