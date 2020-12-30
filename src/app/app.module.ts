import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { SparePartDetailsComponent } from './spare-part-details/spare-part-details.component';
import { MechanicDetailsComponent } from './mechanic-details/mechanic-details.component';
import { ServiceCenterDetailsComponent } from './service-center-details/service-center-details.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';

import { DriverProfileComponent } from './driver-profile/driver-profile.component';
import { MechanicProfileComponent } from './mechanic-profile/mechanic-profile.component';
import { SparepartProfileComponent } from './sparepart-profile/sparepart-profile.component';
import { ServiceCenterProfileComponent } from './service-center-profile/service-center-profile.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    DashbordComponent,
    DriverDetailsComponent,
    SparePartDetailsComponent,
    MechanicDetailsComponent,
    ServiceCenterDetailsComponent,
    DialogOverviewExampleDialogComponent,
    DriverProfileComponent,
    MechanicProfileComponent,
    SparepartProfileComponent,
    ServiceCenterProfileComponent
  ],
  entryComponents:[DialogOverviewExampleDialogComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterTestingModule,
    Ng2SearchPipeModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
