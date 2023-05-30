// Authentication program

const userLogin = () => {
    console.log("Enter Username and Password");
    let username = prompt("Enter Username");
    let password = prompt("Enter Password");

    return new Promise ((resolve, reject)=> {
        setTimeout(()=>{
            console.log("Perfroming User Authentication");
                if(username === "Sebastian" && password === "Sebastian"){
                    resolve("User Authenticated!");
                } else {
                    reject("Authentication Failed");
                }
        }, 1000);
    });
};

function goToHomePage (userAuthStatus){
    return Promise.resolve(`Go to homepage as : ${userAuthStatus}`)
}  


// //Sync

// userLogin()
// .then((response) =>{
//     console.log("Validated User");
//     return goToHomePage(response)
// })
// .then((userAuthStatus) => {
//     console.log(userAuthStatus)
// })
// .catch((err) => {
//     console.log(err);
// });


// Async
// Better way for userLogin authentication

async function performTask(){
    const response = await userLogin();
    console.log("Validated user");
    const userAuthStatus = await goToHomePage(response);
    console.log(userAuthStatus);
}

performTask();