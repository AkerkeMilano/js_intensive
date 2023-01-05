class Calculator {
    constructor(val1, val2) {
        this.isValidNum(val1);
        this.isValidNum(val2);
        this.val1 = val1;
        this.val2 = val2;
    };
    isValidNum(num) {
        if(!num || !isFinite(num)) throw new Error("Невалидные данные");
    }
    setX(num) {
        this.isValidNum(num);
        this.val1 = num;
    }
    setY(num) {
        this.isValidNum(num);
        this.val2 = num;
    }
    logSum() {
        console.log(`Сумма двух чисел: ${this.val1 + this.val2}`);
    }
    logMul() {
        console.log(`Произведение двух чисел: ${this.val1 * this.val2}`);
    }
    logSub() {
        console.log(`Разность двух чисел: ${this.val1 - this.val2}`);
    }
    logDiv() {
        if(this.val2 === 0) throw new Error("Делитель не может быть равен 0"); 
        console.log(`Частное двух чисел: ${this.val1 / this.val2}`);
    }
};
