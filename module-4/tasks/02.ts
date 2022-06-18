// Создать функцию deferred, которая принимает выражение и callback. Если выражение true, то callback выполняется сразу иначе через 1сек

const callback = function ()
{
    console.log(`Это callback`)
}

function deferred(expression: bool, callbackFn)
{
    if(expression)
    {
        callbackFn
    }
    else
    {
        setTimeout(callbackFn, 1000)
    }
}

deferred(true, callback())
deferred(false, callback())