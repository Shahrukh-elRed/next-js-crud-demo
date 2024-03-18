const { DB_USERNAME, DB_PASSWORD } = process.env;

export const connectionString = "mongodb+srv://" + DB_USERNAME + ":" + DB_PASSWORD + "@cluster0.syeku9x.mongodb.net/usersDB?retryWrites=true&w=majority&appName=Cluster0"
