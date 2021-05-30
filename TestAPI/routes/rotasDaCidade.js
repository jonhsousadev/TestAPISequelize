const Cidade = require("../models").Cidade;
const Cliente = require("../models").Cliente;

module.exports = function(router) {
  router.get("/cidade", (req, res) => {
    Cidade.findAll({
      include: [Cliente]
    })
      .then(cidade => {
        res.json(cidade);
      })
      .catch(err => res.json(err));
  });

  router.get("/cidade/:id", (req, res) => {
    Cidade.findAll({
      where: { id: req.params.id }
    })
      .then(cidade => {
        res.json(cidade[0]);
      })
      .catch(err => res.json(err));
  });

  router.get("/cidade/getByNome/:nome", (req, res) => {
    Cidade.findAll({
      where: { nome: req.params.nome }
    })
      .then(cidade => {
        res.json(cidade[0]);
      })
      .catch(err => res.json(err));
  });

  router.get("/cidade/getByEstado/:estado", (req, res) => {
    Cidade.findAll({
      where: { estado: req.params.estado }
    })
      .then(cidade => {
        res.json(cidade);
      })
      .catch(err => res.json(err));
  });

  router.post("/cidade", (req, res) => {
    Cidade.create({
      nome: req.body.nome,
      estado: req.body.estado
    })
      .then(res => {
        res.json(res);
      })
      .catch(err => res.json(err));
  });

  router.put("/cidade/:id", (req, res) => {
    Cidade.update({ nome: req.body.nome, estado: req.body.estado }, { where: { id: req.params.id } })
      .then(updatedCidade => {
        res.json(updatedCidade);
      })
      .catch(err => res.json(err));
  });

  router.delete("/cidade/:id", (req, res) => {
    Cidade.destroy({
      where: { id: req.params.id }
    })
      .then(cidade => {
        res.json(cidade);
      })
      .catch(err => res.json(err));
  });
};