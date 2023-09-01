import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public units: string[] = [];
  public reorderIsEnabled = false;
  // public archivedunitsPage = ArchivedunitsPage;

  constructor() {
    this.units = ['apple', 'banana', 'kiwi'];
  }

  addUnit() {
    this.units.push();
  }

  editUnit(unit: any) {
    console.log(unit);
  }

  deleteUnit(unit: any) {
    console.log(unit);
  }
}
