

export const filterMovesByMethod = (moves, method) => {
    return moves.filter((move) => move.method === method)
}