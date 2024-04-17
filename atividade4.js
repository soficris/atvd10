function numeroDecrescentes() {
    let numeros = [];
    let contador = 0;


    for (contador=0; contador < 4; contador ++) {
        numeros.push(parent(prompt("Informe o"+ parent(contador+1) + "e número:")));  
    }
    numeros.sort (
        function(a,b) {
            return b-a
        }
    )
    alert ("Números em ordem decrescente:" + numero[0] + "-" + numero[1] + "-" + numero[2] + "-" + numero[3])
}
