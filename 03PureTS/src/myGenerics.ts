const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

identityThree(3)

identityThree("erdinc")

identityThree(true)

function identityFour<T>(val: T): T {
    return val
}

interface Bootle {
    brand: string,
    type: number
}

identityFour<Bootle>({ brand: "erdinc", type: 1 }) // Use <Bottle> to use the type

function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

// Change above function to arrow function
const getMoreSearchProducts = <T>(products: T[]): T => {
    // do some database operations
    const myIndex = 4
    return products[myIndex]
}

// People using React use the comma afterwards. This is to show it is not JSX syntax 
// but rather syntax for generics
// const getMoreSearchProducts = <T,>(products: T[]): T => {

interface Database {
    connection: string
    username: string
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

// anotherFunction(3, {})

interface Quiz {
    name: string
    type: string
}

interface Course {
    name: string
    author: string
    subject: string
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}