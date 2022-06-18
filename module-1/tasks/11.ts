// Изменить программу 10.ts используя тернарный оператор

function isAccess(age: number){
    const access = age > 18 ? 'Страница доступна!' : 'Страница не доступна'
    console.log(access)
}
isAccess(16)
isAccess(18)
isAccess(22)