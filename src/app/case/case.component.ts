import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {

  CoordX:number;
  CoordY:number;

  IsAlive:boolean;

  constructor(myCoordX:number, myCoordY:number, myIsAlive:boolean) {
    this.CoordX = myCoordX;
    this.CoordY = myCoordY;
    this.IsAlive = myIsAlive;
   }

  ngOnInit() {
  }

}
