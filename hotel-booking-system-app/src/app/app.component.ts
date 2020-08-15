import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Room} from "./models/room";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hotel-booking-system';
  private baseUrl: string = 'http://localhost:8080';
  private reservationUrl: string = this.baseUrl + '/room/v1/reservation';

  rooms: Room[]

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.rooms = [new Room("1", 1, 100),
      new Room("2", 2, 100),
      new Room("3", 3, 150)]
  }


}
