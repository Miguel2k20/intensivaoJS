const imagemVisualizacao = document.getElementById('imagem-visualizacao')
const tituloProduto = document.getElementById('titulo-produto')
const subtituloProduto = document.getElementById('nome-cor-selecionada')

const miniaturaImagem0 = document.getElementById('0-imagem-miniatura')
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura')
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura')

const imagemPrincipal = document.getElementById('imagem-visualizacao')

const VerdeCipreste = {
    nome: 'Verde-Cipreste',
    pasta: 'imagens-verde-cipreste'
}
const AzulInverno = {
    nome: 'Azul-Inverno',
    pasta: 'imagens-azul-inverno'
}
const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
}
const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
}
const rosaClaro ={
    nome: 'Rosa-Claro',
    pasta: 'imagens-rosa-claro'
}
const opcoesCores =
[
    VerdeCipreste,
    AzulInverno,
    meiaNoite,
    estelar,
    rosaClaro
]

const opcaoDeTamanho  = [
    '41 mm',
    '45 mm'
]
let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada =  1

function trocarImagem()
{
    const opcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id
    imagemSelecionada = opcaoSelecionada.charAt(0);
    imagemVisualizacao.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-'+ imagemSelecionada + '.jpeg'
    imagemPrincipal.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-'+ imagemSelecionada +'.jpeg'
}

function trocarTamanho () {
    const idSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id
    tamanhoSelecionado = idSelecionada.charAt(0)
    tituloProduto.innerText = 'Pulseira loop esportiva ' + opcoesCores[corSelecionada].nome +' para caixa de ' + opcaoDeTamanho[tamanhoSelecionado]
    if(opcaoDeTamanho[tamanhoSelecionado] === '45 mm')
    {
        imagemVisualizacao.classList.remove('caixa-pequena')
    } else {
        imagemVisualizacao.classList.add('caixa-pequena')
    }
}

function trocarCor ()
{
    const idSelecionado = document.querySelector('[name="opcao-cor"]:checked').id
    corSelecionada = idSelecionado.charAt(0);
    tituloProduto.innerText = 'Pulseira loop esportiva ' + opcoesCores[corSelecionada].nome +' para caixa de ' + opcaoDeTamanho[tamanhoSelecionado]
    subtituloProduto.innerText = 'Cor ' + opcoesCores[corSelecionada].nome
    miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg'
    miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg'
    miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg'
    imagemPrincipal.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-'+ imagemSelecionada +'.jpeg'
}