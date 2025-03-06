// Code your solution in this file

function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
    console.log(selectingDrivers);

function createFareMultiplier(fareMultiplier) {
    return function(fare) {
        return fare * fareMultiplier
    };
}

    const fareDoubler = createFareMultiplier(2);
    const fareTripler = createFareMultiplier(3);

    console.log(fareDoubler)
    console.log(fareDoubler)


function selectDifferentDrivers(arrayOfDrivers , drivers) {
    return drivers(arrayOfDrivers);
}