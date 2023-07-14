console.clear();
//8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
//Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
//9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
//skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
//10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
//"(XXX) XXX-XXXX". (10 taškų)

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

console.log('Raidziu kiekis:', kiekis);

