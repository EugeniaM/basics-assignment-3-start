import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public detailsDisplayed = false;
  public actionLogs = [];

  toggleDisplayDetails() {
    this.detailsDisplayed = !this.detailsDisplayed;
    this.actionLogs.push(`Logged at ${new Date().toISOString()}`);
  }

  getColor(index: number): string{
    return index >= 4 ? 'blue' : '';
  }

}
