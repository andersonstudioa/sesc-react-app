import Item from './Item'

function Lista() {

  return (
    <div>
      <h1>Minha lista componentizada</h1>
      <ul>
        <Item texto="Meu primeiro item" cor="#FF0000"/>
        <Item texto="Meu segundo item" cor="#00FF00"/>
        <Item texto="Meu terceiro item" cor="#0000FF"/>
      </ul>
    </div>
  )
}

export default Lista