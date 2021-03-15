import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectListComponent } from '../project-list/project-list.component';
import { SkillsComponent } from '../skills/skills.component';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {

  public ProjectId: number = null;
  public Project: any = null;

  constructor(private route: ActivatedRoute) {
    this.getQueryParams();
    this.setProject();

  }

  private setProject() {
    this.Project = this.ProjectListData.find(project => project.Id === this.ProjectId);
    console.log(this.Project)
  }

  private getQueryParams() {
    this.route.queryParams.subscribe(params => {
      this.ProjectId = parseInt(params['id']);
    });
  }

  public ProjectListData = [
    {
      Id: 1,
      Name: 'Agile board',
      GitLink: 'https://github.com/saifil4/agile-board',
      LiveLink: 'https://serene-heyrovsky-9dffc5.netlify.app/',
      ImageSrc: '../../assets/images/agile-board/poster-image.svg',
      Description: `Front End implementation of a Scrum board built with React and Redux where tasks can prioritize and labeled based on user's requirements.`,
      TechStack: [
        { Name: 'React', Icon: '../../assets/images/skills/react.png' },
        { Name: 'Redux', Icon: '../../assets/images/skills/redux.png' },
        { Name: 'HTML', Icon: '../../assets/images/skills/html.png' },
        { Name: 'CSS', Icon: '../../assets/images/skills/css.png' },
        { Name: 'JavaScript', Icon: '../../assets/images/skills/javascript.png' },
        { Name: 'BootStrap', Icon: '../../assets/images/skills/bootstrap.png' },
        { Name: 'MySQL', Icon: '../../assets/images/skills/mysql.png' }
      ]
    },
    {
      Id: 2,
      Name: 'Covid-Tracker',
      GitLink: 'https://github.com/saifil4/covid-tracker',
      LiveLink: 'https://blissful-kalam-51fe7e.netlify.app/',
      ImageSrc: '../../assets/images/covid-tracker/poster-image.svg',
      Description: `Integrated disease.sh API to create a COVID-19 tracker to visualize global stats and vaccination efforts in different parts of the world.`,
      TechStack: [
        { Name: 'React', Icon: '../../assets/images/skills/react.png' },
        { Name: 'Redux', Icon: '../../assets/images/skills/redux.png' },
        { Name: 'HTML', Icon: '../../assets/images/skills/html.png' },
        { Name: 'CSS', Icon: '../../assets/images/skills/css.png' },
        { Name: 'JavaScript', Icon: '../../assets/images/skills/javascript.png' },
        { Name: 'BootStrap', Icon: '../../assets/images/skills/bootstrap.png' },
        { Name: 'MySQL', Icon: '../../assets/images/skills/mysql.png' }
      ]
    },
    {
      Id: 3,
      Name: 'Portfolio',
      GitLink: '',
      LiveLink: 'http://saifilmomin.com/',
      ImageSrc: '../../assets/images/portfolio/poster-image.png',
      Description: `A website to demonstrate my skills and projects and a medium for people to view my projects and contact me to collaborate on projects.`,
      TechStack: [
        { Name: 'React', Icon: '../../assets/images/skills/angular.png' },
        { Name: 'HTML', Icon: '../../assets/images/skills/html.png' },
        { Name: 'CSS', Icon: '../../assets/images/skills/css.png' },
        { Name: 'JavaScript', Icon: '../../assets/images/skills/typescript.png' },
        { Name: 'BootStrap', Icon: '../../assets/images/skills/bootstrap.png' }
      ]
    },
    {
      Id: 4,
      Name: 'Chess Like Game',
      GitLink: '',
      LiveLink: '',
      ImageSrc: '../../assets/images/chess/poster-image.svg',
      Description: '',
      TechStack: [
        { Name: 'React', Icon: '../../assets/images/skills/react.png' },
        { Name: 'Redux', Icon: '../../assets/images/skills/redux.png' },
        { Name: 'HTML', Icon: '../../assets/images/skills/html.png' },
        { Name: 'CSS', Icon: '../../assets/images/skills/css.png' },
        { Name: 'JavaScript', Icon: '../../assets/images/skills/javascript.png' },
        { Name: 'BootStrap', Icon: '../../assets/images/skills/bootstrap.png' },
        { Name: 'MySQL', Icon: '../../assets/images/skills/mysql.png' }
      ]
    },
    {
      Id: 5,
      Name: 'AnimeDB',
      GitLink: '',
      LiveLink: '',
      ImageSrc: '../../assets/images/animedb/poster-image.svg',
      Description: '',
      TechStack: [
        { Name: 'React', Icon: '../../assets/images/skills/react.png' },
        { Name: 'Redux', Icon: '../../assets/images/skills/redux.png' },
        { Name: 'HTML', Icon: '../../assets/images/skills/html.png' },
        { Name: 'CSS', Icon: '../../assets/images/skills/css.png' },
        { Name: 'JavaScript', Icon: '../../assets/images/skills/javascript.png' },
        { Name: 'BootStrap', Icon: '../../assets/images/skills/bootstrap.png' },
        { Name: 'MySQL', Icon: '../../assets/images/skills/mysql.png' }
      ]
    }
  ]

  ngOnInit(): void {
  }

}
