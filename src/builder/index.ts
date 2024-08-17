// The Product class that represents the SQL query
class SQLQuery {
    private query!: string;

    public setQuery(query: string): void {
        this.query = query;
    }

    public getQuery(): string {
        return this.query;
    }
}

// The Builder interface declares the steps to build the product
interface SQLQueryBuilder {
    select(fields: string[]): SQLQueryBuilder;
    from(table: string): SQLQueryBuilder;
    where(condition: string): SQLQueryBuilder;
    orderBy(field: string, order: 'ASC' | 'DESC'): SQLQueryBuilder;
    limit(count: number): SQLQueryBuilder;
    getQuery(): SQLQuery;
}

// Concrete Builder implementing the steps for building an SQL query
class ConcreteSQLQueryBuilder implements SQLQueryBuilder {
    private query: string = '';

    public select(fields: string[]): SQLQueryBuilder {
        this.query += `SELECT ${fields.join(', ')} `;
        return this;
    }

    public from(table: string): SQLQueryBuilder {
        this.query += `FROM ${table} `;
        return this;
    }

    public where(condition: string): SQLQueryBuilder {
        this.query += `WHERE ${condition} `;
        return this;
    }

    public orderBy(field: string, order: 'ASC' | 'DESC'): SQLQueryBuilder {
        this.query += `ORDER BY ${field} ${order} `;
        return this;
    }

    public limit(count: number): SQLQueryBuilder {
        this.query += `LIMIT ${count} `;
        return this;
    }

    public getQuery(): SQLQuery {
        const sqlQuery = new SQLQuery();
        sqlQuery.setQuery(this.query.trim());
        return sqlQuery;
    }
}

// Client code
const queryBuilder = new ConcreteSQLQueryBuilder();
const query = queryBuilder
    .select(['id', 'name', 'email'])
    .from('users')
    .where('age > 18')
    .orderBy('name', 'ASC')
    .limit(10)
    .getQuery();

console.log(query.getQuery()); // Output: SELECT id, name, email FROM users WHERE age > 18 ORDER BY name ASC LIMIT 10
