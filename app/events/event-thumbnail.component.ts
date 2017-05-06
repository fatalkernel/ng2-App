import { Component, OnInit, Input } from '@angular/core';
import { EventsListComponent } from './events-list.component'

@Component({
    moduleId: module.id,
    selector: 'event-thumbnail',
    templateUrl: 'event-thumbnail.component.html',
    styles: [
        `
        .well { min-height : 250px }
        `
    ]
})

export class EventThumbnailComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

   @Input() event:EventsListComponent
    
}