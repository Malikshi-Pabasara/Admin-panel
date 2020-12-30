import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import 'hammerjs';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { SparePartDetailsComponent } from './spare-part-details/spare-part-details.component';
import { MechanicDetailsComponent } from './mechanic-details/mechanic-details.component';
import { ServiceCenterDetailsComponent } from './service-center-details/service-center-details.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';
import { MechanicProfileComponent } from './mechanic-profile/mechanic-profile.component';
import { SparepartProfileComponent } from './sparepart-profile/sparepart-profile.component';
import { ServiceCenterProfileComponent } from './service-center-profile/service-center-profile.component';

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
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    RouterModule,
    RouterTestingModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
