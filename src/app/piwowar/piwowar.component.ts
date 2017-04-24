import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute, PRIMARY_OUTLET} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';

import { AuthService } from '../auth/auth.service';

class Breadcrumb {
  constructor(public label: string, public url: string){}
}

@Component({
  selector: 'pw-piwowar',
  templateUrl: './piwowar.component.html',
  styleUrls: ['./piwowar.component.scss']
})
export class PiwowarComponent implements OnInit {


  isUserSignedIn: boolean = true;
  name = "Piwowar";
  breadcrumbs: Array<Breadcrumb>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        let root: ActivatedRoute = this.activatedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
        if (this.breadcrumbs.length >= 3){
          this.name = this.breadcrumbs[2].label;
        }
      });
  }

  getBreadcrumbs(root: ActivatedRoute){
    let breadcrumbs = [];
    let url = '';
    do {
      let childrenRoutes = root.children;
      root = null;
      childrenRoutes.forEach(route => {
        if(route.outlet === 'primary') {
          let routeSnapshot = route.snapshot;
          url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
          breadcrumbs.push({
            label: route.snapshot.data.breadcrumb,
            url:   url });
          root = route;
        }
      })
    } while(root);
    return breadcrumbs;
  }

  onLogout() {
    this.authService.signOutUser();
  }

}
