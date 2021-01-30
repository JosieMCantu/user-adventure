export function findById(array, id) {
    for (let product of array) {
        if (product.id === id) {
            return product;
        }
    }
}
