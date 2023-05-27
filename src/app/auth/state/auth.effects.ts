import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./auth.action";
import { AuthService } from "src/app/services/auth.service";
import { exhaustMap, map } from "rxjs/operators";

@Injectable()
export class AuthEffects{
    constructor(private action$: Actions, private authService: AuthService ){}
    login$ = createEffect(()=> {
        return this.action$.pipe(
            ofType(loginStart),
            exhaustMap((value) =>{
                return this.authService.login (value.email, value.password)
                .pipe(map((data)=>{
                    return loginSuccess();
                }))
            })
        )
    })
}