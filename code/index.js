//imports
const express = require('express');
const { conectar } = require('./config/database');
const auth = require('./routes/authRoutes');
const server = express();

(async () => {
    try {
        await conectar();

    }catch(error){
        console.error('Erro generalizado.');
        process.exit(1);
    }

    server.use(express.json());
    server.use('/api', auth);

   
   
    server.listen(3000, () => {
    console.log('Servidor Rodando na porta:3000 ');
  });

  })();