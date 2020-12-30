import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersUrl = 'api/users';

  dummyUsers = [
    { id : '1', name : 'mali', email : 'mali@gmail.com', password : '123' },
    { id : "2", name : "paba", email : "paba@gmail.com", password : "123" },
    { id : "3", name : "saku", email : "saku@gmail.com", password : "123" },
  ];
/*
  dummyDrivers = [
    { id : '1',
      user : { id : '1', name : 'mali', email : 'mali@gmail.com', password : '123' }
    },
    { id : '2',
      user: { id : "2", name : "paba", email : "paba@gmail.com", password : "123" }
    },
  ];

  dummyMechanics = [
    { id : '1',
      user : { id : "2", name : "paba", email : "paba@gmail.com", password : "123" }
    },
  ];
*/
  constructor( private http: HttpClient) {
  }

  getUser(id){
    // return this.http.get<any>(this.usersUrl + "/"+id);

    return of(this.dummyUsers.find((dummyUser) => dummyUser.id == id));
  }

  getUsers(){
    // return this.http.get<any[]>(this.usersUrl);

    return of(this.dummyUsers);
  }

}
