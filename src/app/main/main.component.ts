import { Component, OnInit } from '@angular/core';
export interface Employee{
  id: string;
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  employees: Employee[] = [
    { id : '1', name : 'mali', email : 'mali@gmail.com', password : '123' },
    { id : "1", name : "paba", email : "paba@gmail.com", password : "123" },
    { id : "1", name : "lali", email : "lali@gmail.com", password : "123" },
  ];
  
  
  constructor() { }

  ngOnInit() {
  }

}
