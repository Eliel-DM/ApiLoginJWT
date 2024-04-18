//imports
const express = require('express');
const { conectar } = require('./config/database');
const {auth} = require('./routes/authRoutes');
const server = express();

(async () => {
    try {
        await conectar();

    }catch(error){
        console.error('Data models synchronized ----> BAD', error);
        process.exit(1);
    }

    server.use(express.json());
    server.use('/api/auth', auth);

    server.listen(3001, () => {
        console.log('Servidor rodando em http://localhost:3000');
    });
  })();