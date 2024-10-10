import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPokemonAndImage } from '../../../interfaces';
import { selectPokemons } from '../../../store/selectors/pokemon-selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  pokemons$: Observable<IPokemonAndImage[]>;
  groupedPokemons: Record<string, number> = {};

  constructor(private store: Store) {
    this.pokemons$ = this.store.select(selectPokemons);
  }

  ngOnInit(): void {
    this.pokemons$.subscribe((pokemons) => {
      this.groupPokemons(pokemons);
    });
  }

  groupPokemons(pokemons: IPokemonAndImage[]) {
    this.groupedPokemons = pokemons.reduce((acc, pokemon) => {
      const firstLetter = pokemon.name.charAt(0).toUpperCase(); 
      if (!acc[firstLetter]) {
        acc[firstLetter] = 0; 
      }
      acc[firstLetter]++; 
      return acc; 
    }, {} as Record<string, number>);
  }
}
