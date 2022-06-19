
const name     = 'Efren'
const lastname = 'Anastacio'

const fullname = `${ name } ${ lastname }`

function getSaludo( name ) {
  return 'Hola ' + name
}

console.log(`Este es un texto: ${getSaludo(name)}`)