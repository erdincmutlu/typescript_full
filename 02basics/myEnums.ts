enum SeatChoice {
    AISLE = 10,   // Start with 10
    MIDDLE = 22,  // 22
    WINDOW,       // 23
    FOURTH        // 24
}

enum SeatChoice2 {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = 3,
    FOURTH
}

// Use const so the generated js code will be simple
const enum SeatChoice3 {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = 3,
    FOURTH
}

const erSeat = SeatChoice3.AISLE
// Generated js code is simple:
// var erSeat = "aisle" /* SeatChoice3.AISLE */;

export { }