import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter} from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-title-resolver',
  template: `
    <span>
    </span>
  `,
  styles: []
})
export class TitleResolverComponent {

  constructor(private router: Router, private route: ActivatedRoute, private titleService: Title) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        let currentRoute = this.route.root;
        let title = '';
        do {
          const childrenRoutes = currentRoute.children;
          currentRoute = null;
          childrenRoutes.forEach(routes => {
            if (routes.outlet === 'primary') {
              title = routes.snapshot.data.title;
              currentRoute = routes;
            }
          });
        } while (currentRoute);
        if (title !== undefined ) {
          this.titleService.setTitle(title + ' | Rigel OTA Admin platform');
        }
      });
  }

}
