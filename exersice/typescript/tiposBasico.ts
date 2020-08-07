//Boolean 
let muted: boolean = true;
muted = false


//Number 
let numerador: number = 45;
let denominador: number = 67;
let resultado: number = numerador / denominador;


//String 
let nombre: string = "Nombre";
let saludar: string = `Hola me llamo ${nombre}`

//Array
let people: string[] = []
people = ["Isabel", "Johan", "Raul"]
people.push("900")

let peopleAndNumbers: Array<string | number | object> = [];
peopleAndNumbers.push(200, "hola", { nombre: "joahn" })

//enum 
enum Color {
    Rojo="Rojo",
    Verde="Verde",
    Azul= "Azul",
}

let colorFav: Color = Color.Azul


//any
let comodin: any= "Joker";
comodin = {
    type: "Joker"
}


//Object 

let someObject: object = {
    nombre : "Johan"
}

console.log(someObject);
