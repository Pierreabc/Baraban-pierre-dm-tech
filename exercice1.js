function reverseCaractere(caractere) {

    var sortieC = "";

    for (var i = caractere.length - 1; i >= 0; i--) {

        sortieC += caractere[i];

    }
    
    return sortieC;
}
console.log(reverseCaractere('miam'));
