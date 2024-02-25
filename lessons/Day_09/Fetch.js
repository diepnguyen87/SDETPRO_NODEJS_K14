
function sendRequest(url, callback){
    console.log("1. Sending request to...", url);
    fetch(url).then(function(response){
        callback(response)
    })
}

function processResponse(response){
    console.log("2. Processing response...", response);
    return response.statusCode
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
const TARTGET_URL = "https://jsonplaceholder.typicode.com/posts/1";
sendRequest(TARTGET_URL, function(response){
    let statusCode = processResponse(response)
    validateResponse(statusCode)
})