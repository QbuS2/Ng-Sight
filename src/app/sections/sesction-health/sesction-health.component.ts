import { Server } from './../../shared/server';
import { Component, OnInit } from '@angular/core';

const SAMPLE_SERVERS = [
  { id: 1, name: 'dev-web', isOnline: true },
  { id: 2, name: 'dev-mail', isOnline: false },
  { id: 3, name: 'prod-web', isOnline: true },
  { id: 4, name: 'prod-mail', isOnline: true }
];

@Component({
  selector: 'app-sesction-health',
  templateUrl: './sesction-health.component.html',
  styleUrls: ['./sesction-health.component.css']
})
export class SesctionHealthComponent implements OnInit {

  constructor() { }

  servers: Server[] = SAMPLE_SERVERS;

  ngOnInit() {
  }

}
