import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 days = ["SUN", "MON", "TUE", "WED", "THU","FRI","SAT"];

 weeks = [
   {
     "MON": '2',
     "TUE": '3',
     "WED": '4',
     "THU": '5',
     "FRI": '6',
     "SAT": '7',
     "SUN": '1',
   },
   {
    "MON": '9',
    "TUE": '10',
    "WED": '11',
    "THU": '12',
    "FRI": '13',
    "SAT": '14',
    "SUN": '8',
  },
  {
    "MON": '16',
    "TUE": '17',
    "WED": '18',
    "THU": '19',
    "FRI": '20',
    "SAT": '21',
    "SUN": '15',
  },
  {
    "MON": '23',
    "TUE": '24',
    "WED": '25',
    "THU": '26',
    "FRI": '27',
    "SAT": '28',
    "SUN": '22',
  },
  {
    "SUN": '29'
  }
 ]

  // trackDays(index: number, el:any): number {
  //   return el.id;
  // }
}
