import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {

  summarys = [{
    title: "Total Vehicles",
    info: false,
  },
  {
    title: "Mileage Saarathi Vehicles",
    info: false,
  },
  {
    title: "Low Performing",
    info: true,
  },
  {
    title: "Average Performing",
    info: true,
  },
  {
    title: "High Performing",
    info: true,
  }

]

}
