// const user: (string | number)[] = [1, "erdinc"]
let user: [string, number, boolean]

user = ["erdinc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "erdinc"
newUser.push("2", 1) // This is wrong, but it doesn't give any error

export { }