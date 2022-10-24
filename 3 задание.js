//Написать функцию, которая создает пустой объект, но без прототипа.

function newOne(name) {
    name = Object.create(null);
    return name
}

console.log(newOne())