class Singleton {
    // The static instance that will hold the single instance of the class
    private static instance: Singleton;

    // Private constructor to prevent direct class instantiation
    private constructor() {
        // Initialization code here
        console.log("Singleton instance created!");
    }

    // Method to get the single instance of the class
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public doSomething(): void {
        console.log("Doing something...");
    }
}

// Usage example
const singleton1 = Singleton.getInstance();
singleton1.doSomething();

const singleton2 = Singleton.getInstance();
singleton2.doSomething();

// Verify both variables hold the same instance
console.log(singleton1 === singleton2);  // Output: true
