/*const informacoesClientes = [
  {
    cpf: 18875539081,
    nome: 'Elena'
  }, 
  {
    cpf: 18875539081,
    nome: 'Monica'
  }
]

const conteudoLinha = `
<tr>
<td>${informacoesClientes[0].cpf}</td>
<td>${informacoesClientes[0].nome}</td>
</tr>
`

const corpoTabela = document.querySelector("[data-conteudo-tabela]")

corpoTabela.innerHTML = conteudoLinha*/

const removeCliente = id => {
  if(confirm("Deseja Deletar o cliente?")) {
    deletaCliente(id)
  }
}

const corpoTabela = document.querySelector("[data-conteudo-tabela]")

listarClientes().then( exibe => {
  exibe.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id))
  });
});

const exibeCliente = (cpf, nome, id) => {
  const linha = document.createElement('tr')

  const conteudoLinha = `
    <td>${cpf}</td>
    <td>${nome}</td>
    <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button>
  <a href="edita-clientes.html?id=${id}"><button type="button" class ="btn btn-info">Editar</button></a>
  `

  linha.innerHTML = conteudoLinha;

  return linha;
};
