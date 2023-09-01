import { Component } from '@angular/core';
import { Exercise } from '../models/exercise';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  public exercise: Exercise = {
    id: '',
    name: '',
    progression: '',
    range: '',
    sets: [],
  };

  constructor() {}
}
