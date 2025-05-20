# Open Guild (OG)

Open Guild is a guild-based chatroom application designed for gamers. Servers are easy, scalable, and easy to host and simple to setup. Members can chat among friends and play games.

# Server Hosting

Servers (guilds) are hosted individually and privacy is a priority. Backend software is designed to scale to the host machine so that servers can fit your needs.

## Deploying Local Server Container

This app will have a global server that contains user information, server information, etc. To run a local version of this db, here are the steps:

1. Make sure you have the docker daemon installed and running.
2. Pull and start the local DB container by running `pnpm run db` in the root directory.
3. To delete the docker container, run `pnpm run delete-db`.
4. To reset (delete and reinstall) the container, run `pnpm run reset-db`.

# Open Source

This project is designed to be open source so that the original vision of privacy and scalability is not lost. I welcome any contributions made, any progress is good progress.

# Contact

Email: nalger@mtu.edu
