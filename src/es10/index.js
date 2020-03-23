let array = [1,2,3, [1,2,3,[1,2,3]]]
console.log(array.flat(2))

let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value, value * 2 ]))

let hello = '        hello world           '
console.log(hello.trim())
//trimStart solo elimina los iniciales
//trimEnd solo elimina los feniales

//el error ya esta por dejecto en el try/catch
try{

}catch{
    error
}

//crea un objeto segun la matriz clave/valor
let entries = [['name','santiago'],['age',19]]
console.log(Object.fromEntries(entries))

//obtener description de un objetod e tipo symbol
let mySymbl = 'my simbol'
let symbol = Symbol(mySymbl)
console.log(symbol.description)