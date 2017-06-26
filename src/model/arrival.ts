import * as Moment from 'moment';

export default class Arrival {
    constructor(destination: string, arrTime: Moment.Moment) {
        this.arrivalTime = arrTime;
        this.destination = destination;
    }
    destination: string
    arrivalTime: Moment.Moment

    toSpan(nO: string ,date: Moment.Moment) {
        let span = document.createElement("span");
                span.textContent = nO + ". " + this.destination;
                
                let innerSpan = document.createElement("span");
                innerSpan.textContent = this.arrivalTime.diff(date) / 60000 + " min";
                innerSpan.className = "pull-right"
                span.appendChild(innerSpan);

                return span;
    }
}   