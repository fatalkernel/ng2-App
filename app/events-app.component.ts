import { Component, OnInit } from '@angular/core';
import { EventsListComponent } from './events/events-list.component'
import { NavBarComponent } from './nav-bar/nav-bar.component';
@Component({
    
    selector: 'events-app',
    template: `
    <nav-bar></nav-bar>
   <router-outlet></router-outlet>
    `
})

export class EventsAppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

   
}
