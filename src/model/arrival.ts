import * as Moment from 'moment';

export default class Arrival{
    constructor(destination: string, arrTime: Moment.Moment){
        this.arrivalTime = arrTime;
        this.destination = destination;
    }
    destination: string
    arrivalTime: Moment.Moment

    toString(date: Moment.Moment): string{        
        return (this.destination + '\t\t' + this.arrivalTime.diff(date) / 60000 + " min");
    }

    to
}   