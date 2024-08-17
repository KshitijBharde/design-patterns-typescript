// Strategy Interface: PaymentStrategy
interface PaymentStrategy {
    pay(amount: number): void;
}

// Concrete Strategy 1: CreditCardPayment
class CreditCardPayment implements PaymentStrategy {
    public pay(amount: number): void {
        console.log(`Paid $${amount} using Credit Card.`);
    }
}

// Concrete Strategy 2: PayPalPayment
class PayPalPayment implements PaymentStrategy {
    public pay(amount: number): void {
        console.log(`Paid $${amount} using PayPal.`);
    }
}

// Concrete Strategy 3: BitcoinPayment
class BitcoinPayment implements PaymentStrategy {
    public pay(amount: number): void {
        console.log(`Paid $${amount} using Bitcoin.`);
    }
}

// Context Class: PaymentContext
class PaymentContext {
    private strategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: PaymentStrategy): void {
        this.strategy = strategy;
    }

    public executePayment(amount: number): void {
        this.strategy.pay(amount);
    }
}

// Client code
const paymentContext = new PaymentContext(new CreditCardPayment());
paymentContext.executePayment(100); // Output: Paid $100 using Credit Card.

paymentContext.setStrategy(new PayPalPayment());
paymentContext.executePayment(200); // Output: Paid $200 using PayPal.

paymentContext.setStrategy(new BitcoinPayment());
paymentContext.executePayment(300); // Output: Paid $300 using Bitcoin.
