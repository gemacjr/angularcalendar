import { Component, OnInit } from '@angular/core';
import * as moment from "moment";
import * as Holidays from "date-holidays";

@Component({
  selector: 'app-delivery-closure',
  templateUrl: './delivery-closure.component.html',
  styleUrls: ['./delivery-closure.component.scss']
})
export class DeliveryClosureComponent implements OnInit {

  constructor() { }

  today = moment().calendar();

  months = ["JAN", "FEB", "MARCH", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"];
  days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  dayOfWeekFeb = [
    {
      "SUN": {"dateNumber": '',"isSelected":  false,"isDefault": true,"isPast": true},
      "MON": {"dateNumber": '',"isSelected": false,"isDefault": false,"isPast": true},
      "TUE": {"dateNumber": '',"isSelected": false,"isDefault": false, "isPast": true},
      "WED": {"dateNumber": '1',
        "isSelected":  true,
        "isDefault": false,
        "isPast": true
      },
      "THU": {
        "dateNumber": '2',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "FRI": {
        "dateNumber": '3',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "SAT": {
        "dateNumber": '4',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      }
    },
    {
      "SUN": {
        "dateNumber": '5',
        "isSelected": false,
        "isDefault": true,
        "isPast": true
      },
      "MON": {
        "dateNumber": '6',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "TUE": {
        "dateNumber": '7',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "WED": {
        "dateNumber": '8',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "THU": {
        "dateNumber": '9',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "FRI": {
        "dateNumber": '10',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "SAT": {
        "dateNumber": '11',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      }
    },
    {
      "SUN": {
        "dateNumber": '12',
        "isSelected": false,
        "isDefault": true,
        "isPast": true
      },
      "MON": {
        "dateNumber": '13',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "TUE": {
        "dateNumber": '14',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "WED": {
        "dateNumber": '15',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "THU": {
        "dateNumber": '16',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "FRI": {
        "dateNumber": '17',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "SAT": {
        "dateNumber": '18',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      }
    },
    {
      "SUN": {
        "dateNumber": '19',
        "isSelected": false,
        "isDefault": true,
        "isPast": true
      },
      "MON": {
        "dateNumber": '20',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "TUE": {
        "dateNumber": '21',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "WED": {
        "dateNumber": '22',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "THU": {
        "dateNumber": '23',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "FRI": {
        "dateNumber": '24',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "SAT": {
        "dateNumber": '25',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      }
    },
    {
      "SUN": {
        "dateNumber": '26',
        "isSelected": false,
        "isDefault": true,
        "isPast": true
      },
      "MON": {
        "dateNumber": '27',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "TUE": {
        "dateNumber": '28',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "WED": {
        "dateNumber": '29',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "THU": {
        "dateNumber": '30',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "FRI": {
        "dateNumber": '31',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "SAT": {
        "dateNumber": '',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      }
    }

  ]
  dayOfWeekJan = [
    {
      "SUN": {
        "dateNumber": '',
        "isSelected":  false,
        "isDefault": true,
        "isPast": true
      },
      "MON": {
        "dateNumber": '',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "TUE": {
        "dateNumber": '',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "WED": {
        "dateNumber": '1',
        "isSelected":  true,
        "isDefault": false,
        "isPast": true
      },
      "THU": {
        "dateNumber": '2',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "FRI": {
        "dateNumber": '3',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "SAT": {
        "dateNumber": '4',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      }
    },
    {
      "SUN": {
        "dateNumber": '5',
        "isSelected": false,
        "isDefault": true,
        "isPast": true
      },
      "MON": {
        "dateNumber": '6',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "TUE": {
        "dateNumber": '7',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "WED": {
        "dateNumber": '8',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "THU": {
        "dateNumber": '9',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "FRI": {
        "dateNumber": '10',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "SAT": {
        "dateNumber": '11',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      }
    },
    {
      "SUN": {
        "dateNumber": '12',
        "isSelected": false,
        "isDefault": true,
        "isPast": true
      },
      "MON": {
        "dateNumber": '13',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "TUE": {
        "dateNumber": '14',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "WED": {
        "dateNumber": '15',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "THU": {
        "dateNumber": '16',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "FRI": {
        "dateNumber": '17',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "SAT": {
        "dateNumber": '18',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      }
    },
    {
      "SUN": {
        "dateNumber": '19',
        "isSelected": false,
        "isDefault": true,
        "isPast": true
      },
      "MON": {
        "dateNumber": '20',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "TUE": {
        "dateNumber": '21',
        "isSelected": false,
        "isDefault": false,
        "isPast": true
      },
      "WED": {
        "dateNumber": '22',
        "isSelected": false,
        "isDefault": false,
        "isPast": false
      },
      "THU": {
        "dateNumber": '23',
        "isSelected": false,
        "isDefault": false,
        "isPast": false
      },
      "FRI": {
        "dateNumber": '24',
        "isSelected": false,
        "isDefault": false,
        "isPast": false
      },
      "SAT": {
        "dateNumber": '25',
        "isSelected": true,
        "isDefault": false,
        "isPast": false
      }
    },
    {
      "SUN": {
        "dateNumber": '26',
        "isSelected": false,
        "isDefault": true,
        "isPast": false
      },
      "MON": {
        "dateNumber": '27',
        "isSelected": true,
        "isDefault": false,
        "isPast": false
      },
      "TUE": {
        "dateNumber": '28',
        "isSelected": true,
        "isDefault": false,
        "isPast": false
      },
      "WED": {
        "dateNumber": '29',
        "isSelected": true,
        "isDefault": false,
        "isPast": false
      },
      "THU": {
        "dateNumber": '30',
        "isSelected": true,
        "isDefault": false,
        "isPast": false
      },
      "FRI": {
        "dateNumber": '31',
        "isSelected": false,
        "isDefault": false,
        "isPast": false
      },
      "SAT": {
        "dateNumber": '31',
        "isSelected": false,
        "isDefault": false,
        "isPast": false
      }
      
    }

  ]

 displayPreviousMonth = [];
 displayCurrentMonth = [];
 displayNextMonth = [];


  ngOnInit() {
    const dayOfWeek = new Date("08-01-2020").getDay();

    let hd = new Holidays();
    hd.init('US');
    console.log("Theses are the Holidays" + JSON.stringify(hd.getHolidays(2020)));

    // Monday '1' and Sunday '7'
    // const date = moment("08-01-2020"); // Thursday Feb 2015
    // const usingMoment_1 = date.day();
    // const usingMoment_2 = date.isoWeekday();
    // let dayOfName = moment().isoWeekday(3).format();
    // var begin = moment().startOf('month').format('MM-DD-YYYY')
    // var end = moment().format("YYYY-MM-") + moment().daysInMonth();
     var daysInMonth = moment("02-2020", "MM-YYYY").daysInMonth();
    // console.log("This is th day " + moment().weekday());
    // console.log("Begin " + begin)
    // console.log("End " + end)
     console.log("Days is month " + daysInMonth); 
    console.log("August started on this day of week " + getDayOFWeek('08-01-2020'))
    console.log("The number of days is month " + getNumberOFDaysInMonth("07", "2020"));
    //1st month is previuosMonth, currentMonth, nextMonth arrsy for display

  }

  // 1. display month based on currrent day and 14 days minus
  // 2. displayPrevoiusMonth[], displayCurrentMonth[], displayNextMonth[]
  // 3. generate the 3 months for display
  // 4. getCurrentDate is in displayPrevoiusMonth[], currentDate +1 is in displayCurrentMonth[], currentDate + 1

  // Arrow month selection
  // 1. get current month arrays -> displayPrevoiusMonth[], displayCurrentMonth[], displayNextMonth[]
  // 2. If arrow left - 1 month, If arrow right + 1 month

  public getNumberOfDaysFromCurrentDate(dateProvided) {

    let holidayDays = ["01/01/2020", "05/25/2020", "07/04/2020", "09/07/2020", "11/26/2020", "12/25/2020"]
    let date = new Date();
    let dayIs14FromHoliday = true;

    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    let todayDateString = (m <= 9 ? '0' + m : m) + '/' + (d <= 9 ? '0' + d : d) + '/' + y;

    let pastDate = Date.now() + -14 * 24 * 3600 * 1000;
    let pastDateMinus14 = new Date(pastDate);
    let past14Date = pastDateMinus14.toLocaleDateString;
    let dPast = pastDateMinus14.getDate();
    let mPast = pastDateMinus14.getMonth() + 1;
    let yPast = pastDateMinus14.getFullYear();

    let pastDateString = (mPast <= 9 ? '0' + mPast : mPast) + '/' + (dPast <= 9 ? '0' + dPast : dPast) + '/' + yPast;

    holidayDays.forEach(element => {
      if (element === pastDateString) {
        dayIs14FromHoliday = true;
      } else {
        dayIs14FromHoliday = false;
      }
    });


  trackDays(index: number, el:any): number {
    return el.id;
  }
}
}

function buildCalendar(year){
  let months = ["JAN", "FEB", "MARCH", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"];
  let yearData = [];
  months.forEach(month => {
    yearData.push(buildDayPref(month, year));
  })

  return yearData;
}

function buildDayPref(month, year){
let dateNumber;
let isSelected;
let isDefault;
let isPast;

let currentMonth = month;
let startDateOfMonth; //What day does the first of the month
let numberOfDaysInMonth;
  
 let monthBuilder = [
    {
      "SUN": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "MON": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "TUE": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "WED": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "THU": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "FRI": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "SAT": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast}
    },
    {
      "SUN": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "MON": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "TUE": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "WED": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "THU": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "FRI": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "SAT": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast}
    },
    {
      "SUN": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "MON": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "TUE": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "WED": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "THU": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "FRI": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "SAT": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast}
    },
    {
      "SUN": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "MON": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "TUE": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "WED": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "THU": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "FRI": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "SAT": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast}
    },
    {
      "SUN": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "MON": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "TUE": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "WED": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "THU": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "FRI": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast},
      "SAT": { "dateNumber": dateNumber, "isSelected": isSelected, "isDefault": isDefault, "isPast": isPast}
    },
    
  ]

  return monthBuilder;

}

function getNumberOFDaysInMonth(month, year){
  let numberOFDaysInMonth;
  let monthAndYear = month + "-" + year;
  numberOFDaysInMonth = moment(monthAndYear, "MM-YYYY").daysInMonth();
  return numberOFDaysInMonth;

}

function getDayOFWeek(dateString){
  let weekDay;
  let nameOfDay = new Date(dateString).getDay();
  switch(nameOfDay) {
    case 0:
      weekDay = 'SUN'
    break;
    case 1:
      weekDay = 'MON'
    break;
    case 2:
      weekDay = 'TUE'
    break;
    case 3:
      weekDay = 'WED'
    break;
    case 4:
      weekDay = 'THU'
    break;
    case 5:
      weekDay = 'FRI'
    break;
    default:
      weekDay = 'SAT'

  }
  return weekDay;
}


