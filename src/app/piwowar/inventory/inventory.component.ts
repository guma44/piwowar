import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

import { IngredientsService } from '../../shared/services/ingredients.service';

@Component({
  selector: 'pw-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
  }

}
