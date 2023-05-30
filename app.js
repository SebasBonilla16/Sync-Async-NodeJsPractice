// // Sync Example

// // Starting the program
// console.log("Starting the program");

// // We are creating a function that will execute our time
// function sleep(milliseconds){
//     let startTime = new Date().getTime();
//     console.log("Program is running");
    
//     while(new Date().getTime() < startTime + milliseconds){
//         console.log("In progress");
//     }
//     console.log("Program is Done. ");
// }

// // Calling our function to perform
// sleep(10);

// console.log("Do something else...");





// Async Example

console.log("Starting Program");

function sleep(milliseconds){
    console.log("Program is running");
    setTimeout(()=>{
        console.log("Program is done");
    }, milliseconds);
}

sleep(1000);
console.log("Do something esle");