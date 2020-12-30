import { Injectable } from '@angular/core';
import { Driver } from './driver';

@Injectable({
  providedIn: 'root'
})
export class DriverDetailsService {

  constructor() { }

  drivers:Driver[] = [

    { id : '1', name : 'mali', email : 'mali@gmail.com', password : '123' },
    { id : "2", name : "paba", email : "paba@gmail.com", password : "123" },
    { id : "3", name : "saku", email : "saku@gmail.com", password : "123" },

  ]

  getAllDrivers(){
    return [...this.drivers]
  }

  getSelectedDriver(id:string){
    const driver = this.drivers.find(driver=>driver.id === id)
    return driver;

  }
}
