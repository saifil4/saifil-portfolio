import { Component, OnInit } from '@angular/core';
import { ProjectListComponent } from '../project-list/project-list.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'Home';
  constructor() { }

  public Skills: Array<any> = [
    { Name: 'React', Alt: 'React Icon', Icon: '../../assets/images/skills/react.png' },
    { Name: 'Angular', Alt: 'Angular Icon', Icon: '../../assets/images/skills/angular.png' },
    { Name: 'HTML', Alt: 'HTML Icon', Icon: '../../assets/images/skills/html.png' },
    { Name: 'CSS', Alt: 'CSS Icon', Icon: '../../assets/images/skills/css.png' },
    { Name: 'JavaScript', Alt: 'JavaScript Icon', Icon: '../../assets/images/skills/javascript.png' },
    { Name: 'TypeScript', Alt: 'TypeScript Icon', Icon: '../../assets/images/skills/typescript.png' },
    { Name: 'BootStrap', Alt: 'BootStrap Icon', Icon: '../../assets/images/skills/bootstrap.png' },
    { Name: 'MySQL', Alt: 'MySQL Icon', Icon: '../../assets/images/skills/mysql.png' },
    { Name: 'Redux', Alt: 'Redux Icon', Icon: '../../assets/images/skills/redux.png' },
    { Name: 'Adobe XD', Alt: 'Adobe XD Icon', Icon: '../../assets/images/skills/adobe-xd.svg' },
    { Name: 'GitHub', Alt: 'GitHub Icon', Icon: '../../assets/images/skills/github.png' },
    { Name: 'SASS', Alt: 'SASS Icon', Icon: '../../assets/images/skills/sass.png' },
    { Name: 'Wireframing', Alt: 'Wireframing Icon', Icon: '../../assets/images/skills/wireframing.png' }
  ]
}
