import { useState } from 'react'
import imagemRestaurante from './assets/hashtaurante.webp'
import { Navegacao } from './navegacao'
import { ItemCardapio } from './ItemCardapio'
import { pratosPrincipais, sobremesas, bebidas } from './cardapio'

export function App(){
  const paginasMenu = [pratosPrincipais,sobremesas,bebidas]
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0)
  return <>
    <img src={imagemRestaurante} className='capa' alt="imagem do restaurante"/>
    <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
    <div className='menu'>
      {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} preco={item.preco} descricao={item.descricao} imagem={item.imagem} />)}
    </div>
  </>
}