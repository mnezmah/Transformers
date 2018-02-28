import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { Vehicle } from './vehicle';
import { MessageService } from './message.service';
import { InMemoryDataService } from './in-memory-data.service';
@Injectable()
export class VehicleService {
	private vehicleGroupUrl  = "api/vehicleGroup";
  private vehicleTypeUrl = "api/vehicleType";
  private vehicleModelUrl = "api/vehicleModel";
  vehicleType = Vehicle;
  constructor(
    private http: HttpClient ){}

  getVehicleModel (): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.vehicleModelUrl);
  }
 
  searchVehicleModel(term: string): Observable<Vehicle[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Vehicle[]>(`api/vehicleModel/?name=${term}`);
  }
}
 
