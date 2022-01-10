
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const routeTasks = require('./routes/tasks')
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

//middleware
app.use(express.static('./public'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

//routes
app.use('/api/v1/tasks', routeTasks);

app.use(notFound);
app.use(errorHandler);

const server = app.listen(PORT , () => {
    console.log(`Server is listening on port ${PORT}`);
})
module.exports = server;


