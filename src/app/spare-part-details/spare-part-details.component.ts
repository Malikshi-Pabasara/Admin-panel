import { Component, OnInit } from '@angular/core';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import {MatDialog } from '@angular/material';
export interface Spare{
  id: string;
  name: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-spare-part-details',
  templateUrl: './spare-part-details.component.html',
  styleUrls: ['./spare-part-details.component.css']
})
export class SparePartDetailsComponent implements OnInit {
  title = 'Angular Search Using ng2-search-filter';
  searchText;
  spares: Spare[] = [
    { id : '1', name : 'sandu', email : 'mali@gmail.com', password : '123' },
    { id : "5", name : "tutu", email : "paba@gmail.com", password : "123" },
    { id : "8", name : "tharu", email : "saku@gmail.com", password : "123" },
  ];
  constructor(public dialog:MatDialog) { }
  openDialog(){
    this.dialog.open(DialogOverviewExampleDialogComponent);
  }
  ngOnInit() {
  }

}
