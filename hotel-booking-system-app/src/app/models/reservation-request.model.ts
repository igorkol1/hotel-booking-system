export class ReservationRequest {
  roomNumber: number;
  checkIn: string;
  checkOut: string;
  price: number;

  constructor(roomNumber: number, checkIn: string, checkOut: string, price: number) {
    this.roomNumber = roomNumber;
    this.checkIn = checkIn;
    this.checkOut = checkOut;
    this.price = price;
  }
}
