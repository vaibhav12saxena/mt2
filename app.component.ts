//importing component module from 2angula/core folder
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //used to call in html file, this works as an tag
  templateUrl: './app.component.html', //html page corresponding to this component
  styleUrls: ['./app.component.css'] //css file
  
})
//Defining class
//using export so that we can use this class outside
export class AppComponent {
   
}

