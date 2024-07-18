const CLASS_PRODUTOS_NO_CARRINHO = 'carrinho__produtos__produto';
const ID_VALOR_TOTAL_NO_CARRINHO = 'valor-total';
const ID_QUANTIDADE_DE_PRODUTO = 'quantidade';
const ID_PRODUTO_SELECIONADO = 'produto';

const elementoProdutosNoCarrinho = document.querySelector(`.${CLASS_PRODUTOS_NO_CARRINHO}`);
const elementoValorTotalNoCarrinho = document.getElementById(ID_VALOR_TOTAL_NO_CARRINHO);

let valorTotalCarrinho = 0;

function limpar() {
    elementoProdutosNoCarrinho.innerHTML = '';
    atualizarValorTotalCarrinho(0);
}

function adicionar() {
    const quantidadeProduto = parseInt(document.getElementById(ID_QUANTIDADE_DE_PRODUTO).value);

    if(verificaNumero(quantidadeProduto)){
        
    const produtoSelecionado = document.getElementById(ID_PRODUTO_SELECIONADO).value;   
    const [nomeProduto, valorProdutoString] = produtoSelecionado.split(' - ');
    const valorProdutoInteiro = parseInt(valorProdutoString.substring(2));
    
    const novoProdutoHTML = `<br><span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">${valorProdutoString}</span>`;
    
    elementoProdutosNoCarrinho.insertAdjacentHTML('beforeend', novoProdutoHTML);
    
    const valorTotalProduto = calculaValorCarrinho(quantidadeProduto, valorProdutoInteiro);
    valorTotalCarrinho += valorTotalProduto;
    
    atualizarValorTotalCarrinho(valorTotalCarrinho);
    
    } else {
        alert('Valor do campo Qtde inválido');
    }
}

function calculaValorCarrinho(quantidade, valor) {
    return valor * quantidade;
}

function atualizarValorTotalCarrinho(valor) {
    elementoValorTotalNoCarrinho.innerText = `R$ ${valor}`;
}

function verificaNumero(numero){
  return isNaN(numero) || numero<=0 ?  false : true ;
}
