/// foe each method takes each element in arr
// let salaries=[10000,12000,30000,12000,43000]
// salaries.forEach(((i)=>{
//     console.log(i)
// }))


// taking its index also
// let salaries=[10000,12000,30000,12000,43000]
// salaries.forEach(((i,j)=>{
//     // console.log(i)
//     console.log(`sal is ${i}, index is ${j}`)
// }))


//
// let salaries=[10000,12000,30000,12000,43000]
// salaries.forEach(((i,j,k)=>{
//     // console.log(i)
//     console.log(`sal is ${i}, index is ${j} total array is ${k}`)
// }))

// sal increment
// let salaries=[10000,12000,30000,12000,43000]
// salaries.forEach(((i)=>{
//     console.log(`b4 increment sal ${i}`)
//     let incre=i/10;
//     i=i+incre;
//     console.log(`after increment sal ${i}`)
// }))


// passing a function to for each
let salaries=[10000,12000,30000,12000,43000]
salaries.forEach(incre)

function incre(value){
    console.log(`1st sal is ${value}`)
    let increment=value/10;
    value=value+increment;
    console.log(value)
}