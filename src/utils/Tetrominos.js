// valid from RESTFUL CODER
const rotate = ({ piece, direction }) => {
    // Transpose rows and columns
    const newPiece = piece.map((_, index) => piece.map((column) => column[index]));

    // Reverse rows to get a rotated matrix
    if (direction > 0) return newPiece.map((row) => row.reverse());

    return newPiece.reverse();
};

export const TETRIS_FIGURES = {
    I: {
        shape: [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ],
        className: `red`,
    },
    J: {
        shape: [
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0],
        ],
        className: `red`,
    },
    L: {
        shape: [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1],
        ],
        className: `red`,
    },
    O: {
        shape: [
            [1, 1],
            [1, 1],
        ],
        className: `red`,
    },
    S: {
        shape: [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0],
        ],
        className: `red`,
    },
    T: {
        shape: [
            [1, 1, 1],
            [0, 1, 0],
            [0, 0, 0],
        ],
        className: `red`,
    },
    Z: {
        shape: [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0],
        ],
        className: `red`,
    },
};
