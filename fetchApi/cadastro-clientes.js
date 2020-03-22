const formCadastroCliente = document.querySelector('[data-form]')

formCadastroCliente.addEventListener("submit", event => {
  event.preventDefault()

  //target é o alvo que eu quero pegar

  const nome = event.target.querySelector('[data-nome]').value
  const cpf = event.target.querySelector('[data-cpf]').value

  if(validaCPF(cpf)) {
    cadastrarClientes(nome, cpf)
  } else { 
    alert("O CPF não é válido")
  }
})

