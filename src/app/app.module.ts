import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';

import { MediatorService } from './mediator.service';
import { AnotherComponentComponent } from './another-component/another-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AnotherComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule
  ],
  providers: [MediatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
