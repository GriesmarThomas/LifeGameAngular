import { Component } from '@angular/core';
import { GameTableComponent } from './game-table/game-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifeGameApp';
  gameTable = new GameTableComponent();
}
