/**
 * The Abstract Factory interface declares creation methods for each type of product.
 */
interface DatabaseFactory {
    createConnection(): DatabaseConnection;
    createQueryExecutor(): QueryExecutor;
}

/**
 * The Product interface for database connections.
 */
interface DatabaseConnection {
    connect(): string;
}

/**
 * The Product interface for query executors.
 */
interface QueryExecutor {
    executeQuery(query: string): string;
}

/**
 * Concrete Products for PostgreSQL.
 */
class PostgresConnection implements DatabaseConnection {
    public connect(): string {
        return 'Connecting to PostgreSQL database...';
    }
}

class PostgresQueryExecutor implements QueryExecutor {
    public executeQuery(query: string): string {
        return `Executing query on PostgreSQL: ${query}`;
    }
}

/**
 * Concrete Products for MySQL.
 */
class MySQLConnection implements DatabaseConnection {
    public connect(): string {
        return 'Connecting to MySQL database...';
    }
}

class MySQLQueryExecutor implements QueryExecutor {
    public executeQuery(query: string): string {
        return `Executing query on MySQL: ${query}`;
    }
}

/**
 * Concrete Factories implement the Abstract Factory interface to create products
 * of a specific family.
 */
class PostgresFactory implements DatabaseFactory {
    public createConnection(): DatabaseConnection {
        return new PostgresConnection();
    }

    public createQueryExecutor(): QueryExecutor {
        return new PostgresQueryExecutor();
    }
}

class MySQLFactory implements DatabaseFactory {
    public createConnection(): DatabaseConnection {
        return new MySQLConnection();
    }

    public createQueryExecutor(): QueryExecutor {
        return new MySQLQueryExecutor();
    }
}

/**
 * The Client code works with factories and products through abstract interfaces.
 */
class DatabaseClient {
    private connection: DatabaseConnection;
    private queryExecutor: QueryExecutor;

    constructor(factory: DatabaseFactory) {
        this.connection = factory.createConnection();
        this.queryExecutor = factory.createQueryExecutor();
    }

    public performDatabaseOperation(query: string): void {
        console.log(this.connection.connect());
        console.log(this.queryExecutor.executeQuery(query));
    }
}

// Usage Example
const postgresFactory: DatabaseFactory = new PostgresFactory();
const client1 = new DatabaseClient(postgresFactory);
client1.performDatabaseOperation('SELECT * FROM users');

const mysqlFactory: DatabaseFactory = new MySQLFactory();
const client2 = new DatabaseClient(mysqlFactory);
client2.performDatabaseOperation('SELECT * FROM orders');
