import { Component, OnInit } from '@angular/core';
import { GuidedTour, Orientation, GuidedTourService } from 'ngx-guided-tour';

@Component({
  selector: 'app-evelo-features',
  templateUrl: './evelo-features.component.html',
  styleUrls: ['./evelo-features.component.scss']
})
export class EveloFeaturesComponent implements OnInit {
 
  step3 = true;
  step4 = true;
  step1 =true;
  step5 =true;
  public dashboardTour: GuidedTour = {
    tourId: 'purchases-tour',
    useOrb: false,
    skipCallback: (stepSkippedOn: number) => {
      console.log('skip callback called');

    },
    completeCallback: () => {
      console.log('Complete callback called');


    },
    steps: [
      {
        title: 'evelo step 1',
        selector: '.demo-title',
        content: 'Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!',
        orientation: Orientation.Bottom,
        action: () => {
        
        }
      },
      
      {
        title: 'evelo step 2',
        selector: '.tour-middle-content',
        content: 'Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!',
        orientation: Orientation.Left,
        action: () => {
          this.step3 = true;
        },
      },
      
      {
        title: 'evelo step 3',
        selector: '.tour-scroll',
        content: 'Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!',
        orientation: Orientation.Top,
        action: () => {
          this.step4 = true;
 
        },
      },
      {
        title: 'evelo step 4',
        selector: '.tour-scrollSecond',
        content: 'Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!',
        orientation: Orientation.Right,
        action: () => {
          this.step1 = true;
 
        },
      },

    ]
  };

  constructor(
    private guidedTourService: GuidedTourService,

  ) {
  }
  ngOnInit(): void {
  }
  public restartTour(): void {
    this.guidedTourService.startTour(this.dashboardTour);
}

}
