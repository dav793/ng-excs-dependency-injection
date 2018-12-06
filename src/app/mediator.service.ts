import { Injectable } from '@angular/core';

import { BehaviorSubject, of } from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediatorService {

  conversaciones = {};

  constructor() {

    setTimeout(() => {
      console.log(this.conversaciones);
    }, 5000);

  }

  mandarValor(llave: string, valor: any) {

    if (!this.conversaciones[llave])
      this.conversaciones[llave] = new BehaviorSubject(null);

    this.conversaciones[llave].next(valor);

  }

  recibirValor(llave: string): BehaviorSubject<any> {

    if (!this.conversaciones[llave])
      this.conversaciones[llave] = new BehaviorSubject(null);

    return this.conversaciones[llave].pipe(
      switchMap(valor => {

        this.conversaciones[llave].unsubscribe();
        delete this.conversaciones[llave];

        return of(valor);
      })
    );

  }

}
