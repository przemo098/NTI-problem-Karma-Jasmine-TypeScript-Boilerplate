import * as moment from 'moment';
import Scheduler from '../../src/scheduleGenerator';
import Arrival from '../../src/model/arrival';


describe("Function which short elements", function() {
    it("should sort arrivals ascending by date", function(){
        // Arrange
            let scheduler = new Scheduler();
            let firstArrival = new Arrival("A",moment("2016-03-12 04:59:00"));
            let secondArrival = new Arrival("B", moment("2016-03-12 05:00:00"));

            scheduler.arrivals.push(secondArrival);
            scheduler.arrivals.push(firstArrival);
 
            // Act
            let result = (scheduler as any).removeOld();
 
            // Assert
            expect(scheduler.arrivals.length).toEqual(1);
    })
});