import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { reducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsContainerComponent } from './cars/cars.container';
import { CarsComponent } from './cars/cars.component';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CarsCreateCarComponent } from './cars/cars-create-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsContainerComponent,
    CarsComponent,
    NavbarComponent,
    CarsCreateCarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(effects),
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
