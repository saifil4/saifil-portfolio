import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  keyframes,
  group
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            left: 0,
            width: '100%',
          }),
        ]),
        group([
          query(':enter', [
            animate('2000ms ease', keyframes([
              style({ transform: 'scale(0) translateX(100%)', offset: 0 }),
              style({ transform: 'scale(0.5) translateX(25%)', offset: 0.3 }),
              style({ transform: 'scale(1) translateX(0%)', offset: 1 }),
            ])),
          ]),
          query(':leave', [
            animate('2000ms ease', keyframes([
              style({ transform: 'scale(1)', offset: 0 }),
              style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
              style({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
            ])),
          ])
        ]),
      ])
    ])]
})
export class AppComponent implements OnInit {
  title = 'saifil-portfolio';

  public menus = [{ Name: 'Home', routerlink: '' }, { Name: 'About me', routerlink: '/about-me' }];

  public MenuVMs: Array<Menu> = [];

  constructor(private router: Router, private loc: Location) {
    this.Createmenuvm();
  }
  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  public Createmenuvm(): void {
    let menu;
    this.menus.forEach(m => {
      menu = new Menu();
      menu.Linkname = m.Name;
      menu.RouterLink = m.routerlink;
      const path = this.loc.path();
      menu.status = (m.routerlink === path);
      this.MenuVMs.push(menu);
    });
  }


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  OnLinkClick(mvm: Menu) {
    this.MenuVMs.forEach(m => { m.status = false; });
    mvm.status = true;
  }

}


class Menu {
  public RouterLink: string;
  public Linkname: string;
  public status = false;

  public get navclass() {
    return this.status ? 'nav-item active' : 'nav-item';
  }
}
