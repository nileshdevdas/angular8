import { Observable, Observer, of, Subject } from 'rxjs';
import { nextTick } from 'q';

const obs2 = {
    next: x => {
        console.log("Here............. in next ", x)
    },
    error: err => {
        console.log("here in err ", err)

    },
    comp: () => {

    }
}


const obs1 = new Observable((obs) => {
    setInterval(() => {
        obs.next(new Date().getMilliseconds());
    }, 5000);

});

obs1.subscribe(obs2);