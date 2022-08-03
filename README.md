# cc27-project-wings

Code Chrysalis Greenfield Project - Team: Zach, Josh, Jon

## Available Scripts

### `npm start`

Runs the app in the development mode

## Database Setup
These instructions assume Postgres v 14.4 or later is installed.

First create the wings database from the command line by typing:
`createdb wings`

Then connect to the newly created db:
`psql -d wings`

You should get some output that looks like this:
```
psql (14.4)
Type "help" for help.

wings=# 
```

At the psql prompt create a user called 'wings' by entering:
`CREATE USER wings;`

If you get this message, then your user has been set up successfully:
`CREATE ROLE`