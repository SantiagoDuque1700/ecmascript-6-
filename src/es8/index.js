const data = {
    frontend : 'alguien',
    backend : 'santiago',
    desing : 'otro',
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

const data = {
    frontend : 'alguien',
    backend : 'santiago',
    desing : 'otro',
}

const values = Object.values(data)
console.log(values)
console.log(values.length)

const string = 'hello'
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12,' ----'))
console.log('food'.padEnd(12, '  ----'))

const obj = {
    name: 'santiago', //establece que puede tener otro valor o no la , final
}

//Asyn es8
const helloWOrld = () => {
    return new Promise((resolve,reject) =>{
        (true)
            ? setTimeout(() => resolve("Hello world"),3000)
            : reject(new Error('Test Error'))
    })
}

const helloAsync = async() =>{ //el async la define como una funcion que usa el async/await
    const hello = await helloWOrld()
    console.log(hello)
}

helloAsync()

const anotherFunc = async() => {
    try{
        const hello = await helloWOrld()
        console.log(hello)
    }catch(error){
        console.log(error)
    }
}

anotherFunc()