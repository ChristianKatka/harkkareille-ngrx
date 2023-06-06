import { Actions, ofType, createEffect } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { ItemActions, RouterActions } from "../actions";
import { switchMap, map, catchError, mergeMap, tap } from "rxjs/operators";
import { of } from "rxjs";
import { ItemService } from ".";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ItemEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.loadOrganizationUsers),
      switchMap(({ itemId }) =>
        this.itemService.getItems(itemId).pipe(
          map((items) =>
            ItemActions.loadItemsSuccess({
              items,
            })
          ),
          catchError((error: HttpErrorResponse) =>
            of(
              ItemActions.loadOrganizationUsersFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );

  // ROUTING AFTER SUCCESS
  itemSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.createSuccess),
      map(() =>
        RouterActions.navigate({
          commands: ["/home"],
          extras: { replaceUrl: true },
        })
      )
    )
  );

  // MERGEMAP
  MERGEMAP$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.SUCCESS),
      mergeMap(({ ITEM }) => [
        ItemActions.loadAllDATA({
          organizationId: ITEM.itemId,
        }),
        RouterActions.navigate({
          commands: ["/"],
          extras: { replaceUrl: true },
        }),
      ])
    )
  );

  // move data inside rxjs pipe
  createJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobActions.createJob),
      switchMap(({ job }) => of(job)),
      withLatestFrom(this.store.select(ProductSelectors.getSelectedProductId)),
      switchMap((jobAndProductId) =>
        this.jobService.createJob(jobAndProductId[0], jobAndProductId[1]).pipe(
          map((resJob) => JobActions.createJobSuccess({ resJob })),
          catchError((error: string) => {
            console.log(error);
            return of(JobActions.createJobFailure({ error }));
          })
        )
      )
    )
  );

  // ERROR HANDLING
  joinByCode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.joinByCode),
      switchMap(({ invitationCode }) =>
        this.itemService.joinOrganizationByInvitationCode(invitationCode).pipe(
          mergeMap((organization) => [
            ItemActions.joinByCodeSuccess({
              organization,
            }),
            ItemActions.closeWelcomeSheet(),
          ]),
          catchError((error: any) => {
            let action$;
            console.log(error);

            if (error.status === 404) {
              action$ = of(ItemActions.incorrectInvitationCode());
            } else {
              action$ = of(ItemActions.joinByCodeFailure(error));
            }
            return action$;
          })
        )
      )
    )
  );

  // APP INIT CALLS LOAD ALL DATA
  loadAllUserRelatedData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.loadAllUserRelatedData),
      mergeMap(({ itemId }) => [
        ItemActions.load1({
          itemId,
        }),
        ItemActions.load2(),
      ])
    )
  );

  // DISPATCH FALSE
  openBottomSheet$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ItemActions.openBottomSheet),
        tap(() => this.itemService.openBottomSheet())
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private itemService: ItemService) {}
}
