import { Component, OnInit } from '@angular/core';
import { EventsListComponent } from './events/events-list.component'
@Component({
    
    selector: 'events-app',
    template: '<events-list></events-list>'
})

export class EventsAppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
