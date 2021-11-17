# the-registry-backend

This project serves as a simple backend designed to work "The Registry" application . This server sends and receives user data entries.

### List of Dependencies

Cors
Dotenv
Express
Mongoose
Morgan
Database

### Database Connection 
This project is configured to connect to a MongoDB database using Mongoose.

#### Route Order:
URL	HTTP Verb	Action	Notes
/registry/	GET	index	This route shows a list or index of all registry.
/registry/	POST	new	a CREATE route.
/registry/:id	PUT	update	an UPDATE route
/registry/:id	DELETE	destroy	This routes deletes entries from Database.

#### Deployment
Requires the Heroku CLI client.

#### Usage
