import { Component, OnInit } from '@angular/core';
import { CaseComponent } from '../case/case.component';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})
export class GameTableComponent implements OnInit {
  gameCasesList: Array<CaseComponent>;
  Abscisse: number;
  Ordonnee: number;

  displayTable: string;

  constructor() {
    this.Abscisse = 10;
    this.Ordonnee = 10;
    this.gameCasesList = new Array<CaseComponent>();

    this.InitializeTable();

    this.gameCasesList.find(x => x.CoordX == 4 && x.CoordY == 6).IsAlive = true;
    this.gameCasesList.find(x => x.CoordX == 4 && x.CoordY == 7).IsAlive = true;
    this.gameCasesList.find(x => x.CoordX == 3 && x.CoordY == 7).IsAlive = true;
    this.gameCasesList.find(x => x.CoordX == 2 && x.CoordY == 7).IsAlive = true;
    this.gameCasesList.find(x => x.CoordX == 5 && x.CoordY == 8).IsAlive = true;
    this.gameCasesList.find(x => x.CoordX == 5 && x.CoordY == 9).IsAlive = true;

    this.DisplayGameTable();
   }


  ngOnInit() {
  }

  InitializeTable() {
    for(let i = 0; i < this.Abscisse; i++) {
      for(let j = 0; j < this.Ordonnee; j++) {
        let newCase = new CaseComponent(i,j,false);
        this.gameCasesList.push(newCase);
      }
    }  
  }

  DisplayGameTable() {
    this.displayTable = '<table>';

    for(let i = 0; i < this.Abscisse; i++) {
      this.displayTable += '<tr>';
      for(let j = 0; j < this.Ordonnee; j++) {
        let foundCase = this.gameCasesList.find(x => x.CoordX == i && x.CoordY == j);
        if(foundCase != null) {
          this.displayTable += '<td>'
          if(this.gameCasesList.find(x => x.CoordX == i && x.CoordY == j).IsAlive == true)
          {
            this.displayTable += '*';
          } else {
            this.displayTable += '.';
          }
        }
      }

      this.displayTable += '</tr>'
    }

  }

}
