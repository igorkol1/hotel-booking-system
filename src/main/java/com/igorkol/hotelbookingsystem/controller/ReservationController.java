package com.igorkol.hotelbookingsystem.controller;

import com.igorkol.hotelbookingsystem.model.Reservation;
import com.igorkol.hotelbookingsystem.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(ReservationController.ROOM_V_1_RESERVATION)
@CrossOrigin
public class ReservationController {

    public static final String ROOM_V_1_RESERVATION = "/room/v1/reservation";

    private final ReservationService reservationService;

    @Autowired
    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping(path = "{roomId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Mono<Reservation> getReservationById(@PathVariable String roomId) {
        return reservationService.getReservations(roomId);
    }

    @GetMapping(path = "", produces = MediaType.APPLICATION_JSON_VALUE)
    public Flux<Reservation> getAllReservation() {
        return reservationService.listOfReservations();
    }

    @PostMapping(path = "", produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Mono<Reservation> createReservation(@RequestBody Mono<Reservation> reservation) {
        return reservationService.createReservation(reservation);
    }

    @PutMapping(path = "{roomId}", produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Mono<Reservation> updateReservation(
            @PathVariable String roomId,
            @RequestBody Mono<Reservation> reservation) {
        return reservationService.updateReservation(roomId, reservation);
    }

    @DeleteMapping(path = "{roomId}")
    public Mono<Boolean> deleteReservation(@PathVariable String roomId) {
        return reservationService.deleteReservation(roomId);
    }
}
