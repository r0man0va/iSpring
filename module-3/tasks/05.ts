// Создать класс SearchEnginePage, который наследуется от Page(из предыдущей задачи) и реализует новый
// метод search(text) - который выводит "поиск по <NAME>: <text>"

import {Page} from './04'

class SearchEnginePage extends Page {
    text: string

    constructor(name: string, url?: string)
    {
        super(name, url)
    }

    search(text: string) {
        console.log(`Поиск по ${this.pName}: ${text} `)
    }
}

const enginePage = new SearchEnginePage('Yandex', 'https://yandex.ru')
enginePage.search( 'новостной блок')
