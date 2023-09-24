const UserOld = {
    name: "Erdinc",
    email: "erdinc@mutlu.com",
    isActive: true
}

function createUserOld({ name: string, isPaid: boolean }) { }

let newUser = { name: "Erdinc", isPaid: false, email: "erdinc@mutlu.com" }

createUserOld(newUser)

function createCourse(): { name: string, price: number } {
    return { name: "reactjs", price: 399 }
}


// Type aliases
type User2 = {
    name: string
    email: string
    isActive: boolean
}


function createUser(user: User2): User2 {
    return { name: "", email: "", isActive: true }
}

createUser({ name: "", email: "", isActive: true })

// readonly keyword
// Optional is ? before ":" case
type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credCardDetails?: number
}

let myUser: User = {
    _id: "1234",
    name: "erdinc",
    email: "erdinc@mutlu.com",
    isActive: false
}

myUser.email = "erdinc@gmail.com"

// Cannot do this
// myUser._id = "9876" 

// Combine two types to a new type
type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


export { }