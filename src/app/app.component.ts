import {Component, ViewChild} from '@angular/core';
import {MatStepper} from '@angular/material/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /*title = 'ui-uci';
  Appropriateness = [
    {
      text: 'No Hate speech, Abuse, Violence, Profanity',
      checks: false
    },
    {
      text: 'No Sexual content, Nudity or Vulgarity',
      checks: false
    },
    {
      text: 'No Discrimination or Defamation',
      checks: false
    },
    {
      text: 'Is suitable for children',
      checks: false
    }
  ];*/
  MAX_STEP = 4;
  totalSteps = 8;
  page = 0;
  step = 0;
  minStepAllowed = 0;
  maxStepAllowed = this.MAX_STEP - 1;
  totalPages = Math.ceil(this.totalSteps / this.MAX_STEP);
  @ViewChild('stepper') private myStepper: MatStepper;

  constructor() {}

  // ngOnInit() {}

  // ngAfterViewInit() {}

  paginatorBack() {}

  paginatorNext() {}

  goBack() {}
  goForward() {}

  stepSelectionChange() {}
}
