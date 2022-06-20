// Вывести сообщение, исходя из температуры
// до -10 - Очень Холодно
// от -10 - +10 - Холодно
// от +10 - +18 - Прохладно
// от +18 - +25 - Тепло
// от +25 и выше - Жарко

function temperatureMessage(t: number) {
    if(t < -10) {
        console.log(`Очень холодно`)
    }
    if((t >= -10) && (t < 10)) {
        console.log(`Холодно`)
    }
    if((t >= 10) && (t < 18)) {
        console.log(`Прохладно`)
    }
    if((t >= 18) && (t < 25)) {
        console.log(`Тепло`)
    }
    if(t >= 25) {
        console.log(`Жарко`)
    }
}

temperatureMessage(-8)
temperatureMessage(0)
temperatureMessage(13)
temperatureMessage(23)
temperatureMessage(32)
