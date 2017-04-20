import { Component, Input, OnInit } from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute, PRIMARY_OUTLET} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'pw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name = "Piwowar";
  breadcrumbs: Array<Object>;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}
  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        let root: ActivatedRoute = this.activatedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
        console.log(this.breadcrumbs);
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
}
