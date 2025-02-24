//como trabajar con listas (arrays, arreglos, vectores....)
let var1 = 45
let array = [1, "hola", false, {id:5}, null, undefined, var1]

console.log(array);

//acceder a los valores de un array
//array[indice] => 0,1,2,3,4,5, ....
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);

//metodos para introducir nuevos valores en nuestros arrays
//.push() .unshift() => mutan el valor de nuestro array
// valores al final -> push
array.push("final", 45, 100, false)
console.log(array);

// Valores al principio -> Unshift
array.unshift("inicio", 87, 99)
console.log(array)

// Métodos para eliminar valores en nuestros arrays
// .pop() .shift() => Mutan el valor del array


const array2 = [1, 3, "hola", false]
// Valores al final -> Pop
array2.pop()
console.log(array2)

// Valores al principio -> Shift
array2.shift()
console.log(array2)

// Método para eliminar, modificar o añadir valores en nuestro array
// .splice(x, y, z)
const array3 = [1, 2, 3, 4, 5, 6]

// Eliminar valores .splice(indice, numValoresAEliminar)
array3.splice(2, 1);
console.log(array3)

// Añadir valores .splice(indice, 0, valores)
array3.splice(2, 0, "hola")
console.log(array3)

// Modificar valores .splice(indice, 1, valores)
array3.splice(2, 1, array2)
console.log(array3)

array3.splice(2, 1, array2[0])
console.log(array3);