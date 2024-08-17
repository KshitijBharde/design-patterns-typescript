// Subsystem 1: Order Service
class OrderService {
    public placeOrder(productId: number, quantity: number): void {
        console.log(`Order placed for product ${productId} with quantity ${quantity}.`);
    }
}

// Subsystem 2: Payment Service
class PaymentService {
    public makePayment(amount: number): void {
        console.log(`Payment of $${amount} made successfully.`);
    }
}

// Subsystem 3: Shipping Service
class ShippingService {
    public shipProduct(productId: number): void {
        console.log(`Product ${productId} shipped.`);
    }
}

// The Facade Class: ECommerceFacade
class ECommerceFacade {
    private orderService: OrderService;
    private paymentService: PaymentService;
    private shippingService: ShippingService;

    constructor() {
        this.orderService = new OrderService();
        this.paymentService = new PaymentService();
        this.shippingService = new ShippingService();
    }

    public placeOrder(productId: number, quantity: number, amount: number): void {
        this.orderService.placeOrder(productId, quantity);
        this.paymentService.makePayment(amount);
        this.shippingService.shipProduct(productId);
        console.log('Order processing completed successfully.');
    }
}

// Client code
const eCommerceFacade = new ECommerceFacade();
eCommerceFacade.placeOrder(101, 2, 49.99);
// Output:
// Order placed for product 101 with quantity 2.
// Payment of $49.99 made successfully.
// Product 101 shipped.
// Order processing completed successfully.
