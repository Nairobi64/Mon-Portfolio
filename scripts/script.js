// code de la app,js
// code de la app,js
// code de la app,js

const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const usersRoutes = require ('./routes/users');
const userRouter = require ('./routes/rUsers');


// declaration de la connexion a la base de donnee.
mongoose.connect('mongodb+srv://reg-creator:Reg-BD24@cluster0.5wp9m7l.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  const app = express();

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
   // Définir le répertoire statique pour les fichiers frontend
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));;

app.use('/api/users', usersRoutes);
app.use('api/auth', userRouter);

module.exports = app;