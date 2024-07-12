import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailService, Cocktail } from '../cocktail.service';



@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent implements OnInit {
  public cocktails: Cocktail[] = [];
  private cocktailService = inject(CocktailService);

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe((cocktailsFromJsonFile: Cocktail[]) => {
      this.cocktails = cocktailsFromJsonFile;
    });
  }
}