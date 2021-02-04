import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'tr[app-recipe-item]',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() i: number;


  constructor(private recipeServise: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeServise.recipeSelected.emit(this.recipe);
  }

}
