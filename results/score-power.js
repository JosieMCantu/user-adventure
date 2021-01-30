export function scorePower(power) {
    if (power <= 0) {
        return 'broken';
    }
    if (power < 50) {
        return 'confident';
    }
    return 'powerful';
}