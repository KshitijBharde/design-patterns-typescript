/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Product class. The Creator's subclasses usually provide the
 * implementation of this method.
 */
abstract class DatabaseCreator {
    /**
     * Note that the Creator may also provide some default implementation of the
     * factory method.
     */
    public abstract factoryMethod(): DatabaseConnection;

    /**
     * Also note that, despite its name, the Creator's primary responsibility is
     * not creating products. Usually, it contains some core business logic that
     * relies on DatabaseConnection objects, returned by the factory method. Subclasses can
     * indirectly change that business logic by overriding the factory method
     * and returning a different type of product from it.
     */
    public someOperation(): string {
        // Call the factory method to create a DatabaseConnection object.
        const connection = this.factoryMethod();
        // Now, use the connection.
        return `DatabaseCreator: The same creator's code has just worked with ${connection.connect()}`;
    }
}

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
class PostgresCreator extends DatabaseCreator {
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    public factoryMethod(): DatabaseConnection {
        return new PostgresConnection();
    }
}

class MySQLCreator extends DatabaseCreator {
    public factoryMethod(): DatabaseConnection {
        return new MySQLConnection();
    }
}

/**
 * The Product interface declares the operations that all concrete products must
 * implement.
 */
interface DatabaseConnection {
    connect(): string;
}

/**
 * Concrete Products provide various implementations of the DatabaseConnection interface.
 */
class PostgresConnection implements DatabaseConnection {
    public connect(): string {
        return 'Connecting to PostgreSQL database...';
    }
}

class MySQLConnection implements DatabaseConnection {
    public connect(): string {
        return 'Connecting to MySQL database...';
    }
}

/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */
function clientCode(creator: DatabaseCreator) {
    // ...
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
    // ...
}

/**
 * The Application picks a creator's type depending on the configuration or
 * environment.
 */
console.log('App: Launched with the PostgresCreator.');
clientCode(new PostgresCreator());
console.log('');

console.log('App: Launched with the MySQLCreator.');
clientCode(new MySQLCreator());
