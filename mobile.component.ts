import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service'; //importing AppService class
@Component({
  selector: 'app-table',
  templateUrl: './mobile.component.html',
 })
export class MobileComponent implements OnInit {

  //constructor that takes argument of appservice types
  constructor(private service:AppService) { } 
  info:any;
  index:number;

  i:number;


  //this function is called when the page is loaded so will load the data
  //this dasta is subscribed from the service and stored in a variable named info
  ngOnInit() {
    this.service.getfile('src/app/data/mobile.json').subscribe(data=>{this.info=data;
    console.log(this.info)});
  }
  //t is the index of the row that is to be deleted
  Delete(t){
    this.info.splice(t,1);   //inbuit function to delete and element from array
    this.index=t+1;
    alert("Deleted row number "+(this.index))
  }
 
 //This function is called when we need to sort bt id
 //takes 2 argument and sorts the array according to bubblesort
  sortId(){
    alert("Sorted according to Id");
    this.info.sort(function(a,b){
      return(''+a.mobId).localeCompare(b.mobId)
    })
  }
  //This function is called when we need to sort by name  
 //takes 2 argument and sorts the array according to bubblesort

  sortName(){
    alert("Sorted according to Name");
    this.info.sort(function(a,b){
      return(''+a.mobName).localeCompare(b.mobName)
    })
  }
  //This function is called when we need to sort by price
 //takes 2 argument and sorts the array according to bubblesort

  sortPrice(){
    alert("Sorted according to Price");
    this.info.sort(function(a,b){
      return(''+a.mobPrice).localeCompare(b.mobPrice)
    })
  }
}


