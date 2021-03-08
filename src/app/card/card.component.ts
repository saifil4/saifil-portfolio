import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {

  constructor(private router: Router) {
  }

  public SelectedCardId: number = null;

  @Input() Project: any;

  public OnCardClick() {
    this.router.navigate(['/agile-board'], { queryParams: { name: this.Project.Name, id: this.Project.Id } });
  }

}
