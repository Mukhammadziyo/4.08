// Homework
// Array1. n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel2(n) nomli funksiya tuzing.
// Input: 5
// Output: [2, 4, 16, 32, 62]

function getLevel2(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    let daraja = 1;
    for (let j = 0; j < i; j++) {
      daraja *= 2;
    }
    result.push(daraja);
  }
  return result;
}

console.log(getLevel2(5));

// Array2. n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring.
// Input: n = 5, A = 2, B = 3
// Output: [2, 3, 5, 10, 20]

function createArray2(n, A, B) {
  let result = [A, B];
  for (let i = 2; i < n; i++) {
    let javob = 0;
    for (let j = 0; j < i; j++) {
      javob += result[j];
    }
    result.push(javob);
  }
  return result;
}

console.log(createArray2(5, 2, 3));

// Array3. n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.
const arr3 = [1, 2, 3, 4, 5];

function teskariTartib(arr) {
  return arr.reverse();
}

console.log(teskariTartib(arr3));

// Array4. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 5 7 9 toqlar soni = 3

function toqSonlar(arr) {
  let result = "";
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result += arr[i] + " ";
      counter++;
    }
  }
  console.log(result);
  console.log(counter);
}

const arr4 = [4, 5, 7, 8, 6, 9];
toqSonlar(arr4);

// Array5. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 4 8 6 9 7 5

function saralashArr(arr) {
  let juftlar = "";
  let toqlar = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      juftlar += arr[i];
    } else {
      toqlar.unshift(arr[i]);
    }
  }
  console.log(juftlar);
  console.log(toqlar);
}

const arr5 = [4, 5, 7, 8, 6, 9];
saralashArr(arr5);

// Array6. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ...

function evenIndexElements(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i += 2) {
    result += arr[i] + " ";
  }
  console.log(result);
}

const arr6 = [1, 2, 3, 4, 5, 6];
evenIndexElements(arr6);

// Array7. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[n-1], A[n-3], ... A[1].

function toqIndexTeskariTartibi(arr) {
  let result = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
      result += arr[i] + " ";
    }
  }
  console.log(result);
}

const arr7 = [1, 2, 3, 4, 5, 6];
toqIndexTeskariTartibi(arr7);

// Array8. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juft indekslilarini keyin toq indekslilarini chiqaruvchi programma tuzilsin.
// A[0], A[2], A[4], ... A[1], A[3], A[5],....

function juftThenToq(arr) {
  let juftIndex = "";
  let toqIndex = "";
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      juftIndex += arr[i] + " ";
    } else {
      toqIndex += arr[i] + " ";
    }
  }
  console.log(toqIndex + " " + juftIndex);
}

const arr8 = [1, 2, 3, 4, 5, 6];
juftThenToq(arr8);

// Array9. n ta elementdan tashkil topgan massiv berilgan (n juft son). Dastlab massiv elementlari orasidan toq indekslilarini o'shish tartibida keyin juft indekslilarini kamayish tartibida chiqaruvchi programma tuzilsin. A[1], A[3], A[5],.. A[6], A[4], A[2], A[0]. Shart operatori ishlatilmasin.

function elemetlarOrasidagiToqIndex(arr) {
  let toqIndex = "";
  let juftIndex = "";

  for (let i = 1; i < arr.length; i += 2) {
    toqIndex += arr[i] + " ";
  }

  for (let i = arr.length - 1; i >= 0; i -= 2) {
    juftIndex += arr[i] + " ";
  }

  console.log(toqIndex + " " + juftIndex);
}

const arr9 = [1, 2, 3, 4, 5, 6];
elemetlarOrasidagiToqIndex(arr9);

// Array10. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin. A[0], A[1], A[n-1], A[n-2], A[2], A[3], A[n-3], A[n-4], ...

function formulaliFunksiya(arr) {
  let result = [];
  let bosh = 0;
  let oxir = arr.length - 1;
  while (bosh <= oxir) {
    result.push(arr[bosh]);
    if (bosh !== oxir) {
      result.push(arr[oxir]);
    }
    bosh++;
    oxir--;
  }
  console.log(result);
}

const arr10 = [1, 2, 3, 4, 5, 6];
formulaliFunksiya(arr10);

// Array11. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlaridan tashqari elementlari yig'indisini qaytaruvchi rangeOutSum(arr) nomli funksiya tuzilsin.

function rangeOutSum(arr, k, l) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i < k || i > l) {
      sum += arr[i];
    }
  }

  return sum;
}

const arr11 = [1, 2, 3, 4, 5, 6];
const k = 2,
  l = 4;
console.log(rangeOutSum(arr11, k, l));

// Array12. Massivga kiritilgan qiymatlardan truthy va falsy elementlaridan iborat alohida 2 ta massiv hosil qiling.
// Input: [10, false, “”, “Abdulaziz”, null]
// Output:
// Truthy: [10, “Abdulaziz”]
// Falsy: [false, “”, null]

function splitTruthyFalsy(arr) {
  let truthy = [];
  let falsy = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthy.push(arr[i]);
    } else {
      falsy.push(arr[i]);
    }
  }

  return { truthy, falsy };
}

const arr12 = [10, false, "", "Abdulaziz", null];
const result12 = splitTruthyFalsy(arr12);
console.log("Truthy:", result12.truthy);
console.log("Falsy:", result12.falsy);

// Array13. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv juft indeksli elementlari orasidan kichigini aniqlovchi getOddMin(arr) nomli funksiya tuzilsin.

function getOddMin(arr) {
  let min = arr[0];

  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

const arr13 = [10, 3, 7, 1, 4, 9];
console.log(getOddMin(arr13));

// Array14. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv toq indeksli elementlari orasidan kattasini aniqlovchi getEvenMax(arr) tuzilsin.

function getEvenMax(arr) {
  let max = arr[1];

  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// Foydalanish:
const arr14 = [10, 3, 7, 1, 4, 9];
console.log(getEvenMax(arr14));
