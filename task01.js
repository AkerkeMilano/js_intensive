function test() {
    let firstValue = +prompt('Введите первое значение');
    let secondValue = +prompt('Введите второе значение');
    if (!isNaN(firstValue) && !isNaN(secondValue)) {
      console.log(firstValue.toString(secondValue));
    } else {
      console.log('Некорректный ввод!');
    }
    return;
  }

test();