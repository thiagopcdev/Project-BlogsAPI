require('dotenv').config();
const express = require('express');

const userController = require('./controllers/userController');
const loginController = require('./controllers/loginController');
const categoryController = require('./controllers/categoryController');
const blogPostController = require('./controllers/blogPostController');

const app = express();

app.use(express.json());

app.use('/user', userController);
app.use('/login', loginController);
app.use('/categories', categoryController);
app.use('/post', blogPostController);

app.use(require('./middlewares/error'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
