import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private loc: Location) {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }

  OnLogoClick() {
    this.router.navigateByUrl('');
    this.Scroll('home');
  }

  OnContactClick() {
    this.Scroll('footer');
  }

  OnAboutMeClick() {
    this.Scroll('about-me');
  }

  Scroll(id: string) {
    const element = document.getElementById(id);
    element.scrollIntoView();
  }

}


