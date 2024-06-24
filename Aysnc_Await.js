// Javascript - Synchronous and single threaded.

// Which executes one by one , will not execute another untill the previous execution is done 

// synchronous - which executes further once previous task is completed
// asynchronous - which executes further even though when the previous task is not completed

// Settimeout - executes one time after a period of time
// cleartimeout - which stops to execute the timeout function.
// setinterval - Keep executing over a interval of time
// clearInterval - same as cleartimeout.

// Settimeout - Syntax

// const TriggerTime = setTimeout(function timeout(){
//     alert("timeout function triggered");
// },3000)

// clearTimeout(TriggerTime);

// SetInterval - syntax 

// const TriggerInterval = setInterval(function interval(){
//         alert("SetInterval is set");
// },3000)

// clearInterval(TriggerInterval);

function AsyncAwait(getDataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Promise initially resolved" , getDataId)
            resolve(200);
        },2000)
    })
}

async function getAllData(){
    await AsyncAwait(1);
    console.log("Getting Data 2")
    await AsyncAwait(2);
    console.log("Getting Data 3")
    await AsyncAwait(3);
}

