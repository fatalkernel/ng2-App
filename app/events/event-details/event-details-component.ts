import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'event-details',
    templateUrl: 'event-details.component.html',
    styles:[
        `.container {padding-left:10px; padding-right :10px}
        img{height:100px}
        `
    ]
})

export class EventDetailsComponent implements OnInit {
    constructor(private eventService: EventService, private activeRoute:ActivatedRoute) { }
    event:any
    ngOnInit() {
        
       this.event =  this.eventService.getEvent(+this.activeRoute.snapshot.params['id'])
     }
}

