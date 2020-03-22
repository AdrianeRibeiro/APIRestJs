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


const corpoTabela = document.querySelector("[data-conteudo-tabela]")

listarClientes().then( exibe => {
  exibe.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
  });
});

const exibeCliente = (cpf, nome) => {
  const linha = document.createElement('tr')

  const conteudoLinha = `
    <td>${cpf}</td>
    <td>${nome}</td>
  `

  linha.innerHTML = conteudoLinha;

  return linha;
};