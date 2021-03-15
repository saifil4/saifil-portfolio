import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  @Input() Skills: Array<any>;
  @Input() IsHomePage: boolean;

  ngOnInit(): void {
    console.log(this.Skills);
  }

}