//Переписать консольное приложение из предыдущего юнита на классы.

class Device {
    constructor(status, name) {
        this.onNetwork = status;
        this.name = name;
    }
    getInfo(){
        if (this.onNetwork) {
            console.log(`Прибор (${this.name}) включен в сеть`)
        } else {
            console.log(`Прибор (${this.name}) не включен в сеть`)
        }
    }
    setWattage(usingPower){
        this.wattage = usingPower
    }
    changePower(action){ //Включение или выключение прибора (on/off)
        if (action === 'on'){
            this.onNetwork = true
        } else if (action === 'off'){
            this.onNetwork = false
        }
    }
}

const usedPower = function (){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].onNetwork === true){
            sum += arguments[i].wattage
        }
    }
    return sum
}

let computer = new Device(true, 'компьютер');
let cleaner = new Device(false, 'пылесос');
computer.setWattage(100);
cleaner.setWattage(140);

// изменение первоначальных установок
// computer.changePower('off')
// cleaner.changePower('on')

computer.getInfo()
cleaner.getInfo()
console.log(`Суммарное потребление мощности = ${usedPower(computer, cleaner)}`)