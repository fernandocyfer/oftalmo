function formatarCRM(input = '') {
    const numeros = input.replace(/\D/g, '');
    const primeiraParte = numeros.slice(0, 2);
    const segundaParte = numeros.slice(2, 6);
    const terceiraParte = numeros.slice(6, 7);
    return `${primeiraParte}.${segundaParte}-${terceiraParte}`;
}

export default formatarCRM;