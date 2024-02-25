function asynFunction01(param01){
    console.log("Async function 01");
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const returnedValue = 'asynFunction01 ' + param01
            resolve(returnedValue)
        }, 1000)
    }) 
}

function asynFunction02(param02){
    console.log("Async function 02");
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const returnedValue = 'asynFunction02 ' + param02
            resolve(returnedValue)
        }, 1000)
    }) 
}

function asynFunction03(param03){
    console.log("Async function 03");
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const returnedValue = 'asynFunction03 ' + param03
            resolve(returnedValue)
        }, 1000)
    }) 
}

async function run(){
    const returnedValue1 = await asynFunction01('param01')
    const returnedValue2 = await asynFunction02(returnedValue1)
    const returnedValue3 = await asynFunction03(returnedValue2)
    console.log(returnedValue3);
}

run()

