/// O(n) - сложность

const myIterable = { from: 1, to: 4 };

myIterable[Symbol.iterator] = function() {
    if(this.to < this.from) throw Error("Укажите правильный интервал, from должен быть меньше чем to");
    if(!isFinite(this.from) || !isFinite(this.to)) throw Error("Интервал должен быть указан в виде чисел");
    return {
        current: this.from,
        last: this.to,
        next() {
            if(this.current <= this.last){
                return { done: false, value: this.current++};
            } else {
                return { done: true};
            }
        }
    }
};
for (let item of myIterable) {
    console.log(item);
    }