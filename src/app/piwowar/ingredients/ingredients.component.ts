import { Component, OnInit } from '@angular/core';

import { IngredientsService } from '../../shared/services/ingredients.service';


@Component({
  selector: 'pw-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  hops: any;
  fermentables: any;
  yeast: any;

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.ingredientsService.getHops().subscribe(
      (hops) => {
        this.hops = hops;
      }
    );
    this.ingredientsService.getFermentables().subscribe(
      (fermentables) => {
        this.fermentables = fermentables;
      }
    );
    this.ingredientsService.getYeast().subscribe(
      (yeast) => {
        this.yeast = yeast;
      }
    );
  }

}
