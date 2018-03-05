import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { UIModule } from './ui/ui.module';
import { CarouselModule } from './carousel/carousel.module';
import { FeaturedModule } from './featured/featured.module';
import { SearchModule } from './search/search.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { NavService } from './shared/nav.service';

import './shared/rxjs-extensions';

@NgModule({
  imports: [ BrowserModule,
             HttpModule,
             FormsModule,
             UIModule,
             CarouselModule,
             FeaturedModule,
             SearchModule,
             AppRoutingModule
           ],
  declarations: [ AppComponent,
                  HomeComponent
                ],
  providers: [ NavService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
