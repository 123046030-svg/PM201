console.log("hola mundo JS con node")

let edad1 = 12
let edad2 = 34

console.log("edad promedio: " )
console.log((edad1 + edad2)/2)

console.time("mi proceso ")

console.timeEnd("mi proceso ")
for (let i = 0; i < 1; i++) {  
    console.timeEnd("mi proceso ")
}

let usuarios = [
    {
        nombre: "Regina",
        edad: 21,

    }
];

console.table(usuarios)