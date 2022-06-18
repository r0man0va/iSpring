// доработать предыдущую функцию, добавить опциональный 2-ой аргумент, через которое промис реджектится.

function fn(n: number){

    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(33)
        }, n)

        setTimeout(() => {
            reject(66)
        }, 3000)
    })

    p
        .then(
            data => console.log(data),
            error => console.log(error)
        )

    return p
}

console.log(fn(5000))