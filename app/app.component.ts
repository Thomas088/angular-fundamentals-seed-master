import { Component } from '@angular/core'



@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `

  <div class="app">

    <!--  <input type="text" [value]="name" (input)="handleChange($event.target.value)"> -->
    
    <!-- <button (click)="handleClick(username.value)">Change name</button> -->

    <!-- #username => Reference l'element DOM (ici l'input) -->
    <!-- <input type="text" #username>  -->

    <!-- Forme canonique du two-way data binding [(ngModel)] -->
    <!-- <input type="text" [ngModel]="name" (ngModelChange)="handleChange($event)"> -->

    <!-- <input type="text" [(ngModel)]="name"> -->

    <!-- <div *ngIf="name.length">
    Searching for... {{name}}
    </div> -->

    <!-- Le ngIf genere un ng-template (Anciennement <template> - TODO: revoir les web components)  -->

    <!-- 
      <ng-template>
        <div>
          Searching for... {{name}}
        </div>
      </ng-template> 
    -->
  

    <!--Forme canonicale -->
    <!-- <ul>
      <template ngFor let-passenger let-i="index" [ngForOf]="passengers">
        <li>
          {{ i }}: {{ passenger.fullName}}
        </li>
      </template>
    </ul> -->

  <!-- version d'usage -->
    <!-- <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          {{ i }}: {{ passenger.fullName}}
        </li>
    </ul> -->

    <!-- ng-class -->

    <!-- <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
          [class.checked-in]="passenger.checkedIn"> </span>
          {{ i }}: {{ passenger.fullName}}
        </li>
    </ul> -->

    <!-- <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
          [ngClass]="{
            'checked-in': passenger.checkedIn,
            'checked-out': !passenger.checkedIn
          }"> </span>
          {{ i }}: {{ passenger.fullName}}
        </li>
    </ul> -->

    <!-- ng-style -->
    <!-- [style] => element.style -->

    <!-- <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
          [style.backgroundColor]="(passenger.checkedIn ? '#2ecc71' : '#c0392b')"></span>
          {{ i }}: {{ passenger.fullName}}
        </li>
    </ul> -->
    
    <!-- <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
          [ngStyle]="{ 
            backgroundColor: (passenger.checkedIn ? '#2ecc71' : '#c0392b')
        }"></span>
          {{ i }}: {{ passenger.fullName}}
        </li>
    </ul> -->

    <!-- Pipes -->

    <!-- <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
          [ngStyle]="{ 
            backgroundColor: (passenger.checkedIn ? '#2ecc71' : '#c0392b')
        }"></span>
          {{ i }}: {{ passenger.fullName}}
          <p>{{ passenger | json }}</p>
          <div class="date">
            Check in date: {{ passenger.checkInDate | date: 'yMMMM' }}
          </div>
        </li>
    </ul> -->

    <!-- safe navigation operator => ? -->

    <!-- <passenger-dashboard></passenger-dashboard> -->

    <passenger-viewer></passenger-viewer>

  </div>

  `
})

export class AppComponent {


} 