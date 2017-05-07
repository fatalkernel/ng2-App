import { EventService } from './shared/event.service';
import { ActivatedRoute, CanActivate, ActivatedRouteSnapshot, , Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class EventRouteActicateService implements CanActivate {
       


    constructor(private eventService:EventService, private router:Router ) { }

    canActivate(route:ActivatedRouteSnapshot){

        const eventExist = !!this.eventService.getEvent(+route.params['id'])
        if(!eventExist){
            this.router.navigate(['/404'])
        }
        return eventExist
    }
}