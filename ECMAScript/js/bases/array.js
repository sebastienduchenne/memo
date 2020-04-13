//tableau
/*-les tableaux sont des objets qui utilisent des nombres pour accéder aux éléments alors que les autres objets utilisent des noms pour accéder aux membres
-les éléments d'un tableau peuvent être différents et peuvent être des objets (objets, fonction)
-si on utilise des index nommés pour un tableau, celui-ci sera transformé en un objet standart. Cela supprimera les méthodes et propriétés

*/
let arr = new Array();//syntaxe 1, peu utilisé
let arr = [];//syntaxe 2
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits.length ); // 3
alert( fruits ); // Apple,Orange,Plum

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// get the object at index 1 and then show its name
alert( arr[1].name ); // John
// get the function at index 3 and run it
arr[3](); // hello


fruits.pop() // get last
fruits.push("Lemon") // push to the end
fruits.shift() // get first
fruits.unshift() // push to the beginning

//shift   <-         -> pop
//           0 1 2 3
//unshift ->         <- push

fruits.length() // le plus grand index + 1
fruits.length = 2 // efface les éléments après index=2
fruits.length = 0 // efface tout le tableau

//tableau 2D
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[1][1] ); // 5, the central element
