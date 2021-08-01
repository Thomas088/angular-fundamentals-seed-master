import { Passenger } from './models/passenger.interface';
import { Injectable } from "@angular/core";

import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map"
import "rxjs/add/operator/toPromise"
import "rxjs/add/operator/catch"
import "rxjs/add/observable/throw"

const PASSENGER_API: string = 'api/passengers'; 

@Injectable()
export class PassengerDashboardService {

 constructor(private http: Http) {
    // console.log(this.http);
 }


 getPassengers(): Observable<Passenger[]> /*: Promise<Passenger[]> */  { 
    
    return this.http
    .get(PASSENGER_API)
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error.json()))

    // Promesse
    // return this.http
    // .get(PASSENGER_API)
    // .toPromise()
    // .then((response: Response) => response.json());

 }

 getPassenger(id: number) {
   return this.http
   .get(`${PASSENGER_API}/${id}`)
   .map((response: Response) => response.json())
   .catch((error: any) => Observable.throw(error.json()))
 }

 updatePassenger(passenger: Passenger): Observable<Passenger> /*: Promise<Passenger[]> */ { 

     let headers = new Headers({
         'Content-type' : 'application/json'
     });

     let options = new RequestOptions({
         headers: headers
     })

    return this.http
    .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error.json()))

    // return this.http
    // .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
    // .toPromise()
    // .then((response: Response) => response.json());
 }

 removePassenger(passenger: Passenger): Observable<Passenger> /*: Promise<Passenger[]> */  { 

    return this.http
    .delete(`${PASSENGER_API}/${passenger.id}`)
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error.json()))

    // return this.http
    // .delete(`${PASSENGER_API}/${passenger.id}`)
    // .toPromise()
    // .then((response: Response) => response.json());
 }

}