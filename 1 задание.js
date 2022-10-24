//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи
//и значения только собственных свойств. Данная функция не должна возвращать значение.

function returnKeys(obj) {
    console.log('Keys:')
    for (const objKey in obj) {
        console.log(objKey)
    }
    console.log('Own values:')
    for (const ownKey in obj) {
        if (obj.hasOwnProperty(ownKey)){
            console.log(obj[ownKey]) // изначальное пробовал через точечное обращения к свойству, но оно не срабатывало
        }
    }
}
const a = {
    city: 'Moscow',
    gender: 'male'
}
const b = Object.create(a)
b.hairColor = 'red'

returnKeys(b);