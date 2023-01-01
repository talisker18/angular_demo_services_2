//this service will be injected in user.service. So provide CounterService as provider in app.module (= highest level)
export class CounterService{
    activeToInactiveCounter: number = 0;
    inactiveToActiveCounter: number = 0;

    incrementActiveToInactive(){
        this.activeToInactiveCounter++;
        console.log("active to inactive: "+this.activeToInactiveCounter);
    }

    incrementInactiveToActive(){
        this.inactiveToActiveCounter++;
        console.log("inactive to active: "+this.inactiveToActiveCounter);
    }
}