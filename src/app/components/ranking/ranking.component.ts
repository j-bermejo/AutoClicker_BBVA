import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/objects/Player';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  public players: Player[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.players = JSON.parse(localStorage.getItem('users') || "[]");
    }

    public exit() {
      this.router.navigate(['/']);
    }
}
