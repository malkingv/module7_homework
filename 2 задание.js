//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем
//проверяет есть ли у переданного объекта свойство с данным именем.
//Функция должна возвращать true или false.

function checkThisKey(str, obj) {
    for (const objKey in obj) {
        if ( objKey == str) { // если честно не совсем понятно почему если использовать тройное равно в полседнем примере будет выведено false
            return true
        }
    }
    return false
}
const a = {
    city: 'Moscow',
    gender: 'male',
    1: '123'
}
console.log(checkThisKey('city', a))
console.log(checkThisKey('hairColor', a))
console.log(checkThisKey(1, a))