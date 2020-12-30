import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../driver-details/driver';
import { DriverDetailsService } from '../driver-details/driver-details.service';
import { UserService } from './user.service';

export interface user{
  id: string;
  name: "";
  email: "";
  password: "";
}


@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.css']
})

export class DriverProfileComponent implements OnInit {

  userId: string;
  driver:Driver

  constructor(
    private driverDetailsService:DriverDetailsService,
    private route: ActivatedRoute,
    private router:Router,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
     this.driver = this.driverDetailsService.getSelectedDriver(this.userId)


    });


  }

  driverDetails(){
    this.router.navigate(['/driver'])
  }



}

