import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ReservationRequest} from "../models/reservation-request.model";
import {Observable} from "rxjs";
import {Reservation} from "../models/reservation.model";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl: string = 'http://localhost:8080';
  private reservationUrl: string = this.baseUrl + '/room/v1/reservation';

  constructor(private httpClient: HttpClient) {
  }

  getReservations(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(this.reservationUrl);
  }

  createReservation(body: ReservationRequest): Observable<Reservation> {
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.httpClient.post<Reservation>(this.reservationUrl, body, httpOptions);
  }
}
