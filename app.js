// Sync Example

// Starting the program
console.log("Starting the program");

// We are creating a function that will execute our time
function sleep(milliseconds){
    let startTime = new Date().getTime();
    console.log("Program is running");
    
    while(new Date().getTime() < startTime + milliseconds){
        console.log("In progress");
    }
    console.log("Program is Done. ");
}

sleep(1000);