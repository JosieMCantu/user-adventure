export function scorePower(power) {
    if (power <= 0) {
        return 'dead';
    }
    if (power < 50) {
        return 'modest';
    }
    return 'powerful';
}