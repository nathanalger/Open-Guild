/*
This is the table it pulls from:

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(64) NOT NULL,
    tag VARCHAR(4) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    is_verified BOOLEAN DEFAULT FALSE,
    avatar_url TEXT,
    last_login_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (username, tag)
);
*/

export default interface User {
  id: string;
  email: string;
  username: string;
  tag: string;
  verified: string;
  avatar_url: string;
  last_login_at: string;
  created_at: string;
  updated_at: string;
}
