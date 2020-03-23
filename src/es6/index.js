function nueva(name, age, country){
    var name = name || 'santiago';
    var age = age || 32;
    var country = country || "Col";

    console.log(name,age,country);
}


//es6

function nuevaes6(name = 'santiago',age = 32, country = 'CO'){
    console.log(name,age,country);
}

nueva();
nueva('Alan',22,'MX')
nuevaes6();
nuevaes6('ALan',22,'RU');

let hello = "Hello"
let world = "World"
let frace = hello + ' ' + world
console.log(frace)

let frece2 = `${hello} ${world}`
console.log(frece2)


let lorem = `texto inciial
salto de linea`

console.log(lorem)

let person = {
    'name' : 'santiago',
    'age' : 32,
    'country' : 'CO'
}

let {name,age,country} = person

console.log(name,age,country)

let team1 = ['juan','andres','santiago']
let team2 = ['vale','lau','nata']

let group = ['Pau',...team1,...team2]

console.log(group)

var hola = 'Hola' //disponible de manera global

{
    var globalvar = 'Global var'
}

{
    let globalLet = 'Global let' // let solo es accesible en el bloque de codigo que es creada
    console.log(globalLet)
}

console.log(globalvar)

const a = 'b' // no se le puede cambiar el valor a const
//a = 'a' este bloque da error


let name = 'santi'
let age = 19

obj = {name : name, age : age}
//es6
obj2 = {name,age}

console.log(obj)
console.log(obj2)

const names = [
    {name : 'santiago',age : 19},
    {name : 'andres', age : 20}
]

let listOfNames = names.map(function (item){
    console.log(item.name)
})

let listOfnames2 = names.map (item => console.log(item.name))

const listOfNames3 = (name,age) =>{
    //aqui la ejecucion
}

const  lisOfname4 = name => {
    //aqui la ejecucion solo para un dato
}

const square = num => num * num;

console.log(square(2))

const helloPromise = () =>{
    return new Promise((resolve,reject) =>{
        if(true){
            resolve('Todo bien')
        }else{
            reject('Todo mal')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))

class calculator{
    constructor(){
        this.valueA = 0
        this.valueB = 0
    }

    sum(valA,valB){
        this.valueA = valA
        this.valueB = valB
        return this.valueA + this.valueB
    }

    sub(valA,valB){
        this.valueA = valA
        this.valueB = valB
        return this.valueA - this.valueB
    }
}

const calc = new calculator()
console.log(calc.sum(1,2))
console.log(calc.sub(4,2))

import { hello } from './module'

hello()

function* helloWorld(){
    if(true){
        yield 'Hello, '
    }

    if(true){
        yield 'World'
    }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)

