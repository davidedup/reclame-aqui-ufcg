var express = require("express");
var router = express.Router();

var reclamacoes = require('./reclamacoes');

/* POST - Autentica usuario admin */
router.post("/login", function (req, res, next) {
  if (req.body.login == "admin" && req.body.senha == "admin") {
    res.json(true);
    res.status("20");
  } else {
    res.json(false);
    res.status("200");
  }
});

router.delete("/reclamacao/:id", function(req, res, next){
    let aux = reclamacoes.deletaReclamacao(req.params.id)
    if(aux !=  false){
        res.json(aux)
        res.status("200")
    } else {
        res.json(false)
        res.status("404")
    }
});

module.exports = router;
