import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http' //imported for service
import { AppComponent } from './app.component';
import { MobileComponent } from './table/mobile.component'; //importing main component
import {FormsModule} from '@angular/forms'   //ng model is a part of angular5 so importing it

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
