// Создать программку для проверки ограничения возраста если меньше 18, то вывести "Страница не доступна" иначе "Страница доступна".
// Использовать if else

function isAccess(age: number){
    if(age < 18){
        console.log('Страница не доступна')
    }
    else{
        console.log('Страница доступна')
    }
}
isAccess(16)
isAccess(18)
isAccess(22)