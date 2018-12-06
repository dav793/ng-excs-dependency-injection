import { Component, OnInit } from '@angular/core';

import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-another-component',
  templateUrl: './another-component.component.html',
  styleUrls: ['./another-component.component.css']
})
export class AnotherComponentComponent implements OnInit {

  valorCopia: string;

  constructor(private mediatorService: MediatorService) { }

  ngOnInit() {

    this.mediatorService.recibirValor("user-another").subscribe((valor: string) => {
      this.valorCopia = valor;
    });

  }

}
