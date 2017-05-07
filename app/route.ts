import { EventRouteActicateService } from './events/event-router-activator.service';
import { Error404Component } from './errors/404.component';
import { EventDetailsComponent } from './events/event-details/event-details-component';
import { EventsListComponent } from './events/events-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActicateService]},
  { path: '404', component: Error404Component },
  
  { path: '', pathMatch: 'full', redirectTo: '/events' }
];

