function vogalConsoante() {
    let letra = []; 

    letra = parseFloat(prompt ("Digite uma letra:"));

    if (( letra === "a") || (letra === "e") || (letra ==="i") || (letra ==="o") || (letra ==="u")) {
        alert ("A letra é vogal"); 
    } else {
        alert ("A letra é consoante"); 
    }
    
}