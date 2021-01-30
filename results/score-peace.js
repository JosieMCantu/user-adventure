
export function scorePeace(peace) {
    if (peace <= 0) {
        return 'dead';
    }
    if (peace < 50) {
        return 'frail';
    }
    return 'healthy';
}
