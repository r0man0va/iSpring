// Создать класс Calculator имеет 4 метода (add, sub, mul, div и getValue). Конструктор принимает опциональное
// начальное значение
// Объект должен поддерживать chain
// Пример (new Calculator()).add(5).sub(4).mul(6).div(2).getValue() // 3

class Calculator {

    private x: number

    constructor(param: number = 0) {
       this.x = param
    }

    add(y: number) {
        this.x =  this.x + y
        return this
    }

    sub(y: number){
        this.x =  this.x - y
        return this
    }

    mul(y: number){
        this.x = this.x * y
        return this
    }

    div(y: number) {
        this.x = this.x / y
        return this
    }

    getValue(){
        return this.x
    }
}
console.log((new Calculator()).add(5).sub(4).mul(6).div(2).getValue())