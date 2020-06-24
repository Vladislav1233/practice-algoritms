/*
* ЗАДАЧА 1.
* Ребенок поднимается по лестнице из n ступеней. За один шаг он может
* переместиться на одну, две или три ступеньки. Найдите кол-во возможных 
* вариантов перемещения ребенка по лестнице.
*/

/*
* 1. Определяем базовый случай
* if(n < 0) return 0; 
* if(n === 0) return 1; мы наверху.
*
* 2. Реккурентное соотношение
* c[n] = c[n - 1] + c[n - 2] + c[n - 3];
*/

let hit = 0;
let miss = 0;

function countWays(n, cache = []) {
  if(n < 0) {
    miss++;
    return 0;
  }
  if(!cache[n]) {
    miss++;
    if(n === 0) {
      cache[n] = 1;
    } else {
      cache[n] = countWays(n - 1, cache) + countWays(n - 2, cache) + countWays(n - 3, cache);
    }
    return cache[n];
  } else {
    hit++;
    return cache[n];
  }
}

console.log(
  'Количество вариантов:', countWays(4), 
  '| miss cache:', miss, 
  '| hit cache:', hit
);