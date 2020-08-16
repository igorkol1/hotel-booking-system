import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ReservationService} from "./service/reservation.service";
import {Room} from "./models/room.model";
import {ReservationRequest} from "./models/reservation-request.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hotel-booking-system';

  rooms: Room[]
  roomSearchForm: FormGroup;
  currentCheckIn: string;
  currentCheckOut: string;
  currentRoomNumber: number;
  currentPrice: number;

  constructor(private reservationService: ReservationService) {
  }

  ngOnInit(): void {
    this.rooms = [new Room("1", 1, 100),
      new Room("2", 2, 100),
      new Room("3", 3, 150)]

    this.roomSearchForm = new FormGroup({
      checkin: new FormControl(''),
      checkout: new FormControl(''),
      roomNumber: new FormControl('')
    })

    this.roomSearchForm.valueChanges.subscribe(form => {
      this.currentCheckIn = form.checkin;
      this.currentCheckOut = form.checkout;

      if (form.roomNumber) {
        let roomValues: string[] = form.roomNumber.split('|')
        this.currentRoomNumber = Number(roomValues[0]);
        this.currentPrice = Number(roomValues[1]);
      }

    })
  }

  createReservation() {
    this.reservationService.createReservation(new ReservationRequest(
      this.currentRoomNumber,
      this.currentCheckIn,
      this.currentCheckOut,
      this.currentPrice
    )).subscribe(result => {
      console.log(result);
    })
  }

}
