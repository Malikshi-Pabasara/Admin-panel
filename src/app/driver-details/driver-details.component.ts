import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';

export interface Driver{
  id: string;
  name: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {
  title = 'Angular Search Using ng2-search-filter';
  searchText;
  drivers: Driver[] = [
    { id : '1', name : 'mali', email : 'mali@gmail.com', password : '123' },
    { id : "2", name : "paba", email : "paba@gmail.com", password : "123" },
    { id : "3", name : "saku", email : "saku@gmail.com", password : "123" },
  ];
  
  constructor(public dialog:MatDialog) {
   }
   openDialog(){
    this.dialog.open(DialogOverviewExampleDialogComponent);
  }
  
  ngOnInit() {
  }

}
