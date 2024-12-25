const { retornandoCampenatos, retornandoCampenatosID, retornandoCampenatosAno, retornandoCampenatosTime } = require('./services/retornandoCampeonatos.js');
const express = require('express');

const app = express();

app.get('/campeonatos', async (req, res) => {
  let campeonatos;

  const ano =  req.query.ano;
  const time = req.query.campeao;
  
  if(typeof ano === 'undefined' && typeof time === 'undefined') {
    campeonatos = await retornandoCampenatos();
  } else if(typeof ano !== 'undefined') {
    campeonatos = await retornandoCampenatosAno(parseInt(ano));
  } else if(typeof time !== 'undefined') {
    campeonatos = await retornandoCampenatosTime(time);
  }

  if(campeonatos.length > 0) {
    res.status(200).json(campeonatos);
  } else {
    res.status(404).json({messagem: 'Nenhum campeonato foi encontatdo!'});
  }
});

app.get('/campeonatos/:id', async (req, res) => {
  const id = req.params.id;
  const campeonato =  await retornandoCampenatosID(id) ;

  if(campeonato.length > 0) {
    res.status(200).json(campeonato);
  } else {
    res.status(404).json({messagem: 'Nenhum campeonato foi encontatdo!'});
  }

});

app.listen(3000, async () => {
  let data = new Date();
  console.log(`Servidor rodando na PORT 3000 e em execução desde: ${data.toLocaleString()}`);
});
