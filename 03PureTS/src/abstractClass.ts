abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    // You have to define this method in your class
    abstract getSephia(): void

    // The definiton is given, you can override if you want to.
    getReelTime(): number{
        // Some complex calculation
        return 8
    }
}


class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSephia(): void {
        console.log("sephia")
    }

    // You can override this method
    getReelTime(): number {
        return 3
    }
}

const em = new Instagram("test", "Test", 3)
