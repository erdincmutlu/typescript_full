let score: number | string = 33

score = 44
score = "55"

// Union on types

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let erdinc: User | Admin = { name: "erdinc", id: 334 }

erdinc = { username: "erdinc", id: 334 }

// function getDbID(id: number |string){
//     // making some API calls
//     console.log(`DB id is: ${id}`)
// }

getDbId(3)
getDbId("3")

// Check type and use accordingly
function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
}


// Union for array
const data: number[] = [1, 2, 3]        // Number only
const data2: string[] = ["1", "2", "3"] // String only
const data3: string[] | number[] = [1, 2, 3] // Either all strings array or all numbers array
const data4: string[] | number[] = ["1", "2", "3"] // Either all strings array or all numbers array
const data5: (string | number)[] = [1, 2, "3"] // Elements are individually a string or a number
const data6: (string | number | boolean)[] = ["1", "2", 3, true] // Elements are individually either

// Assign some values to be strict
let pi: 3.14 = 3.14
// Not assignable
// pi = 3.145

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// Not assignable to this value
// seatAllotment = "crew"
