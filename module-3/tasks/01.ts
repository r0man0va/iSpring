// Написать функцию sum для суммирования всех переданных аргументов
function sum(...restNums)
{
    console.log(restNums.reduce((accumalor, current)=>accumalor + current))
}

sum(1,2,3)
sum(1)