import Arrival from './model/arrival';
import * as moment from 'moment';


export default class Scheduler {
    constructor() {
        this.startDate = moment('2016-03-12 05:00:00');
        this.currentTime = moment(moment('2016-03-12 05:00:00'));
        this.miliSecond = 1 / 60;
        this.arrivals = [];        
    }

    start() {
        this.addAllDestinations();
        // this.displayData();
        
        setInterval(() => {
            this.currentTime = moment(this.currentTime).add(1, 'minutes');
            this.addArrivals();
            this.removeOld();
            this.orderArrivals();
            this.displayData();
        }, 1000 * this.miliSecond)
    }

    private orderArrivals() {
        this.arrivals.sort((a, b) => {
            return a.arrivalTime.diff(b.arrivalTime);
        })
    }


    private removeOld() {
        let arrivals = this.arrivals;
        for (let i = arrivals.length - 1; i >= 0; i--) {
            if (arrivals[i].arrivalTime.isBefore(this.currentTime)) {
                arrivals.splice(i, 1);
            }
        }
    }

    readonly startDate: moment.Moment;
    currentTime: moment.Moment;

    readonly miliSecond: number;
    arrivals: Array<Arrival>;

    startClock() {
        setInterval(() => {
        }, 1000 * this.miliSecond)
    }

    displayData() {
        let ul = document.getElementById("arrivalList");
        ul.innerHTML = "";
        this.arrivals.forEach(arrival => {
            if (arrival.arrivalTime.diff(this.currentTime) / 60000 <= 15) {
                let li = document.createElement("li");
                li.className = "list-group-item";
                li.appendChild(document.createTextNode(arrival.toString(this.currentTime)));
                ul.appendChild(li);
            }

        });
        let div = document.createElement("div");

        let time = document.getElementById("time");
        time.textContent = this.currentTime.format("H:mm").toString();
    }


    private addArrivals() {
        let currentTime = this.currentTime;
        let arrivals = this.arrivals;

        let hour = currentTime.hours();
        let minute = currentTime.minutes();



        if (minute % 20 === 0)
            arrivals.push(new Arrival("Central Station", moment(currentTime).add(40, 'minutes')));

        if (minute === 0)
            arrivals.push(new Arrival("Circular", moment(currentTime).add(2, 'hour')));

        if (minute % 12 === 0) {
            let from = moment(currentTime).hours(6).minutes(36);
            let to = moment(currentTime).add(1, 'day').hours(21).minutes(36);
            this.tryAddDate("Nort Square", from, to, 24);
        }

        if (minute % 6 === 0) {
            let from = moment(currentTime).hours(5).minutes(12);
            let to = moment(currentTime).hours(24).minutes(0);
            this.tryAddDate("West Market", from, to, 18);
        }

        if (minute % 6 === 0) {
            let from = moment(currentTime).hours(0).minutes(6);
            let to = moment(currentTime).hours(1).minutes(12);
            this.tryAddDate("West Market", from, to, 18);
        }
    }

    private tryAddDate(station: string, fromDate: moment.Moment, toDate: moment.Moment, addMinutes: number) {
        if (this.currentTime.isBetween(fromDate, toDate))
            this.arrivals.push(new Arrival(station, moment(this.currentTime).add(addMinutes, 'minutes')))
    }

    private addAllDestinations() {
        let currentTime = moment(this.currentTime);
        this.arrivals.push(new Arrival("Central Station", moment(currentTime)));
        this.arrivals.push(new Arrival("Central Station", moment(currentTime).add(20, 'minutes')));

        this.arrivals.push(new Arrival("Circular", moment(currentTime)));
        this.arrivals.push(new Arrival("Circular", moment(currentTime).add(1, 'hour')));
    }


    //  setInterval(() => {
    //     console.log("hello from scheduler");
    // }, 600);

}






