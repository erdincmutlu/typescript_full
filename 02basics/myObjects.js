"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserOld = {
    name: "Erdinc",
    email: "erdinc@mutlu.com",
    isActive: true
};
function createUserOld(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Erdinc", isPaid: false, email: "erdinc@mutlu.com" };
createUserOld(newUser);
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createUser(user) {
    return { name: "", email: "", isActive: true };
}
createUser({ name: "", email: "", isActive: true });
var myUser = {
    _id: "1234",
    name: "erdinc",
    email: "erdinc@mutlu.com",
    isActive: false
};
myUser.email = "erdinc@gmail.com";
