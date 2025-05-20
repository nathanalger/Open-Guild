import User from "../model/types/user";
import BaseDao from "./BaseDao";
import knex from "knex";

const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "local",
    password: "admin",
    database: "openguild",
  },
});

const TABLE_NAME = "users";

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
