/// O(n) - сложность
function selectFromInterval(arrayOfNums, firstInt, secondInt){
    if(!Array.isArray(arrayOfNums)) throw new Error("Нужно ввести массив из чисел");
    if(!isFinite(firstInt) || !isFinite(secondInt)) throw new Error("Введите числа для указания интервала!");
    const endInt = Math.max(firstInt, secondInt);
    const startInt = Math.min(firstInt, secondInt);
    const result = [];
    arrayOfNums.forEach(element => {
        if(!isFinite(element)) throw new Error("Массив должен состоять из чисел");
        if(element >= startInt && element <= endInt){
            result.push(element);
        }
    });
    return result;
};
