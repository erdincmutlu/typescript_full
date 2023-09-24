"use strict";
class User {
    constructor(email, name) {
        this.city = "London"; // default value is London
        this.email = email;
        this.name = name;
    }
}
class User2 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "London";
    }
}
const erdinc = new User("erdinc@mutlu.com", "erdinc");
erdinc.city;
