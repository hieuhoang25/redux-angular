// import { Component } from '@angular/core';
// import { Observable, Subject, from, fromEvent } from 'rxjs';
// import { pipe, filter, map } from 'rxjs';
// import { BehaviorSubject,  observeOn, asyncScheduler } from 'rxjs';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'learn-ngrx';

//   constructor(){
//     fromEvent(document,'click').subscribe(event => console.log(event))
    
//     // Create a observable
//     const observable = new Observable((subscriber)=>{
//       subscriber.next(1);
//       subscriber.next(2);
//       subscriber.next(3);
//       setTimeout(()=>{
//         subscriber.next(4)
//         subscriber.complete()
//       }, 1000);
//     })
//     console.log('just before')
//     observable.subscribe({
//       next(x) {
//         console.log('got value ' + x);
//       },
//       error(err) {
//         console.error('something wrong occurred: ' + err);
//       },
//       complete() {
//         console.log('done');
//       },
//     });
    
//     console.log('just after subscribe')

//     // Observables as generalization of functions
//     const foo$ = new Observable((subscriber)=>{
//       console.log('12')
//       subscriber.next('hello')
//     })
//     // Co che Lazy
//     foo$.subscribe(x=>console.log(x))
//     foo$.subscribe(x=>console.log(x))
//      // HANDLe  complete
//   const observable1$ = new Observable(function subscribe(subscriber) {
//     subscriber.next(1);
//     subscriber.next(2);
//     subscriber.next(3);
//     subscriber.complete();
//     subscriber.next(4); // Is not delivered because it would violate the contract
//   });
//     observable1$.subscribe(x=>console.log(x))
//  // error
//     const observable2$ = new Observable(function subscribe(subscriber) {
//       try {
//         subscriber.next(1);
//         subscriber.next(2);
//         subscriber.next(3);
//         subscriber.complete();
        
//       } catch (err) {
//         subscriber.error(err); // delivers an error if it caught one
//       }
//     });

//     observable2$.subscribe({
//       next(x){
//         console.log(x);
//       },
//       error(err) {
//         alert(err)
//       }
//     })
//     // unsubscribe 
//     const observable3$ = new Observable(function subscribe(subscriber) {
//       // Keep track of the interval resource
//       const intervalId = setInterval(() => {
//         subscriber.next('hi');
//       }, 1000);
     
//       // Provide a way of canceling and disposing the interval resource
//       return function unsubscribe() {
//         clearInterval(intervalId);
//       };
//     });
//     observable3$.subscribe((x)=>console.log(x)).unsubscribe();
//     /**
//      *  Observer
//      */
//     // const observer = {
//     //   next: x => console.log('Observer got a next value: ' + x),
//     //   error: err => console.error('Observer got an error: ' + err),
//     //   complete: () => console.log('Observer got a complete notification'),
//     // };
//     /**
//      * 
//      */

//     ///----------------------
//     // Operators
//     /**
//      * RxJS is mostly useful for its operators, 
//      * even though the Observable is the foundation. 
//      * Operators are the essential pieces that allow complex 
//      * asynchronous code to be easily composed in a declarative manner.
//      *  
//      * Operators are functions. There are two kinds of operators
//      * 
//      */
//     /// Piping
//     // obs.pipe(op1(),op2(),op3(),op4())
//     // Creation Operators
//     /**
//      * ex: content_copyopen_in_new
//     import { interval } from 'rxjs';
//     const observable = interval(1000 /* number of milliseconds 
//     */
//    // Higher-order Observables
//    //=========================
//    //1. Creating custom operators
//    // 1.a Use the pipe() function to make new operators
   
//    const div = document.createElement('div');
//    div.style.cssText = 'width: 200px; height: 200px; background: #09c;';
//    document.body.appendChild(div);
   
//    const clicks = fromEvent(document, 'click');
//    const clicksOnDivs = clicks.pipe(filter(ev => (<HTMLElement>ev.target).tagName === 'DIV'));
//    clicksOnDivs.subscribe(x => console.log(x));
//   //+++++++++++++++++
//   // [RxJS] Subject
//   /**
//    * An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers.
//    * A Subject is like an Observable, but can multicast to many Observers. 
//    * Subjects are like EventEmitters: they maintain a registry of many listeners.
//    */
//   // 1. every Subject is an Observable
//     const subject = new Subject<string>();
//     subject.subscribe((v)=>{console.log(v);});
//     subject.next("HIEUHOANG");
//   // 2. every Subject is an Observer
//     const observableS = from(["hieu","hoang"])
//     observableS.subscribe(subject);
//     // BehaviorSubject
//     /**
//      * One of the variants of Subjects is the BehaviorSubject, which has a notion of "the current value". 
//      * It stores the latest value emitted to its consumers, 
//      * and whenever a new Observer subscribes, it will immediately
//      *  receive the "current value" from the BehaviorSubject.
//      */
//     // const subjectsubject = new BehaviorSubject(0); // 0 is the initial value
 
//     // subject.subscribe({
//     //   next: (v) => console.log(`observerA: ${v}`),
//     // });
     
//     // subject.next(1);
//     // subject.next(2);
     
//     // subject.subscribe({
//     //   next: (v) => console.log(`observerB: ${v}`),
//     // });
     
//     // subject.next(3);
//     //================================================================
//     //  Scheduler
//     /**
//      * A scheduler controls when a subscription starts and when notifications are delivered. It consiss of three components
//      * + A scheduler is a data structure. It knows how to store and queue tasks bases on priority or other criteria
//      * + A scheduler is an execution context:. It denotes where and when the task is executed  (e.g. immediately, or in another callback mechanism such as setTimeout or process.nextTick, or the animation frame).
//      * + A scheduler has a virual clock.It provides a notion of "time" by a getter method now() on the scheduler. Tasks being scheduled on a particular scheduler will adhere only to the time denoted by that clock.
//     */
//     const observableSc = new Observable((observer) => {
//       observer.next(1);
//       observer.next(2);
//       observer.next(3);
//       observer.complete();
//     }).pipe(
//       observeOn(asyncScheduler)
//     );
//     console.log('just before subscribe');
//     observableSc.subscribe({
//       next(x) {
//         console.log('got value ' + x);
//       },
//       error(err) {
//         console.error('something wrong occurred: ' + err);
//       },
//       complete() {
//         console.log('done');
//       },
      
//     });
//     console.log('just after subscribe');
    
   

//   } 

 
  
// }
