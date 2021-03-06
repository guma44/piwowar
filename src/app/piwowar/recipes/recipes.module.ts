import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PiwowarMaterialModule } from '../../piwowar-material.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';

@NgModule({
  imports: [
    CommonModule,
    RecipesRoutingModule,
    PiwowarMaterialModule
  ],
  declarations: [RecipeDetailsComponent, RecipeEditComponent, RecipeListComponent, RecipesComponent]
})
export class RecipesModule { }
