import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {
  public ProjectListData: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
