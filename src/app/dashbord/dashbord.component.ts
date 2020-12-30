import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToDriver(){
    this.router.navigate(['/driver'])
  }
  goToMechanic(){
    this.router.navigate(['/mechanic'])
  }
  goToSparepartShop(){
    this.router.navigate(['/spare'])
  }
  goToServiceCenter(){
    this.router.navigate(['/service'])
  }

}

