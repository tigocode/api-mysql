const pool = require('./conection');


const retornandoCampenatos =  async () => {
  const connection = await pool.getConnection();

  const campeonates_tb = await connection.query('select * from campeonatos');

  const campeonatos = campeonates_tb[0];

  connection.release();

  return campeonatos;
}

const retornandoCampenatosID =  async (id) => {
  const connection = await pool.getConnection();

  const campeonates_tb = await connection.query(`select * from campeonatos where id = ${id}`);

  const campeonatos = campeonates_tb[0];

  connection.release();

  return campeonatos;
}

const retornandoCampenatosAno =  async (ano) => {
  const connection = await pool.getConnection();

  const campeonates_tb = await connection.query(`select * from campeonatos where ano = ${ano}`);

  const campeonatos = campeonates_tb[0];

  connection.release();

  return campeonatos;
}

const retornandoCampenatosTime =  async (time) => {
  const connection = await pool.getConnection();

  const campeonates_tb = await connection.query(`select * from campeonatos where campeao = ${time}`);

  const campeonatos = campeonates_tb[0];

  connection.release();

  return campeonatos;
}

module.exports = {
  retornandoCampenatos,
  retornandoCampenatosID,
  retornandoCampenatosAno,
  retornandoCampenatosTime
}
