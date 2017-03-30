const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

nunjucks.configure('./src', {
  autoescape: true,
  express: app
});

app.get('/', (req, res)=> res.render('templates/index.njk'));

app.listen(process.env.PORT || 3000);
