import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { CarService } from 'src/app/services/car.service';
import { CarActions } from '../actions';

@Injectable()
export class CarEffects {
  createCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CarActions.createCar),
      switchMap(({ carDraft }) =>
        this.carService.createCar(carDraft).pipe(
          map((car) =>
            CarActions.createCarSuccess({
              car,
            })
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private carService: CarService) {}
}
