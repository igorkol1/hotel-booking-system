package com.igorkol.hotelbookingsystem.controller;

import com.igorkol.hotelbookingsystem.model.Reservation;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(ReservationController.ROOM_V_1_RESERVATION)
@CrossOrigin
public class ReservationController {

    public static final String ROOM_V_1_RESERVATION = "/room/v1/reservation";

    @GetMapping(path = "{roomId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public Mono<String> getReservationById(@PathVariable String roomId){
        //TODO ReservationService.get
        return Mono.just("{}");
    }

    @PostMapping(path = "",produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Mono<String> createReservation(@RequestBody Mono<Reservation> reservation){
        //TODO ReservationService.create
        return Mono.just("{}");
    }

    @PutMapping(path = "{roomId}",produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Mono<String> updateReservation(
            @PathVariable String roomId,
            @RequestBody Mono<Reservation> reservation){
        //TODO ReservationService.update
        return Mono.just("{}");
    }

    @DeleteMapping(path = "{roomId}")
    public Mono<Boolean> deleteReservation(@PathVariable String roomId){
        //TODO ReservationService.delete
        return Mono.just(true);
    }
}
