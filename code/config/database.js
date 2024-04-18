const h2 = require('h2');
const {Sequelize} = require('sequelize');

// Configuração da conexão com o banco de dados 
const sequelize = new Sequelize('banco', 'admin', 'admin', {
  dialect: 'sqlite', // substitua 'nome_do_banco_de_dados' pelo dialeto do seu banco de dados (por exemplo, 'mysql', 'postgres', 'sqlite')
  host: '192.168.1.2', // substitua pelo host do seu banco de dados
  port: 8082
});

// Testar a conexão com o banco de dados
async function conectar() {
  try {
    await sequelize.authenticate();
    console.log("Banco Conetado");
  } catch (error) {
    console.error("Banco de dados não conectado!", error);
    process.exit(1); 
  }
}

  

module.exports = {
   sequelize, conectar
};