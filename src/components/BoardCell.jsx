import React from "react";

const BoardCell = ({ cell }) => {
    return <div className={cell.className ? `${cell.className} board-cell` : "board-cell"}></div>;
};

export default BoardCell;
