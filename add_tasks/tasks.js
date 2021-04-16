const arr = [
    { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
    { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
    { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
    { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
    { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
    { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
    { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
    { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
    { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
    { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
    { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
    { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 }
    ];

//1. отримати масив вчених що народилися в 19 ст
let arrBorn = [];
arr.forEach((el)=>{
    if(el.born > 1800 && el.born < 1900){
        arrBorn.push(el);
    }
});
console.log(arrBorn);
//2. знайти суму років скільки прожили всі вченні
let lifeSum = 0;
arr.forEach((el)=>{
    lifeSum += el.dead - el.born;
});
console.log(lifeSum);
//3. Відсортувати вчених по алфавіту
let arrNameSort = [];
arr.forEach((el)=>{
    arrNameSort.push(el.name);
    arrNameSort.sort();
});
console.log(arrNameSort);
//4. Відсортувати вчених по кількості прожитих років
arr.sort((a,b)=>(a.dead - a.born)-(b.dead - b.born));
console.log(arr);
//5. Видалити з масива вчених що народилися в 15 або 16 або 17 столітті
arr.forEach((el)=>{
    if(el.born > 1500 && el.born < 1799){
        arr.splice(arr.indexOf(el),1);
    }
});
console.log(arr);
//6. Знайти вченого який народився найпізніше.
arr.sort((a,b)=>a.born - b.born);
console.log(arr[arr.length-1]);
//7. Знайти рік народження Albert Einstein
arr.forEach((el)=>{
    if(el.name === 'Albert' && el.surname === 'Einstein'){
        console.log(el.born);
    }
});
//8. знайти вчених прізвище яких починається на літеру С
arr.forEach((el)=>{
    if(el.surname[0] === 'C'){
        console.log(el);
    }
})
//9. Видалити з масива всіх вчених імя яких починається на A
arr.forEach((el)=>{
    if(el.name[0] === 'A'){
        arr.splice(arr.indexOf(el),1);
    }
})
console.log(arr);
//10. Знайти вченого який прожив найбільше і вченого який прожив найменьше
arr.sort((a,b)=>(a.dead - a.born)-(b.dead - b.born));
console.log(arr[0]);
console.log(arr[arr.length-1]);
//11. Знайти вчених в яких співпадають перші літери імені і прізвища
arr.forEach((el)=>{
    if(el.name[0] === el.surname[0]){
        console.log(el);
    }
})
//12. Дізнатися чи всі вченні працювали в 19 столітті
arr.forEach((el)=>{
    if((el.born > 1800 && el.born < 1900) && (el.born - 1900)>18){
        console.log(`${el.name} : true`);
    }else{
        console.log(`${el.name} : false`);
    }
});
