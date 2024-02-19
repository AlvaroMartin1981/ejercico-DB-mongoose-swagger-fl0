const express = require('express');
const app = express();
const PORT = 3007;
const dbConnection = require('./config/config');
const routes = require('./routes/tasks');
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs/index');


app.use(express.json());

app.use('/', routes);
app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

dbConnection();

app.listen(PORT, () => console.log(`Server started on port http//:localhost:${PORT}`));