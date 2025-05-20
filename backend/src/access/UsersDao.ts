import User from "../model/types/user";
import BaseDao from "./BaseDao";
import knex from "knex";
import { db } from "./BaseDao";

const TABLE_NAME = "users";

/**
 * This is the access class for the users table.
 * It extends the base access class.
 *
 * @author Nathaniel Alger
 */
export default class UsersDao extends BaseDao<User> {
  constructor() {
    super("users", db);
  }

  public async findByNameAndTag(
    username: string,
    tag: string
  ): Promise<User | undefined> {
    return this._findByNameAndTag(username, tag);
  }

  private async _findByNameAndTag(
    username: string,
    tag: string
  ): Promise<User | undefined> {
    const result = await this.db(TABLE_NAME).where({ username, tag }).first();
    return result || undefined;
  }
}
