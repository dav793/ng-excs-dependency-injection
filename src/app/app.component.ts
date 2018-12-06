import {Component, OnInit} from '@angular/core';

import { MediatorService } from './mediator.service';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  envName = environment.envName;

  valorCopia: number;

  constructor(private mediatorService: MediatorService) {}

  ngOnInit() {

    setTimeout(() => {
      this.mediatorService.recibirValor("user-app").subscribe((valor: number) => {
        this.valorCopia = valor;
      });
    }, 2000);

  }

}
