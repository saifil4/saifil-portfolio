import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CardComponent } from '../card/card.component'
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {
  public UXProjectList: Array<any> = [
    // {
    //   Title: 'Wheel For Change: An investment platform for Social Entrprenuers',
    //   ProjectType: 'Group Course Project - 3 months',
    //   ImageLink: '../../assets/images/woc-cover.png',
    //   Description: `Wheel for change is an investment platform for Social Entrepreneurs where Potential investors
    //   could find and invest in projects The case study zooms in one of the parts of this project
    //   discussing about the design process for the application process for Social Entrepreneurs.`,
    //   RouterLink: '/wheel-for-change',
    //   Background: '#f3f4f7'
    // },
    // {
    //   Title: 'Plato: An e-learning platform',
    //   ProjectType: 'Course Project - 2 months',
    //   ImageLink: '../../assets/images/plato-cover.png',
    //   Description: `Plato is a web app that helps users find learning content and resources relevant to a specific profession. It curates, recommends, and provides links to already existing youtube videos based on user preferences.
    //   `,
    //   RouterLink: '/plato',
    //   Background: '#f3f4f7'
    // }
  ];


  public DevelopmentProjectList: Array<any> = [
    {
      Id: 1,
      Name: 'Agile-board',
      Title: 'Agile board',
      ProjectType: 'Personal Project - Front End Development',
      ImageLink: '../../assets/images/agile-board/poster-image.svg',
    },
    {
      Id: 2,
      Name: 'Covid-Tracker',
      Title: 'Covid Tracker',
      ProjectType: 'Personal Project - Front End Development',
      ImageLink: '../../assets/images/covid-tracker/poster-image.svg',
      Background: '#f3f4f7'
    },
    {
      Id: 3,
      Name: 'Portfolio-Website',
      Title: 'Portfolio Website',
      ProjectType: 'Personal Project - Front End Development',
      ImageLink: '../../assets/images/portfolio/poster-image.png'
    }
  ];

  public WIPList: Array<any> = [
    {
      Id: 4,
      Name: 'AnimeDB',
      Title: 'Chess Like Game',
      ProjectType: 'Personal Project - Front End Development',
      ImageLink: '../../assets/images/chess/poster-image.svg'
    },
    {
      Id: 5,
      Name: 'AnimeDB',
      Title: 'AnimeDB: Explore your favourite Animes',
      ProjectType: 'Personal Project - Front End Development',
      ImageLink: '../../assets/images/animedb/poster-image.svg'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
