var express = require("express");
var router = express.Router();

let reclamacoes = [
  {
    id: 0,
    nomeUsuario: "David",
    titulo: "Ar condicionado ruim",
    texto:
      "O ar condicionado do CAA401 ta quebrado e a aula de calculo 2 tem gente de mais o calor é insuportavel",
    tags: ["estrutura", "caa"],
    likes: 10,
    dislikes: 9,
    tipoAutor: "funcionario",
    denunciada: false,
    numeroDeDenuncia: 0,
  },
  {
    id: 1,
    nomeUsuario: "José",
    titulo: "Pova ruim",
    texto: "A prova de veotorial de francisco tava muito ruim",
    tags: ["disciplina", "ensino"],
    likes: 15,
    dislikes: 20,
    tipoAutor: "aluno",
    denunciada: true,
    numeroDeDenuncia: 2,
  },
];

/* GET - Recupera todas as reclamações */
router.get("/", function (req, res, next) {
  console.log(req.query);
  if (req.query == undefined) {
    console.log("não teve querry");
    res.json(reclamacoes);
    res.status("200");
  } else {
    var campo = req.query.campo;
    var tipo = req.query.tipo;
    var reclamacoesAux = reclamacoes;

    if (campo == "like") {
      reclamacoesAux.sort(ordenarPorLike);
    } else if (campo == "denuncia") {
      reclamacoesAux.sort(ordenarPorDenuncia);
    } else if (campo == "dislike") {
      reclamacoesAux.sort(ordenarPorDislike);
    } else if (campo == "tipoAutor") {
      console.log("Entrou aquiiiii");
      if (tipo == "funcionario") {
        console.log("foi funcionario");
        reclamacoesAux = reclamacoesAux.filter(ehFuncionario);
      } else if (tipo == "aluno") {
        reclamacoesAux = reclamacoesAux.filter(ehAluno);
      } else {
        reclamacoesAux = reclamacoesAux.filter(ehProfessor);
      }
    }
    res.json(reclamacoesAux);
    res.status("200");
  }
});

router.delete("/:id", function(req, res, next){
  let id =  req.params.id
  if(req.user == "admin" && req.senha == "admin"){
      res.json(req[id])
      res.status("200")
  } else {
      res.json("senha ou usuarios admin estão errados")
      res.status("405")
  }
});

/* POST - Cadastrando uma reclamação nova */
router.post("/", function (req, res, next) {
  req.body.id = reclamacoes.length;
  reclamacoes.push(req.body);
  res.json(req.body);
  res.status("201");
});

/* PUT - Atualiza uma informação a partir de seu ID*/
router.put("/:id", function (req, res, next) {
  reclamacoes[req.params.id] = req.body;
  res.json(reclamacoes[req.params.id]);
  res.status("200");
});

exports.deletaReclamacao = function deletaReclamacao(id) {
  if (reclamacoes[id] != undefined) {
    let aux = reclamacoes[id];
    reclamacoes.splice(id, 1);
    return aux;
  } else {
    return false;
  }
}

// Filtro para query
function ordenarPorLike(a, b) {
  return b.likes - a.likes;
}
function ordenarPorDislike(a, b) {
  return b.likes - a.likes;
}
function ordenarPorDenuncia(a, b) {
  return b.numeroDeDenuncia - a.numeroDeDenuncia;
}
function ehFuncionario(a) {
  if (a.tipoAutor == "funcionario") {
    return true;
  }
  return false;
}
function ehAluno(a) {
  if (a.tipoAutor == "aluno") {
    return true;
  }
  return false;
}
function ehProfessor(a) {
  if (a.tipoAutor == "professor") {
    return true;
  }
  return false;
}

module.exports = router;
