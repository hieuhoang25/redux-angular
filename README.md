# LearnNgrx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## RXJS

RxJS is a library for composing asynchronous and event-based programs by using observable squences. It provides one core type, the `Observable`, satellite type(`Observer`, `Scheduler`, `Subject`) and operators inspired by Array methods(`map`, `filter`, `reduce`, `every`,etc) to all handling asynchronous events as collections.
### The essential concepts of RxJS which solve asynchronous events management are:
- `Observable` : represents the idea of an invokable collection of future values or events.
- `Observer` :  is a collection of callbacks that knows how to listen to values delivered by the Observable.
- `Subscription`: represents the execution of an Observable, is primarily useful for cancelling the execution.
- `Operators`: are pure functions that enable a functional programming style of dealing with collections with operations like map, filter, concat, reduce, etc.
- `Subject`:  is equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.
- `Schedulers`: are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.

## NGrx
Download the correct version :
```java
npm install  @ngrx/store@14
"dependencies": {
    "@angular/animations": "^14.2.0",
    "@angular/common": "^14.2.0",
    "@angular/compiler": "^14.2.0",
    "@angular/core": "^14.2.0",
    "@angular/forms": "^14.2.0",
    "@angular/platform-browser": "^14.2.0",
    "@angular/platform-browser-dynamic": "^14.2.0",
    "@angular/router": "^14.2.0",
    "@ngrx/store": "^14.3.3",
    "rxjs": "~7.5.0",
    "rxjs-compat": "^6.6.7",
    "rxjs-interop": "^2.0.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.11.4"
  },
```
## Ngrx Store Library
- Store is RxJS powered global state management for Angular applications, inspired by Redux. Store is a controlled state container designed to help write performant, consistent applications on top of Angular.

- Key concepts
-- Actions describe unique events that are dispatched from components and services.
-- State changes are handled by pure functions called reducers that take the current state and the latest action to compute a new state.
-- Selectors are pure functions used to select, derive and compose pieces of state.
-- State is accessed with the Store, an observable of state and an observer of actions.
## Ngrx Effects Library
![alt](https://ngrx.io/generated/images/guide/store/state-management-lifecycle.png)
-  Library manages side effects to keep components clean
- Side effects means calling to the external state like API
- Using HTTP to get data from backend server is nothing but a side effect
- Having this logic in the components we can manage this in the ngrx effects architecture
- Not good when using store call api
-- We cannot call the http and the store in the components as we want to keep them clean
-- We cannot also call the http in the reducer as the reducer fucntions are pure functions
-- We cannot inject the postserivice into the reducers as they are pure
-- SO the best place to manage these side effects are the ngrx effects - What Ngrx Effects Does?
-- Effects takes the action, does some work and again dispatches new action
- This could be success or the fail action
- Let se the ngrx diagram with side taking into 
- Define an Effect
-- When first learning ngrx effects people find it difficult on complex observale streams  and multiple chaning
-- Effects is nothing but creating a service. In fact it is just like any orthẻ angular service class defined with @ịnjectable decorator at the top of class