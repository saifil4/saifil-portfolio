import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {

  constructor(private router: Router) {
  }

  @Input() Project: any;

  public OnCardClick() {
    this.router.navigate(['/project-detail'], { queryParams: { name: this.Project.Name, id: this.Project.Id } });
  }

}
