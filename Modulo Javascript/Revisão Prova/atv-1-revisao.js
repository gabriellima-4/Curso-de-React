/*
Crie uma lista de inteiros com 5 elementos. Em seguida, crie uma novo lista que
contenha apenas os elementos da primeira lista que são múltiplos de 3. Imprima a
nova lista.
*/

lista = [1,3,12,16,24]
listademultiplos = []

for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 3 == 0){
        listademultiplos.push(lista[i]);
    }
}
console.log(listademultiplos);
