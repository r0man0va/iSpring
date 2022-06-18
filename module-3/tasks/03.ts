// Создать функцию для суммирования двух значений sum2(). Функция должна возвращать функцию которая возвращает
// сумму двух чисел
// Пример sum2(40)(2) // 42

// 1-ый вариант
function sum2(x: number)
{
    return (y: number): number => {
        return x + y
    }
}

// 2-ой вариант
function sum2_2(x: number)
{
    function sum (y: number) {
        return x + y
    }
    return sum
}

// 3-ий вариант
function sum2_3(x: number)
{
    let sum = (y:number)=> {
        return x + y
    }
    return sum
}
console.log(sum2(40)(2))
console.log(sum2_2(40)(2))
console.log(sum2_3(40)(2))

