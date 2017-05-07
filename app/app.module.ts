import { Error404Component } from './errors/404.component';
import { EventRouteActicateService } from './events/event-router-activator.service';
import { EventDetailsComponent } from './events/event-details/event-details-component';
import { appRoutes } from './route';
import { RouterModule } from '@angular/router';
import { ToastrService } from './common/toastr.service';
import { EventService } from './events/shared/event.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    exports: [],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        Error404Component,
        NavBarComponent
        ],
    providers: [EventService,ToastrService,EventRouteActicateService],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }
