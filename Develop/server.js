const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection'); // Import sequelize connection

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => { // Sync sequelize models to the database
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`)); // Start the server
});
