import * as moment from 'moment';
import Scheduler from '../../src/scheduleGenerator';
import Arrival from '../../src/model/arrival';


describe("Testing Central Station arrivals at time", function () {
    it("should contain one Central Train arrival", function () {
        // Arrange
        let scheduler = new Scheduler();
        scheduler.currentTime.hours(6).minutes(20);

        // Act
        let result = (scheduler as any).addArrivals();

        // Assert
        expect(scheduler.arrivals.length).toEqual(1);
        expect(scheduler.arrivals[0].destination).toEqual("Central Station");
    })
});

describe("Testing arrivals at time", function () {
    it("should contain one Circular and Central Station arrival", function () {
        // Arrange
        let scheduler = new Scheduler();
        scheduler.currentTime.hours(3).minutes(0);

        // Act
        let result = (scheduler as any).addArrivals();

        // Assert
        expect(scheduler.arrivals.length).toEqual(2);
    })
});


describe("Testing arrivals at time", function () {
    it("should contain one West Market and no North Square", function () {
        // Arrange
        let scheduler = new Scheduler();
        scheduler.currentTime.hours(6).minutes(12);

        // Act
        let result = (scheduler as any).addArrivals();

        // Assert
        expect(scheduler.arrivals.length).toEqual(1);
        expect(scheduler.arrivals[0].destination).toEqual("West Market");
    })
});


describe("Testing arrivals at time", function () {
    it("should contain no results", function () {
        // Arrange
        let scheduler = new Scheduler();
        scheduler.currentTime.hours(6).minutes(35);

        // Act
        let result = (scheduler as any).addArrivals();

        // Assert
        expect(scheduler.arrivals.length).toEqual(0);
    })
});


describe("Testing arrivals at time", function () {
    it("should contain one West Market and North Square", function () {
        // Arrange
        let scheduler = new Scheduler();
        scheduler.currentTime.hours(6).minutes(36);

        // Act
        let result = (scheduler as any).addArrivals();

        // Assert
        expect(scheduler.arrivals.length).toEqual(2);
        expect(scheduler.arrivals[0].destination).toEqual("North Square");
        expect(scheduler.arrivals[1].destination).toEqual("West Market");
        expect(scheduler.arrivals[0].arrivalTime.hour()).toEqual(7);
        expect(scheduler.arrivals[0].arrivalTime.minutes()).toEqual(0);
    })
});

describe("Testing arrivals at time", function () {
    it("should contain one West Market and North Square", function () {
        // Arrange
        let scheduler = new Scheduler();
        scheduler.currentTime.hours(21).minutes(36);

        // Act
        let result = (scheduler as any).addArrivals();
        // Assert
        expect(scheduler.arrivals.length).toEqual(2);
        expect(scheduler.arrivals[0].destination).toEqual("North Square");
        expect(scheduler.arrivals[1].destination).toEqual("West Market");
        expect(scheduler.arrivals[0].arrivalTime.hour()).toEqual(22);
        expect(scheduler.arrivals[0].arrivalTime.minutes()).toEqual(0);
    })
});

describe("Testing arrivals at time", function () {
    it("should contain one West Market and no North Square", function () {
        // Arrange
        let scheduler = new Scheduler();
        scheduler.currentTime.hours(21).minutes(48);

        // Act
        let result = (scheduler as any).addArrivals();

        // Assert
        expect(scheduler.arrivals.length).toEqual(1);
    })
});


describe("Testing arrivals at time", function () {
    it("should contains no North Square", function () {
        // Arrange
        let scheduler = new Scheduler();
        scheduler.currentTime.hours(5).minutes(6);

        // Act
        let result = (scheduler as any).addArrivals();

        // Assert
        expect(scheduler.arrivals.length).toEqual(0);
    })
});


describe("Testing arrivals at time", function () {
    it("should contains one arrival to West Market at 5:30", function () {
        // Arrange
        let scheduler = new Scheduler();
        scheduler.currentTime.hours(5).minutes(12);

        // Act
        let result = (scheduler as any).addArrivals();

        // Assert
        expect(scheduler.arrivals.length).toEqual(1);
        expect(scheduler.arrivals[0].arrivalTime.hour()).toEqual(5);
        expect(scheduler.arrivals[0].arrivalTime.minute()).toEqual(30);
    })
});


describe("Testing arrivals at time", function () {
    it("should contains one arrival to West Market at 1:30", function () {
        // Arrange
        let scheduler = new Scheduler();
        scheduler.currentTime.hours(1).minutes(12);

        // Act
        let result = (scheduler as any).addArrivals();

        // Assert
        expect(scheduler.arrivals.length).toEqual(1);
        expect(scheduler.arrivals[0].arrivalTime.hour()).toEqual(1);
        expect(scheduler.arrivals[0].arrivalTime.minutes()).toEqual(30);
    })
});

describe("Testing arrivals at time", function () {
    it("should contains no arrivals to West Market and any station", function () {
        // Arrange
        let scheduler = new Scheduler();
        scheduler.currentTime.hours(1).minutes(18);

        // Act
        let result = (scheduler as any).addArrivals();

        // Assert
        expect(scheduler.arrivals.length).toEqual(0);
    })
});