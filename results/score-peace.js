
export function scorePeace(peace) {
    if (peace <= 0) {
        return 'broken';
    }
    if (peace < 50) {
        return 'confident';
    }
    return 'powerful';
}
