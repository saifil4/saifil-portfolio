import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public Skills: Array<any> = [
    { Name: 'React', Icon: '../../assets/images/skills/react.png' },
    { Name: 'Angular', Icon: '../../assets/images/skills/angular.png' },
    { Name: 'HTML', Icon: '../../assets/images/skills/html.png' },
    { Name: 'CSS', Icon: '../../assets/images/skills/css.png' },
    { Name: 'JavaScript', Icon: '../../assets/images/skills/javascript.png' },
    { Name: 'TypeScript', Icon: '../../assets/images/skills/typescript.png' },
    { Name: 'BootStrap', Icon: '../../assets/images/skills/bootstrap.png' },
    { Name: 'MySQL', Icon: '../../assets/images/skills/mysql.png' },
    { Name: 'Redux', Icon: '../../assets/images/skills/redux.png' },
    { Name: 'Git', Icon: '../../assets/images/skills/typescript.png' },
    { Name: 'Bitbucket', Icon: '../../assets/images/skills/typescript.png' },
    { Name: 'SourceTree', Icon: '../../assets/images/skills/typescript.png' },
  ]

  public Experience: Array<any> = [
    {
      Date: 'May 2017 to March 2019',
      Company: 'BPM-D',
      Location: 'Mumbai, India',
      Role: 'Associate Solution Developer'
    },
    {
      Date: 'April 2019 to November 2020',
      Company: 'BPM-D',
      Location: 'Mumbai, India',
      Role: 'Solution Developer'
    }
  ];

  public Education: Array<any> = [
    {
      Date: 'Jan 2020 to Dec 2020',
      School: 'Centennial College',
      Location: 'Toronto, Canada',
      Degree: 'Interactive Media Management'
    },
    {
      Date: 'Jun 2014 to March 2017',
      School: 'Royal College of Arts Science and Commerce',
      Location: 'Mumbai, India',
      Degree: 'Bachelors of Computer Science'
    }
  ];

}
