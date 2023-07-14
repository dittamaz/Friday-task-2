console.clear();

console.log('-------  1 uzduotis ---------');
//1. Palyginti du skaičius a ir b. Išvesti į konsolę, 
//kuris didesnis arba jie lygūs. (4 taškai)

function Palyginimas (a, b) {
    if (a > b) {
        console.log('a yra didesnis uz b');
    } else if (a < b) {
        console.log('a yra maziau uz b');
    } else {
        console.log('a ir b yra lygus');
    }
}
Palyginimas (11, 11);

console.log('-------  2 uzduotis ---------');
//2. Naudojant for ciklą, išvesti į konsolę skaičius 
//nuo 1 iki 10. (5 taškai)

for (let i = 1; i <= 10; i++ ) {
    console.log(i);
}

console.log('-------  3 uzduotis ---------');
//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

for (let i = 0; i <= 10; i+= 2) {
    console.log(i);
}

console.log('-------  4 uzduotis ---------');
//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius 
//skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

const Skaiciai = () => {

    let array = [];
    for (let i = 0; i < 5; i++) {
        array.push(Math.floor(Math.random() * (10 - 1 + 1) + 1 ));
        }
        return array;
    }
    console.log(Skaiciai());

console.log('-------  5 uzduotis ---------');
//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius
// nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

let Skaiciai2 = 0;
while (Skaiciai2 !== 5) {
    Skaiciai2 = Math.floor(Math.random() * 10) + 1;
    console.log(Skaiciai2);
}

console.log('-------  6 uzduotis ---------');
//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės
// būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

let Skaiciai3 = [];
const arrLength = Math.floor(Math.random() * (30 - 20 + 1) + 20);

console.log(arrLength);

for (let i = 0; i < arrLength; i++) {
    Skaiciai3.push(Math.floor(Math.random() * (30 - 10 + 1) + 10));
}
console.log(Skaiciai3);

console.log('-------  7 uzduotis ---------');
//7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A,
// B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos 
// raidės. (7 taškai)

const array = [];
const raides = ['A', 'B', 'C', 'D'];
const arrayLength = 100;


for (let i = 0; i < arrayLength; i++) {
  const randomIndex = Math.floor(Math.random() * raides.length);
  array.push(raides[randomIndex]);
}

const kiekis = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
};

for (let i = 0; i < array.length; i++) {
  kiekis[array[i]]++;
}

console.log("Raidziu kiekis:", kiekis);

console.log('-------  8 uzduotis ---------');
//8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji.
// Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai
// (negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, 
// jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai,
// bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

function lygineSuma(a, b) {
    if ((typeof a === 'number' && Array.isArray(b)) || (Array.isArray(a) && typeof b === 'number')) {
      return "Abu kintamieji turi būti skaičiai arba masyvai";
    }
  
    if (typeof a === 'number' && typeof b === 'number') {
      const sum = a + b;
      if (sum % 2 === 0) {
        return sum;
      } else {
        return "Suma nelyginė";
      }
    }
  
    if (Array.isArray(a) && Array.isArray(b)) {
      const sum = a.length + b.length;
      if (sum % 2 === 0) {
        return sum;
      } else {
        return "Suma nelyginė";
      }
    }

  }
  
  // Testuojam
  console.log(lygineSuma(2, 2));  
  console.log(lygineSuma([2, 5, 7], [7, 8, 8])); 
  console.log(lygineSuma([2, 5, 9], [7, 8])); 
  console.log(lygineSuma([2, 5, 9], 8));
  console.log(lygineSuma(2, [7, 8])); 

  console.log('-------  9 uzduotis ---------');
//9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas,
// kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

function pirminisSkaicius(number) {
    if (typeof number !== 'number' || !Number.isInteger(number) || number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  console.log(pirminisSkaicius(7)); 
  console.log(pirminisSkaicius(14));
  console.log(pirminisSkaicius(-8));

  console.log('-------  10 uzduotis ---------');
//10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą.
// Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)

