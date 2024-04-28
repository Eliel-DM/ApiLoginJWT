const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  dialect: 'postgres', 
  host: 'localhost', 
  port: 5432
});

async function conectar() {
  try {
    
    await sequelize.authenticate();
    console.log("Banco Conetado");
    await sequelize.sync();
    console.log("Banco Sincronizado");
  } catch (error) {
    console.error("Banco de dados não conectado!", error);
    process.exit(1); 
  }
}

  
module.exports = {
   sequelize, conectar
};