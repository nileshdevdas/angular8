import { Observable, Observer } from 'rxjs';

const obs = new Observable((observer) => {
      observer.next("xxxxxx");
});


obs.subscribe((result)=>{
   console.log(result);
})
