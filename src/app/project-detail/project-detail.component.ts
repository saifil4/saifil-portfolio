import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectListComponent } from '../project-list/project-list.component';
import { SkillsComponent } from '../skills/skills.component';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
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
    this.route.queryParams.subscribe((params) => {
      this.setProject(parseInt(params['id']));
      window.scroll(0, 0);
    });
  }

  private setProject(projectid: number) {
    this.Project = this.ProjectListData.find(
      (project) => project.Id === projectid
    );
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
        {
          Name: 'JavaScript',
          Icon: '../../assets/images/skills/javascript.png',
        },
        { Name: 'BootStrap', Icon: '../../assets/images/skills/bootstrap.png' },
        { Name: 'React Beautiful dnd', Icon: null },
      ],
    },
    {
      Id: 2,
      Name: 'Covid-Tracker',
      GitLink: 'https://github.com/saifil4/covid-tracker',
      LiveLink: 'https://covid-tracker-jade-nu.vercel.app/',
      ImageSrc: '../../assets/images/covid-tracker/poster-image.svg',
      Description: `Created a COVID-19 tracker by integrating disease.sh API to visualize global stats and vaccination efforts in different parts of the world.`,
      TechStack: [
        { Name: 'React', Icon: '../../assets/images/skills/react.png' },
        { Name: 'HTML', Icon: '../../assets/images/skills/html.png' },
        { Name: 'CSS', Icon: '../../assets/images/skills/css.png' },
        {
          Name: 'JavaScript',
          Icon: '../../assets/images/skills/javascript.png',
        },
        { Name: 'BootStrap', Icon: '../../assets/images/skills/bootstrap.png' },
        { Name: 'Leaflet JS', Icon: null },
        { Name: 'Disease.sh API', Icon: null },
      ],
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
        {
          Name: 'TypeScript',
          Icon: '../../assets/images/skills/typescript.png',
        },
        { Name: 'BootStrap', Icon: '../../assets/images/skills/bootstrap.png' },
      ],
    },
    {
      Id: 4,
      Name: 'React Portfolio',
      GitLink: 'https://github.com/saifil4/my-portfolio-react',
      LiveLink: 'https://my-portfolio-react-oec7j58mw-saifil4.vercel.app/',
      ImageSrc: '../../assets/images/portfolio-react/splash.png',
      Description:
        'I built my first portfolio back in 2020 in Angular. Since then, I have learned a lot of things and improved my skills drastically. So I am currently working on migrating my old portfolio to React, while refreshing the UI making it more clean and adding some animations.',
      TechStack: [
        { Name: 'React', Icon: '../../assets/images/skills/react.png' },
        { Name: 'Tailwind', Icon: '../../assets/images/skills/tailwind.svg' },
        {
          Name: 'JavaScript',
          Icon: '../../assets/images/skills/javascript.png',
        },
        { Name: 'Recoil', Icon: '../../assets/images/skills/recoil.svg' },
      ],
    },
    {
      Id: 5,
      Name: 'Lines and Boxes',
      GitLink: 'https://github.com/saifil4/dotsandboxes',
      LiveLink: 'https://dotsandboxes.vercel.app/',
      ImageSrc: '../../assets/images/lines-and-boxes/splash.png',
      Description: 'Lines and boxes is a fun little game you can play with your friends. It comprises of lines you can click to enable them, and the line which closes a box is considered captured which awards 1 point to the player',
      TechStack: [
        { Name: 'React', Icon: '../../assets/images/skills/react.png' },
        { Name: 'Redux', Icon: '../../assets/images/skills/redux.png' },
        { Name: 'HTML', Icon: '../../assets/images/skills/html.png' },
        { Name: 'CSS', Icon: '../../assets/images/skills/css.png' },
        {
          Name: 'JavaScript',
          Icon: '../../assets/images/skills/javascript.png',
        },
        { Name: 'BootStrap', Icon: '../../assets/images/skills/bootstrap.png' },
      ],
    },
  ];
}
