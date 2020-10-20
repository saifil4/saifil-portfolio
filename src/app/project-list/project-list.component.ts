import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {
  public ProjectListData: Array<any> = [
    {
      Title: 'Designing the application process for an investment platform called WheelFor Change',
      ProjectType: 'Group Course Project - 3 months',
      ImageLink: '../../assets/images/woc-cover.png',
      Description: `Wheel for change is an investment platform for Social Entrepreneurs where Potential investors
      could find and invest in projects The case study zooms in one of the parts of this project
      discussing about the design process for the application process for Social Entrepreneurs.`,
      RouterLink: '/wheel-for-change',
      Background: '#f3f4f7'
    },
    {
      Title: 'Plato: An e-learning platform',
      ProjectType: 'Course Project - 2 months',
      ImageLink: '../../assets/images/plato-cover.png',
      Description: `Plato is an web app that helps users find learning content and resources relevant to a specific profession. It curates, recommends and provides links to already existing content such as videos, articles, books etc. based on user preferences.
      `,
      RouterLink: '',
      Background: '#f3f4f7'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
