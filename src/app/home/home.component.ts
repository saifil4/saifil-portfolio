import { Component, OnInit } from '@angular/core';
import { ProjectListComponent } from '../project-list/project-list.component';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'Home';
  constructor() { }

}
