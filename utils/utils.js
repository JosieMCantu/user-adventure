export function findById(array, id) {
    for (let product of array) {
        if (product.id === id) {
            return product;
        }
    }
}



// export function findById(someArray, id) {
//     return someArray.find(item => item.id === id);
// }