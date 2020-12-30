import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MechanicDetailsComponent } from './mechanic-details/mechanic-details.component';
import { MechanicProfileComponent } from './mechanic-profile/mechanic-profile.component';
import { ServiceCenterDetailsComponent } from './service-center-details/service-center-details.component';
import { ServiceCenterProfileComponent } from './service-center-profile/service-center-profile.component';
import { SparePartDetailsComponent } from './spare-part-details/spare-part-details.component';
import { SparepartProfileComponent } from './sparepart-profile/sparepart-profile.component';


const routes: Routes = [
  {path: '',  component:LoginComponent },
  {path:'dashboard' , component:DashbordComponent},
  {path:'main' , component:MainComponent},
  {path:'driver' , component:DriverDetailsComponent},
  {path:'mechanic' , component:MechanicDetailsComponent},
  {path:'service' , component:ServiceCenterDetailsComponent},
  {path:'spare' , component:SparePartDetailsComponent},
  {path:'Dprofile/:id' , component:DriverProfileComponent},
  {path:'Mprofile/:id' , component:MechanicProfileComponent},
  {path:'spprofile/:id' , component:SparepartProfileComponent},
  {path:'serprofile/:id' , component:ServiceCenterProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
