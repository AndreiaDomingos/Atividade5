// Uma função que devolve os valores que são maiores que a média

function maiorQueMedia (lista){

    let soma = 0
    for(let i=0; i<lista.length;i++){

     soma += lista[i];

    }

    let media = soma / lista.length;

    const maiorQueMedia = lista.filter(num => num > media);

    return maiorQueMedia
    }

// Uma função que devolva o menor valor da lista

function menor (lista){

    const menor = Math.min(...lista);

    return menor        
}

// Uma função que devolva o valor da soma dos itens da lista

function soma (lista){

    const soma = lista.reduce((acumulador, corrente) => acumulador + corrente, 0);

    return soma        
}

// Uma função que devolva todos os valores que são menores que 20

function menorQueVinte (lista){

    const menorQueVinte = lista.filter(num => num < 20);

    return menorQueVinte
        
}
// Uma função que vai devolver o primeiro e o último valor da lista

function primeiroEUltimo (lista){

    return [lista[0], lista[lista.length - 1]];        
}
