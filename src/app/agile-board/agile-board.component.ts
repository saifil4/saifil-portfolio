import { Component, OnInit } from '@angular/core';
import { ProjectListComponent } from '../project-list/project-list.component';

@Component({
  selector: 'app-agile-board',
  templateUrl: './agile-board.component.html'
})
export class AgileBoardComponent implements OnInit {

  
  constructor() { 

  }

  public ProjectListData = [
    {
      Id: 1,
      Name: '',
      GitLink: '',
      LiveLink: '',
      ImageSrc: '',
      Description: '',
      TechStack: [

      ]
    }
  ]

  ngOnInit(): void {
  }

}
