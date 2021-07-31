import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';


@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template : `
    <div>
        <span class="status"
              [ngStyle]="{ backgroundColor: (detail.checkedIn ? '#2ecc71' : '#c0392b') }"
              [class.checked-in]="detail.checkedIn">
        </span>
                <div *ngIf="editing">
                  <input 
                        type="text" 
                        [value]="detail.fullName"
                        (input)="onNameChange(name.value)"
                        #name>      
                </div>
                <div *ngIf="!editing">
                    {{ detail.fullName}}
                </div>
                
                <!-- <p>{{ detail | json }}</p> -->
                <div class="date">
                    Check in date: {{ detail.checkInDate  ? (detail.checkInDate | date: 'yMMMM'| uppercase) : 'not checked in'}}
                </div>
                <div class="children">
                    <!-- use the operator = children? -->
                    Children: {{ detail.children?.length || 'No children' }}
            </div>
            <button (click)="toggleEdit()">
                {{editing ? 'Done' : 'Edit' }}
            </button>
            <button (click)="onRemove()">
                Remove
            </button>
    </div>
    `
})

export class PassengerDetailComponent implements OnChanges {  
    
   @Input() detail: Passenger;
   
   editing: boolean = false;

   @Output() edit: EventEmitter<any> = new EventEmitter();
   @Output() remove: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnChanges(changes) {

        if(changes.detail) {
            this.detail = Object.assign({}, changes.detail.currentValue)
        }
    }


    onNameChange(value: string) {
        this.detail.fullName = value;

    }

    toggleEdit() {

        if(this.editing) {
            this.edit.emit(this.detail);
        }
        
        this.editing = !this.editing;
    }

    onRemove() {
        this.remove.emit(this.detail);
    }



}