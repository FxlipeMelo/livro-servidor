const express = require('express');
const router = express.Router();
const {obterLivros, incluir, excluir} = require("../modelo/livro-dao");

router.get('/', async (req, res) => {
    try {
        const livros = await obterLivros();
        res.json(livros);
    } catch (erro) {
        res.status(500).json({erro: 'Erro ao obter livros'});
    }
});

router.post('/', async (req, res) => {
    try {
        const livro = req.body;
        await incluir(livro);
        res.json('Sucesso ao incluir o livro');
    } catch (erro) {
        res.status(500).json({erro: 'Erro ao incluir livros'});
    }
});

router.delete('/:codigo', async(req, res) => {
    try {
        const codigo = req.params.codigo;
        await excluir(codigo);
        res.json({mensagem: "Livro excluído com sucesso"});
    } catch (erro) {
        res.status(500).json({erro: "Erro ao excluir livro"});
    }
});

module.exports = router;