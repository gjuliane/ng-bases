import { Observable, Observer } from "rxjs";


const observer: Observer<number> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completed')
}

const intervalos$ = new Observable<number>(
    suscriber => {
        let count: number = 0;
        const interval = setInterval(
            () => {
                count = count + 1;
                suscriber.next(count);
            },
            1000
        );
        return () => {
            clearInterval(interval);
            console.log('Interval destroyed');
        }
    }
);

// const subs =  intervalos$.subscribe(observer);
const subs =  intervalos$.subscribe(num => console.log('Num:', num));

const subs1 = intervalos$.subscribe();
const subs2 = intervalos$.subscribe(num => console.log('Num2:', num));
const subs3 = intervalos$.subscribe();


setTimeout(
    () => {
        subs.unsubscribe();
        subs1.unsubscribe();
        subs2.unsubscribe();
        subs3.unsubscribe();

        console.log('Completado  timeout');
    },
    3000
);



