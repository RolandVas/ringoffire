import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private router: Router) { } /* wenn man andere Seiten einbinden muss man einschreiben */

  ngOnInit(): void {
  }

/* open game */
  newGame() {
    let game = new Game();
    this.firestore
    .collection('games')
    .add(game.toJson())
    .then( (gameInfo: any) => {
      this.router.navigateByUrl('/game/' + gameInfo.id)
    });
    
  }

}