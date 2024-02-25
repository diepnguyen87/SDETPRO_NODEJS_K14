
function sendRequest(url, callback){
    console.log("1. Sending request to...", url);
    setTimeout(function(){
        callback({statusCode: 200})
    }, 1000);
}

function processResponse(response, callback){
    console.log("2. Processing response...", response);
    setTimeout(function(){
        callback(response.statusCode)
    }, 1000);
}

function validateResponse(statusCode){
    console.log("3. Validating response...");
    if(statusCode === 200){
        console.log("Passed with status code ", statusCode);
    }else{
        console.error("Failed with status code ", statusCode);
    }
}

//Callback HELL
const TARTGET_URL = "https://jsonplaceholder.typicode.com";
sendRequest(TARTGET_URL, function(response){
    processResponse(response, function(statusCode){
        validateResponse(statusCode)
    })
})