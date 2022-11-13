//1=début pour calcul
//valeur de fin = valeur qu'on peut changer pour stop la boucle

let debut = 1;
let fin = 5;
let somme = 0;

//Tant que la valeur du début est plus petite ou égale à la valeur de fin, alors la boucle continue

while (debut <= fin) {

//J'ajoute +1 à ma somme du début

  somme += debut;

// +1 tant que la boucle n'est pas finie  
  debut += 1;
}
console.log(somme);