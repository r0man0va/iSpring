// Создать интервальный таймер, который выводит секунды с момента старта

console.log(`Start`)
const Timer = setInterval(() => {
    console.log(`1 sec`)
}, 1000)

setTimeout(() => {
    clearInterval((Timer)); console.log(`Stop`)
}, 5000)
