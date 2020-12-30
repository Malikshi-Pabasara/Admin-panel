import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';

export interface Mechanic{
  id: string;
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-mechanic-details',
  templateUrl: './mechanic-details.component.html',
  styleUrls: ['./mechanic-details.component.css']
})
export class MechanicDetailsComponent implements OnInit {

  title = 'Angular Search Using ng2-search-filter';
  searchText;
  mechanics: Mechanic[] = [
    { id : '1', name : 'mali', email : 'mali@gmail.com', password : '123' },
    { id : "12", name : "paba", email : "paba@gmail.com", password : "123" },
    { id : "8", name : "pabaya", email : "saku@gmail.com", password : "123" },
  ];
  constructor(public dialog:MatDialog) { }
  openDialog(){
    this.dialog.open(DialogOverviewExampleDialogComponent);
  }
    ngOnInit() {}

}
