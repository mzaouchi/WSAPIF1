const Multi =(a,b)=>{
    return a*b
}

// module.exports = Multi
module.exports.Multi = Multi

const Sous =(a,b)=>{
    return a-b
}
module.exports.Sous = Sous

// module.exports = {Multi,Sous}

console.log(module.exports)