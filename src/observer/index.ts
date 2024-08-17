// Observer Interface: Observer
interface Observer {
    update(user: User): void;
}

// Concrete Observer 1: EmailService
class EmailService implements Observer {
    public update(user: User): void {
        console.log(`EmailService: Sending welcome email to ${user.name}`);
    }
}

// Concrete Observer 2: AnalyticsService
class AnalyticsService implements Observer {
    public update(user: User): void {
        console.log(`AnalyticsService: Recording analytics data for ${user.name}`);
    }
}

// Concrete Observer 3: NotificationService
class NotificationService implements Observer {
    public update(user: User): void {
        console.log(`NotificationService: Sending notification to admins about new user ${user.name}`);
    }
}

// Subject Class: UserService
class UserService {
    private observers: Observer[] = [];

    public addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    public notifyObservers(user: User): void {
        for (const observer of this.observers) {
            observer.update(user);
        }
    }

    public registerUser(name: string): void {
        const user = new User(name);
        console.log(`UserService: User ${user.name} has been registered.`);
        this.notifyObservers(user);
    }
}

// User Class: A simple representation of a user
class User {
    constructor(public name: string) { }
}

// Client code
const userService = new UserService();

// Adding observers to the subject
const emailService = new EmailService();
const analyticsService = new AnalyticsService();
const notificationService = new NotificationService();

userService.addObserver(emailService);
userService.addObserver(analyticsService);
userService.addObserver(notificationService);

// Registering a new user
userService.registerUser('John Doe');
// Output:
// UserService: User John Doe has been registered.
// EmailService: Sending welcome email to John Doe
// AnalyticsService: Recording analytics data for John Doe
// NotificationService: Sending notification to admins about new user John Doe
