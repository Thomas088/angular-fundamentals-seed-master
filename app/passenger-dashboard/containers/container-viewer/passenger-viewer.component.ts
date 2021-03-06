import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

@Component({

    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    template: `
    <div>
        {{ passenger | json }}
    </div>
    `
})

export class PassengerViewerComponent implements OnInit {

    passenger: Passenger;

    constructor(
        private passengerDashboardService: PassengerDashboardService
    ) {}


    ngOnInit() {
        this.passengerDashboardService
            .getPassenger(1)
            .subscribe((data: Passenger) => this.passenger = data);
    }

}