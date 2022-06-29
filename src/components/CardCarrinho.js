import React from 'react'

export const CardCarrinho = (props) => {
  return (
    <div>
      <p>{props.servico.title}</p>
      <p>{props.servico.price}</p>
      <button>Remover do Carrinho</button>
    </div>
  )
}
