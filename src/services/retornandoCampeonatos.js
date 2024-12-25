const pool = require('./conection');

const executeQuery = async (query) => {
  const connection = await pool.getConnection();

  const result_query = await connection.query(query);

  const resposta = result_query[0];

  connection.release();

  return resposta;
}

const retornandoCampenatos =  async () => { 

  const query = 'select * from campeonatos';

  const campeonatos = executeQuery(query);  

  return campeonatos;
}

const retornandoCampenatosID =  async (id) => {

  const query = `select * from campeonatos where id = ${id}`;

  const campeonatos = executeQuery(query);  

  return campeonatos;
}

const retornandoCampenatosAno =  async (ano) => {

  const query = `select * from campeonatos where ano = ${ano}`;

  const campeonatos = executeQuery(query);  

  return campeonatos;
}

const retornandoCampenatosTime =  async (time) => {

  const query = `select * from campeonatos where campeao = ${time}`;

  const campeonatos = executeQuery(query);  

  return campeonatos;
}

module.exports = {
  retornandoCampenatos,
  retornandoCampenatosID,
  retornandoCampenatosAno,
  retornandoCampenatosTime
}
