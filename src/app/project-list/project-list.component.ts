import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CardComponent } from '../card/card.component'
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {
  public UXProjectList: Array<any> = [
    {
      Title: 'Wheel For Change: An investment platform for Social Entrprenuers',
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
      Description: `Plato is a web app that helps users find learning content and resources relevant to a specific profession. It curates, recommends, and provides links to already existing youtube videos based on user preferences.
      `,
      RouterLink: '/plato',
      Background: '#f3f4f7'
    }
  ];


  public DevelopmentProjectList: Array<any> = [
    {
      Id: 1,
      Name: 'Agile-board',
      Title: 'Agile board',
      ProjectType: 'React, Redux and Javascript',
      ImageLink: '../../assets/images/agile-board/poster-image.svg',
    },
    {
      Id: 2,
      Name: 'Covid-Tracker',
      Title: 'Covid Tracker',
      ProjectType: 'React and JavaScript',
      ImageLink: '../../assets/images/covid-tracker/poster-image.svg',
      Background: '#f3f4f7'
    },
    {
      Id: 3,
      Name: 'Portfolio-Website',
      Title: 'Portfolio Website',
      ProjectType: 'Angular and TypeScript',
      ImageLink: '../../assets/images/portfolio/poster-image.svg'
    }
  ];

  public WIPList: Array<any> = [
    {
      Id: 4,
      Name: 'react-portfolio',
      Title: 'React Portfolio',
      ProjectType: null,
      ImageLink: '../../assets/images/portfolio-react/splash.png'
    },
    {
      Id: 5,
      Name: 'Lines and Boxes',
      Title: 'Lines and Boxes: A fun little game you can play with your friends',
      ProjectType: null,
      ImageLink: '../../assets/images/lines-and-boxes/splash.png'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
