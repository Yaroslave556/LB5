// Метод map
// Повертає новий трансформований масив масив:
let addArray = [1, 3, 1, 7, 9];
let addArray2 = addArray.map(el => el + 20);
console.log(addArray2);

// Метод filter
// Фільтрує масив за вказаними значеннями:
let filterArray = [1, 3, 1, 7, 9];
let filterArray2 = filterArray.filter(el => el === 7 || el === 9);
console.log(filterArray2);

// Метод reduce
// Повертає результат виконання операцій з усіма елементами масиву:
let reduceArray = [1, 3, 1, 7, 9];
let reduceArray2 = reduceArray.reduce((total, current) => total * current);
console.log(reduceArray2);

// Метод find
// Повертає перший елемент масиву, який відповідає умові
let findArray = [6, 7, 3, 9, 5, 10, 15];
let findArray2 = findArray.find(el => el < 15);
console.log(findArray2);

// Метод findIndex
// Повертає індекс елементу масиву, який відповідає умові, якщо елемент не знайдено, то повертає -1.
let fiArray = [27, 7, 3, 9, 5, 10, 15];
let fiArray2 = fiArray.findIndex(el => el == 15);
console.log(fiArray2);

// Метод indexOf
// Повертає індекс першого елементу масиву, який відповідає умові
let colors = ["Yellow", "Pink", "Blue", "Green"];
let result = colors.indexOf("Green");
console.log(result);

// Метод push
// Додає елемент в кінець масиву:
let arr = [6, 7, 15, 9, 5, 10, 7];
let pushed = arr.push(14);
console.log(pushed);
console.log(arr);

// Метод pop
// Видаляє останній елемент масиву:
let arrt = [6, 7, 15, 9, 5, 10, 7];
let del = arrt.pop();
console.log(del);
console.log(arrt);

// Метод shift
// Видаляє перший елемент масиву та повертає його значення:
let shiftArr = [6, 7, 15, 9, 5, 10, 7];
let shiftDel = shiftArr.shift();
console.log(shiftDel);
console.log(shiftArr);

// Метод unshift
// Додає один або більше елементів в початок масиву
let unshiftArr = [6, 7, 15, 9, 5, 10, 7];
let unshifted = unshiftArr.unshift(5, 6, 7);
console.log(unshifted);
console.log(unshiftArr);

// Метод splice
// Замінює елемент масиву:
let spliceArr = ['Daniil', 'Denis', 'Vitalik', 'Anton', 'Denis'];
spliceArr.splice(4, 1, 'Maksim');
console.log(spliceArr);

// Метод slice
// Повертає значення заданого інтервалу масиву:
let sliceArr = ['Daniil', 'Denis', 'Vitalik', 'Anton', 'Denis'];
let sliced = sliceArr.slice(1, 4);
console.log(sliced);

// Метод sort
// Сортує елементи за числовим значенням:
let sortArr = [25, 12, 1, 28, 5];
let sorted = (firstEl, secondEl) => firstEl - secondEl;
sortArr.sort(sorted);
console.log(sortArr);

document.write("Масив1"+"</br>");
let mas1=[];
for (let i=0; i<10; i++) {
mas1[i]= Math.random();
document.write(mas1[i]+'</br> ');
}

document.write("Масив2"+"</br>");
let mas2=[];
for (let i=0; i<10; i++) {
mas2[i]= Math.random()*10;
document.write(mas2[i]+'</br> ');
}

let mas3=[];
document.write("Масив3"+"</br>");
for (let i=0; i<10; i++) {
    mas3[i]=Math.round(Math.random()*10);
    document.write(mas3[i]+'</br> ');
}

let mas4 =[];
document.write("Масив4"+"</br>");
for (let i=0; i<10; i++) {
    mas4[i]= Math.random();
    document.write(mas4[i]+'</br> ');
}

document.write("Масив4 помножений на 10"+"</br>");
for (let i=0; i<10; i++) {
    mas4[i] = mas4[i] * 10;
    document.write(mas4[i]+'</br> ');
}

document.write("Масив4"+"</br>");
for (let i=0; i<10; i++) {
    mas4[i]=Math.floor(Math.random()*10);
    document.write(mas4[i]+'</br> ');
}

document.write("Масив4"+"</br>");
for (let i=0; i<10; i++) {
    mas4[i]=Math.round(Math.random()*10);
    document.write(mas4[i]+'</br> ');
}

document.write("Масив4"+"</br>");
for (let i=0; i<10; i++) {
    mas4[i]=Math.ceil(Math.random()*10);
    document.write(mas4[i]+'</br> ');
}





