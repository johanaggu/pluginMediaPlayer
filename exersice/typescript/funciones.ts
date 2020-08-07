// function
function add(a: number, b: number): number {
    return a + b
}

const suma = add(2,4)


//function return function

function createAdder(a:number): (number)=>number {
    return function(b: number){
        return a+b
    }
};

let addOne = createAdder(2);
let addDos = addOne(5);

//------------------------------ return No Obligatorio -------------------------
    //------firstName opcional && lastName valor por definicion
function fullName(firstName?: string, lastName: string = "Ramirez" ): string {
    return `${firstName} ${lastName}`
}

const Johan = fullName("Johan")
