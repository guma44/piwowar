import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class IngredientsService {
  hops: FirebaseListObservable<any[]>;
  yeast: FirebaseListObservable<any[]>;
  fermentables: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {

  }

  getHops(){
    this.hops = this.af.database.list('/hops');
    return this.hops;
  }
  getFermentables(){
    this.fermentables = this.af.database.list('/fermentables');
    return this.fermentables;
  }
  getYeast(){
    this.yeast = this.af.database.list('/yeasts');
    return this.yeast;
  }

}
