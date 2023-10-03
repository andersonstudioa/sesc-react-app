// eslint-disable-next-line react/prop-types
function Item ({texto, cor}) {
  return (
    <li style={{color: cor}}>{texto}</li>
  )
}

export default Item