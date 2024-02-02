const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoProximo = document.getElementById('proximo')
const botaoAnterior = document.getElementById('anterior')
const titulo = document.getElementById('capitulo')
const numeroCapitulos = 10;

let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa()
{
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
    audioCapitulo.play();
}

function pausarFaixa() 
{
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    audioCapitulo.pause();
}

function tocarOuPausar()
{
    if(taTocando === 0)
    {
        taTocando = 1;
        tocarFaixa();
    } else
    {
        taTocando = 0; 
        pausarFaixa();
    }
}

function proximaFaixa () 
{
    if(capituloAtual === 10)
    {
        capituloAtual = 1
    } else
    {
        capituloAtual = capituloAtual + 1
    }
    audioCapitulo.src = 'books/dom-casmurro/' + capituloAtual + '.mp3'
    tocarFaixa();
    mudarNome()
}

function faixaAnterior () 
{
    if(capituloAtual === 1)
    {
        capituloAtual = 10
    } else
    {
        capituloAtual = capituloAtual - 1
    }
    audioCapitulo.src = 'books/dom-casmurro/' + capituloAtual + '.mp3'
    tocarFaixa();
    mudarNome()
}

function mudarNome () {
    titulo.innerHTML = 'Cap ' + capituloAtual
}

botaoProximo.addEventListener('click', proximaFaixa)
botaoAnterior.addEventListener('click', faixaAnterior)
botaoPlayPause.addEventListener('click', tocarOuPausar)