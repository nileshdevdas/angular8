import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PubsubService {
  private subject: Subject<any> = new Subject();
  //private subject: BehaviorSubject<any> = new BehaviorSubject(1203984);
  //private subject: ReplaySubject<any> = new ReplaySubject(4);
  //private subject: AsyncSubject<any> = new AsyncSubject();
  constructor() { }

  getSubscriber() {
    return this.subject.asObservable();
  }

  getPublisher() {
    return this.subject;
  }

}
