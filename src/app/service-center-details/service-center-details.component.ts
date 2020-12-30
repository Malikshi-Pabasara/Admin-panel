import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';

export interface Service{
  id: string;
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-service-center-details',
  templateUrl: './service-center-details.component.html',
  styleUrls: ['./service-center-details.component.css']
})
export class ServiceCenterDetailsComponent implements OnInit {
  title = 'Angular Search Using ng2-search-filter';
  searchText;
  services: Service[] = [
    { id : '1', name : 'mali', email : 'mali@gmail.com', password : '123' },
    { id : "12", name : "paba", email : "paba@gmail.com", password : "123" },
    { id : "8", name : "pabaya", email : "saku@gmail.com", password : "123" },
  ];
  constructor(public dialog:MatDialog) { }
  openDialog(){
    this.dialog.open(DialogOverviewExampleDialogComponent);
  }
  ngOnInit() {
  }

}
