import { ToastrService } from './../common/toastr.service';
import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'events-list',
    templateUrl: 'events-list.component.html'

    
})

export class EventsListComponent implements OnInit {
    events:any[]
    
    constructor(private eventService:EventService, private toastr:ToastrService) { }

    ngOnInit() {
      this.events = this.eventService.getEvents()
     }

   thumbClikced(eventName){
     
    this.toastr.error(eventName)
   }
    
}
