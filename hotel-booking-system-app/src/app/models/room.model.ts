export class Room {
  id: string;
  roomNumber: number;
  price: number;

  constructor(id: string, roomNumber: number, price: number) {
    this.id = id;
    this.roomNumber = roomNumber;
    this.price = price;
  }
}
