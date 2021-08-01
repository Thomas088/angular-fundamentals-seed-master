import { NgModule } from "@angular/core"; 
import { CommonModule } from "@angular/common";

// Containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

// Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerViewerComponent } from './containers/container-viewer/passenger-viewer.component';

// service

import { PassengerDashboardService } from "./passenger-dashboard.service";
import { HttpModule } from "@angular/http";



@NgModule({

    declarations: [
        PassengerDashboardComponent,
        PassengerViewerComponent,
        // Components
        PassengerCountComponent,
        PassengerDetailComponent
    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    exports: [
        PassengerViewerComponent
    ],
    providers: [
        PassengerDashboardService
    ]

})
export class PassengerDashboardModule {



} 