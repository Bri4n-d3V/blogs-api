require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const UserRouter = require('./routers/userRouter');
const LoginRouter = require('./routers/loginRouter');
const CategoryRouter = require('./routers/categoryRouter');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', UserRouter);
app.use('/login', LoginRouter);
app.use('/categories', CategoryRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
