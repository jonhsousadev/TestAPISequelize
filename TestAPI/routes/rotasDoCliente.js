const Cliente = require("../models").Cliente;
const Cidade = require("../models").Cidade;

module.exports = function(router) {
  router.get("/cliente", (req, res) => {
    Cliente.findAll({
      include: [Cidade]
    })
      .then(cliente => {
        res.json(cliente);
      })
      .catch(err => res.json(err));
  });

  router.get("/cliente/:id", (req, res) => {
    Cliente.findAll({
      where: { id: req.params.id }
    })
      .then(cliente => {
        res.json(cliente[0]);
      })
      .catch(err => res.json(err));
  });

  router.get("/cliente/getByNomeCompleto/:nomeCompleto", (req, res) => {
    Cliente.findAll({
      where: { nomeCompleto: req.params.nomeCompleto }
    })
      .then(cliente => {
        res.json(cliente);
      })
      .catch(err => res.json(err));
  });

  router.post("/cliente", (req, res) => {
    Cliente.create({
      nomeCompleto: req.body.nomeCompleto,
      sexo: req.body.sexo,
      dataDeNascimento: req.body.dataDeNascimento,
      idade: req.body.idade,
      cidadeID: req.body.cidadeID,
    })
      .then(res => {
        res.json(res);
      })
      .catch(err => res.json(err));
  });

  router.put("/cliente/:id", (req, res) => {
    Cliente.update({
      nomeCompleto: req.body.nomeCompleto,
      sexo: req.body.sexo,
      dataDeNascimento: req.body.dataDeNascimento,
      idade: req.body.idade,
      cidadeID: req.body.cidadeID,
    }, { where: { id: req.params.id } })
      .then(updatedCliente => {
        res.json(updatedCliente);
      })
      .catch(err => res.json(err));
  });

  router.delete("/cliente/:id", (req, res) => {
    Cliente.destroy({
      where: { id: req.params.id }
    })
      .then(cliente => {
        res.json(cliente);
      })
      .catch(err => res.json(err));
  });
};