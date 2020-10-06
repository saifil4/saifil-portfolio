import { Component, OnInit } from '@angular/core';
import { ProjectListComponent } from '../project-list/project-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title = 'Home';
  constructor() { }

  ngOnInit(): void {
  }

}
