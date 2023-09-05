import React from "react";
import BoardCell from "./BoardCell";

const Board = ({ rows, columns, figurePosition, tetrisFigure }) => {
    let builtRows = Array.from({ length: rows }, () => Array.from({ length: columns }, () => ({ occupied: false })));
    tetrisFigure.shape.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell) {
                const _y = y + figurePosition.y;
                const _x = x + figurePosition.x;
                builtRows[_y][_x] = { className: tetrisFigure.className, occupied: false };
            }
        });
    });

    return (
        <div className="sc-htpNat hzezQq">
            {builtRows.map((row, y) => row.map((cell, x) => <BoardCell key={x * row.length + x} cell={cell} />))}
        </div>
    );
};

export default Board;
