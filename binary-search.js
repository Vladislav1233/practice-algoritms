// BEGIN: Бинарный поиск

/*
* ЗАДАЧА 1. 
* Найти элемент в массиве.
*/

/* 
* К примеру у нас есть массив чисел. 
* Если массив не отсортирован можно воспользоваться методом sort()
*/
const arr = [8, 1, 2, 3, 4, 5, 6, 7, ];

function searchEl(arr, el) {
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
console.log(searchEl(arr, 8)); // Элемент находится под индексом 7
console.log(searchEl(arr, 9)); // Элемента нет в массиве. -1

// END: Бинарный поиск