import knex, { Knex } from "knex";

/**
 * This is the base access class for DB management.
 * Extend DAO classes from this.
 *
 * When extending, each method should have a public
 * and a private version. The public version should
 * perform validation and then call the private version
 * which returns the necessary values.
 *
 * @author Nathaniel Alger
 */
export default class BaseDao<T> {
  private tableName: string;
  protected db: Knex;

  constructor(tableName: string, db: Knex) {
    this.tableName = tableName;
    this.db = db;
  }

  // Find a single record by ID
  async findOne(id: number): Promise<T | null> {
    const result = await this.db(this.tableName).where({ id }).first();
    return result || null;
  }

  // Create a new record
  async create(data: Partial<T>): Promise<T> {
    const [result] = await this.db(this.tableName).insert(data).returning("*");
    return result;
  }

  // Remove a record by ID
  async remove(id: number): Promise<void> {
    await this.db(this.tableName).where({ id }).del();
  }

  // Find all records (optional limit)
  async findAll(limit?: number): Promise<T[]> {
    const query = this.db(this.tableName);
    if (limit) query.limit(limit);
    return await query;
  }

  // Update a record by ID
  async update(id: number, data: Partial<T>): Promise<T> {
    const [result] = await this.db(this.tableName)
      .where({ id })
      .update(data)
      .returning("*");
    return result;
  }
}
