import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectListComponent } from '../project-list/project-list.component';
import { SkillsComponent } from '../skills/skills.component';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {

  public Project: any = null;

  constructor(private route: ActivatedRoute) {
    window.scroll(0, 0);
  }

  ngOnInit(): void {
    this.getQueryParams();
  }

  private getQueryParams() {
    this.route.queryParams.subscribe(params => {
      this.setProject(parseInt(params['id']));
      window.scroll(0, 0);
    });
  }

  private setProject(projectid: number) {
    this.Project = this.ProjectListData.find(project => project.Id === projectid);
  }

  public ProjectListData = [
    {
      Id: 1,
      Name: 'Agile board',
      GitLink: 'https://github.com/saifil4/agile-board',
      LiveLink: 'https://serene-heyrovsky-9dffc5.netlify.app/',
      ImageSrc: '../../assets/images/agile-board/poster-image.svg',
      Description: `Front End implementation of a Scrum board built with React and Redux where tasks can be prioritized and labeled based on user's requirements.`,
      TechStack: [
        { Name: 'React', Icon: '../../assets/images/skills/react.png' },
        { Name: 'Redux', Icon: '../../assets/images/skills/redux.png' },
        { Name: 'HTML', Icon: '../../assets/images/skills/html.png' },
        { Name: 'CSS', Icon: '../../assets/images/skills/css.png' },
        { Name: 'JavaScript', Icon: '../../assets/images/skills/javascript.png' },
        { Name: 'BootStrap', Icon: '../../assets/images/skills/bootstrap.png' },
        { Name: 'React Beautiful dnd', Icon: null }
      ]
    },
    {
      Id: 2,
      Name: 'Covid-Tracker',
      GitLink: 'https://github.com/saifil4/covid-tracker',
      LiveLink: 'https://blissful-kalam-51fe7e.netlify.app/',
      ImageSrc: '../../assets/images/covid-tracker/poster-image.svg',
      Description: `Created a COVID-19 tracker by integrating disease.sh API to visualize global stats and vaccination efforts in different parts of the world.`,
      TechStack: [
        { Name: 'React', Icon: '../../assets/images/skills/react.png' },
        { Name: 'HTML', Icon: '../../assets/images/skills/html.png' },
        { Name: 'CSS', Icon: '../../assets/images/skills/css.png' },
        { Name: 'JavaScript', Icon: '../../assets/images/skills/javascript.png' },
        { Name: 'BootStrap', Icon: '../../assets/images/skills/bootstrap.png' },
        { Name: 'Leaflet JS', Icon: null },
        { Name: 'Disease.sh API', Icon: null }
      ]
    },
    {
      Id: 3,
      Name: 'Portfolio Website',
      GitLink: 'https://github.com/saifil4/saifil-portfolio',
      LiveLink: 'http://saifilmomin.com/',
      ImageSrc: '../../assets/images/portfolio/poster-image.svg',
      Description: `A website to demonstrate my skills and projects and a medium for people to view my projects and contact me to collaborate on projects.`,
      TechStack: [
        { Name: 'Angular', Icon: '../../assets/images/skills/angular.png' },
        { Name: 'HTML', Icon: '../../assets/images/skills/html.png' },
        { Name: 'CSS', Icon: '../../assets/images/skills/css.png' },
        { Name: 'TypeScript', Icon: '../../assets/images/skills/typescript.png' },
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
      ]
    }
  ]

}
