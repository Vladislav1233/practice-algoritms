// BEGIN: Бинарный поиск

/*
* ЗАДАЧА 1. 
* Найти элемент в массиве.
*/

/* 
* К примеру у нас есть массив чисел. 
* Если массив не отсортирован можно воспользоваться методом sort()
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function binSearch(arr, el) {
  /*
  * Определяем две границы - левую(до которой нет нужного элемента) 
  * и правую (после которой нет нужного элемента).
  * В данном массиве значение границ считаем индекс элементов.
  */
  let left = -1;
  let right = arr.length;

  // O(log N)
  while (right - left > 1) {
    /*
    * Находим средину между нашими границами.
    */
    const mid = Math.floor((left + right) / 2);

    /*
    * Проверяем нашли ли искомый лемент.
    */
    if(arr[mid] === el) {
      return mid;
    }
    /*
    * Узнаем где находится искомый элемент относительно центра (справа или слева)
    */
    if(arr[mid] > el) {
      /*
      * Если определили что mid больше el то значит элемент находится слева и нам нужно
      * сужать границы подменив значение right.
      */
      right = mid;
    } else {
      /*
      * Или левее его уже точно нет.
      */
      left = mid;
    }
  }
  /*
  * Если не нашли возвращаем -1.
  */
  return -1;
}
console.log('Поиск элемнта в массиве:', binSearch(arr, 8)); // Элемент находится под индексом 7
console.log('Поиск элемнта в массиве:', binSearch(arr, 9)); // Элемента нет в массиве. -1


/*
* ЗАДАЧА 2.
* Посчитать сколько определенное число встрачается раз.
* То есть частоту вхождений определенного элемента.
*/
const arr2 = [1, 2, 3, 2, 4, 5, 2, 3, 8, 12, 10, 3, 3];

/*
* Сортируем массив.
*/
arr2.sort((a, b) => a - b);

/*
* С помощью бинарного поиска нам нужно получить элемент.
* Далее разойтись вправо и влево до тех пор пока не достигнем "не элемента".
*/
function countFrequency(arr, el) {
  /*
  * Получаем нужный нам элемент.
  */
  const targetEl = binSearch(arr, el);
  let countRight = 0;
  let countLeft = 0;

  /*
  * Если элемента нет мы сразу возвращаем 0
  */
  if(targetEl === -1) {
    return 0
  }
  /*
  * Ищем кол-во таких же элементов справа от найденного
  */
  for(let i = targetEl + 1; arr2[targetEl] === arr2[i]; i++) {
    countRight++;
  };
  /*
  * Ищем кол-во таких же элементов слева от найденного
  */
  for(let i = targetEl - 1; arr2[targetEl] === arr2[i]; i--) {
    countLeft++;
  };

  return countRight + countLeft + 1;
};
console.log(
  'Количество вхождений элемнта в массив:', countFrequency(arr2, 3)
);

// END: Бинарный поиск