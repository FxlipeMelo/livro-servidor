const banco = require("./conexao");
const LivroSchema = new banco.Schema({
    titulo: {type: String, require: true},
    codEditora: {type: Number, require: true},
    resumo: {type: String, require: true},
    autores: {type: [String], require: true}
});

const Livro = banco.model("Livro", LivroSchema);

module.exports = Livro;