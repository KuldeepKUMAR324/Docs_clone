const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/Signup', (req, res) => {
  res.render('Signup');
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
