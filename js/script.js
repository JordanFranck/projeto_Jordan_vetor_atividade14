let vetorNumeros = [];

// Função para adicionar número à tabela
function adicionarNumero() {
  const numero = parseFloat(document.getElementById('numero').value.trim());
  
  if (!isNaN(numero)) {
    vetorNumeros.push(numero);

    const tabela = document.getElementById('tabelaNumeros').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();
    const celula = novaLinha.insertCell(0);
    celula.textContent = numero;

    document.getElementById('numero').value = '';
  } else {
    alert("Por favor, digite um número válido.");
  }
}

// Função para dividir valores por 10 e mostrar os resultados
function dividirValores() {
  if (vetorNumeros.length === 0) {
    alert("Nenhum número foi adicionado.");
    return;
  }

  let resultados = vetorNumeros.map(num => num / 10);

  const tabela = document.getElementById('tabelaValoresDivididos').getElementsByTagName('tbody')[0];
  tabela.innerHTML = ''; // Limpa a tabela antes de adicionar novos valores

  for (let resultado of resultados) {
    const novaLinha = tabela.insertRow();
    const celula = novaLinha.insertCell(0);
    celula.textContent = resultado;
  }
}
