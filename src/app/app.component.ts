import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'saifil-portfolio';

  public menus = [{ Name: 'Home', routerlink: '' }, { Name: 'About me', routerlink: '/about-me' }];

  public MenuVMs: Array<Menu> = [];

  constructor(private router: Router, private loc: Location) {
    this.Createmenuvm();
  }

  public Createmenuvm() {
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
