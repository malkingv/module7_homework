//Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео.
//Реализуйте его на прототипах.
//Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент).
//Таких приборов должно быть как минимум два (например, настольная лампа и компьютер).
//Выбрав прибор, подумайте, какими свойствами он обладает.

function Device (status, name){
    this.onNetwork = status
    this.getInfo = function (){
        if (this.onNetwork) {
            console.log(`Прибор (${name}) включен в сеть`)
        } else {
            console.log(`Прибор (${name}) не включен в сеть`)
        }
    }
}
Device.prototype.setWattage = function (usingPower){ //указание потребляемой мощности
    this.wattage = usingPower
}
Device.prototype.changePower = function (action){ //Включение или выключение прибора (on/off)
    if (action === 'on'){
        this.onNetwork = true
    } else if (action === 'off'){
        this.onNetwork = false
    }
}

const computer = new Device(true, 'компьютер');
const cleaner = new Device(false, 'пылесос');
computer.type = 'desktop'
cleaner.location = 'kitchen'
computer.setWattage(100)
cleaner.setWattage(140)


const usedPower = function (){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].onNetwork === true){
            sum += arguments[i].wattage
        }
    }
    return sum
}

// изменение первоначальных установок
// computer.changePower('off')
// cleaner.changePower('on')

computer.getInfo()
cleaner.getInfo()
console.log(`Суммарное потребление мощности = ${usedPower(computer, cleaner)}`)