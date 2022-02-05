function calcularMediaAritmetica(lista)
{
    const sumaLista = lista.reduce
    (
        function(valorAcumulado = 0, nuevoElemento)
        {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function calcularMediana(lista)
{
 
  const listaSort = lista.sort((a,b) => a - b)
  const mitadLista = parseInt(listaSort.length / 2);
  

  function esPar(numerito)
{
    if(numerito % 2 === 0)
    {
      return true;
    }else
    {
      return false;
    }
}

let mediana
if(esPar(listaSort.length))
{
  const elemento1 = lista[mitadLista - 1];
  const elemento2 = lista[mitadLista];;

  const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
  mediana = promedioElemento1y2;
}else
{
    mediana = listaSort[mitadLista]
}
  
  return mediana;
}

// const lista1 = 
// [
//    100,
//    200,
//    500,
//    400000000,
// ]


