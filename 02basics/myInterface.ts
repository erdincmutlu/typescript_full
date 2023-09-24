interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    startTrial: () => string  // Define method either this way
    startTrialNew(): string   // or this way. This one looks better
    getcoupon(couponname: string, value: number): number
}

// Re-opening of the interface (inheritance)
interface User {
    githubToken: string
}

// Extending
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const erdinc: Admin = {
    dbId: 22, email: "erdinc@mutlu.com", userId: 2211,
    role: "admin",
    githubToken: "github",
    startTrial: () => {
        return "trial started"
    },
    startTrialNew: () => {
        return "trialnew started"
    },
    getcoupon: (name: "erdinc10", off: 10) => { // Note used "name" here, no need to match with "couponname" 
        return 10
    }
}

erdinc.email = "erdinc@em.com"
// erdinc.dbId = 23

export {}
