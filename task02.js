function test() {
    let firstValue = +prompt('Введите первое значение');
    if (isNaN(firstValue)) {
      console.log('Некорректный ввод!');
      return;
    }
    let secondValue = +prompt('Введите второе значение');
    if (isNaN(secondValue)) {
      console.log('Некорректный ввод!');
      return;
    }
    console.log(`Ответ: ${firstValue + secondValue}, ${firstValue / secondValue}`);
    return;
  }

  test();