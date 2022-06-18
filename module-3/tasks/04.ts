// Создать класс Page с полями url, name и методами open() - выводящим "Переход на страницу <Название>: <url>".
// Экспортировать класс и создать два экземпляра в другом файле

//const page = new Page("Yandex", 'https://yandex.ru')
//page.open()

class Page {
    pUrl: string
    pName: string

    constructor(pName: string, pUrl: string)
    {
        this.pName = pName
        this.pUrl = pUrl
    }

    open() {
        console.log(`Переход на страницу ${this.pName} ${this.pUrl}`)
    }
}
const page = new Page('Yandex', 'https://yandex.ru')
page.open()

export {Page}