// const Multi = require('./ModuleLocal')
// const Sous = require('./ModuleLocal')
// const obj = require('./ModuleLocal')
const {Multi,Sous} = require('./ModuleLocal')

// console.log('Hello Node')

const Sum =(a,b)=>{
    return  a+b
}

// console.log(process.argv)

// console.log(Sum(Number(process.argv[2]),Number(process.argv[3])))

// console.log(process)


console.log(Multi(Number(process.argv[2]),Number(process.argv[3])))
console.log(Sous(Number(process.argv[2]),Number(process.argv[3])))




