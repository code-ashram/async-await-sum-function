import './style.css'

/* Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет
случайное число от 1 до 5. Сделайте также функцию getNum2, которая возвращает промис, который с
задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, которая с помощью
await будет дожидаться результата getNum1, затем будет дожидаться результата getNum2,
а затем найдет сумму полученных чисел и выведет на экран. */

const randomNumGenerator = (numberFrom: number = 1, numberTo: number = 10): number => {
  const rangedNum = Math.abs(numberFrom - numberTo);
  const numInRange = Math.round(Math.random() * rangedNum);
  const minNum = Math.min(numberFrom, numberTo);
  return numInRange + minNum;
}

const getNum1 = () => {
  return setTimeout(() => {
   return randomNumGenerator(1, 5)
  })
}

console.log(getNum1())
