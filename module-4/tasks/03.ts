// Создать функцию, которая возвращает промис, который резолвится через n миллисекунд.

function fn(n: number){

    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(33)
        }, n)
    })

    p
        .then(
            data => console.log(data)
        )

    return p
}

console.log(fn(5000))
