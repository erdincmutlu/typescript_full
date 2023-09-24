class User {
    public email: string
    private name: string
    readonly city: string = "London" // default value is London
    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }
}

class User2 {
    protected _courseCount = 1
    readonly city: string = "London"
    constructor(
        public email: string,
        public name: string,
    ) {
    }

    private deleteToken() {
        console.log("Token deleted")
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum: number) {
        if (courseNum <= 1) {
            throw new Error(`Course count should be more than 1`)
        }
        this._courseCount = courseNum
    }
}

class Subuser extends User2 {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}

const erdinc = new User2("erdinc@mutlu.com", "erdinc")
erdinc.city

// Property deleteToken is private and only accessible within the class
// erdinc.deleteToken()

