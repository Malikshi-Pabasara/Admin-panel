import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  user={};
  userId: string;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      this.getUsers(this.userId);
    });
  }

  getUsers(id): void {
    var x = this.userService.getUser(id);
    x.subscribe(function(result) {
      this.user.name=result.name;
      console.log(result);
    },
    function(error) {
      console.log('Error occured !!!!');
      console.log(error);
    })
  }
    
}

