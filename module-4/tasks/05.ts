// используя timeout написать функцию которая выводит секунды с момента старта. Использовать async/await

async function Timer () {

    console.log(`Start`)
    const timer = setInterval(() => {
        console.log(`1 sec`)
    }, 1000)

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            clearInterval((timer))
        }, 5000)
    })

    await promise
    console.log(`Stop`)
}

Timer()