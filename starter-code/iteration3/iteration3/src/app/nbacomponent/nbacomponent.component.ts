import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nbacomponent',
  templateUrl: './nbacomponent.component.html',
  styleUrls: ['./nbacomponent.component.css']
})
export class NbacomponentComponent implements OnInit {
  title:string = 'NBZ Champs';

  arrayOfChamps: Array<any> = [
    {
      year: 1771,
      team: 'Flint',
      championUrl: 'https://www.spreadshirt.com/image-server/v1/mp/designs/11637207,width=178,height=178/flint-tropics.png',
      players: []
    }, {
      year: 1772,
      team: 'Tropics',
      championUrl: 'https://www.spreadshirt.com/image-server/v1/mp/designs/11637207,width=178,height=178/flint-tropics.png',
      players: []
    }, {
      year: 1773,
      team: 'Tropical',
      championUrl:'https://www.spreadshirt.com/image-server/v1/mp/designs/11637207,width=178,height=178/flint-tropics.png',
      players: []
    }, {
      year: 1774,
      team: 'Flint Tropics',
      championUrl: 'https://www.spreadshirt.com/image-server/v1/mp/designs/11637207,width=178,height=178/flint-tropics.png',
      players: ['playr1', 'play2', 'player3']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
