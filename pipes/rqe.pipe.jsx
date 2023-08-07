function formatarRQE(input) {
  const numeros = input.replace(/\D/g, '')
  const primeira = numeros.slice(1, input.length)
  const segunda = numeros.slice(input.length, 1)
  return `${primeira}-${segunda}`
}

export default formatarRQE
