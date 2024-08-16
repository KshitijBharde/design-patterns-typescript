// Step 1: Define an interface or an abstract class for the products
interface Product {
    operation(): string;
}

// Step 2: Create concrete classes implementing the Product interface
class ConcreteProductA implements Product {
    public operation(): string {
        return 'Result of ConcreteProductA';
    }
}

class ConcreteProductB implements Product {
    public operation(): string {
        return 'Result of ConcreteProductB';
    }
}

// Step 3: Create a Creator class or method that returns the product
class Creator {
    public static factoryMethod(type: string): Product {
        if (type === 'A') {
            return new ConcreteProductA();
        } else if (type === 'B') {
            return new ConcreteProductB();
        } else {
            throw new Error('Invalid product type');
        }
    }
}

// Usage Example
const productA = Creator.factoryMethod('A');
console.log(productA.operation()); // Output: Result of ConcreteProductA

const productB = Creator.factoryMethod('B');
console.log(productB.operation()); // Output: Result of ConcreteProductB
