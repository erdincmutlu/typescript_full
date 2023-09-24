var score = 33;
score = 44;
score = "55";
var erdinc = { name: "erdinc", id: 334 };
erdinc = { username: "erdinc", id: 334 };
// function getDbID(id: number |string){
//     // making some API calls
//     console.log(`DB id is: ${id}`)
// }
getDbId(3);
getDbId("3");
// Check type and use accordingly
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// Union for array
var data = [1, 2, 3]; // Number only
var data2 = ["1", "2", "3"]; // String only
var data3 = [1, 2, 3]; // Either all strings array or all numbers array
var data4 = ["1", "2", "3"]; // Either all strings array or all numbers array
var data5 = [1, 2, "3"]; // Elements are individually a string or a number
var data6 = ["1", "2", 3, true]; // Elements are individually either
// Assign some values to be strict
var pi = 3.14;
// Not assignable
// pi = 3.145
var seatAllotment;
seatAllotment = "aisle";
// Not assignable to this value
// seatAllotment = "crew"
