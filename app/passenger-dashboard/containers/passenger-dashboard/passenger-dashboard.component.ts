import { Component, OnInit } from "@angular/core";
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
    
    <div>
        <!-- Stateless components -->
        <passenger-count
        [items]="passengers">
        </passenger-count>

        <div *ngFor="let passenger of passengers;">
            {{ passenger.fullName }}
        </div>

        <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)">
        </passenger-detail>

    </div>
    `
})

export class PassengerDashboardComponent implements OnInit {

    name: string = ''

    passengers: Passenger[];

    constructor(
        private passengerService: PassengerDashboardService
    ) {}

    ngOnInit() {
        this.passengerService
        .getPassengers()
        .subscribe((data: Passenger[]) => this.passengers = data);
      } 

    handleBlur(event: any) {
        this.name = event.target.value;
        console.log(this.name);
        console.log('event : ', event);
    }

    handleChange(value: string) {
        this.name = value;
    }

    handleClick(value: string) {
        console.log(value);
    }

    handleRemove(event: Passenger) {

        this.passengerService
        .removePassenger(event)
        .subscribe((data: Passenger) => {
            this.passengers = this.passengers.filter((passenger: Passenger) => {
                return passenger.id !== event.id;
           });
        });
    }

    handleEdit(event: Passenger) {

        this.passengerService
        .updatePassenger(event)
        .subscribe((data: Passenger) => {
            this.passengers = this.passengers.map((passenger: Passenger) => {
                if(passenger.id === event.id) {
                    passenger = Object.assign({}, passenger, event);
                }
                return passenger;
            });

        });
  
    }


}