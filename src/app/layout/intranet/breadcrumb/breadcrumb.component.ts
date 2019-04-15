import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  tempState = [];
  breadcrumbs: Array<Breadcrumb>;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = [];
        this.tempState = [];
        let currentRoute = this.route.root, url = '';
        do {
          const childrenRoutes = currentRoute.children;
          currentRoute = null;
          childrenRoutes.forEach(routes => {
            if (routes.outlet === 'primary') {
              const routeSnapshot = routes.snapshot;
              url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
              if (routes.snapshot.data.title !== undefined) {
                let status = false;
                if (routes.snapshot.data.status !== undefined) {
                  status = routes.snapshot.data.status;
                }

                let icon = '';
                if (routes.snapshot.data.icon !== undefined) {
                  icon = routes.snapshot.data.icon;
                }

                let caption = '';
                if (routes.snapshot.data.caption !== undefined) {
                  caption = routes.snapshot.data.caption;
                }

                if (!this.tempState.includes(routes.snapshot.data.title)) {
                  this.tempState.push(routes.snapshot.data.title);
                  this.breadcrumbs.push({
                    label: routes.snapshot.data.title, icon, caption, status, url
                  });
                }
              }
              currentRoute = routes;
            }
          });
        } while (currentRoute);
      });
  }

}
interface Breadcrumb {
  label: string;
  icon: string;
  caption: string;
  status: boolean;
  url: string;
}
