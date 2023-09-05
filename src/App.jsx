import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import useInterval from "./utils/useInterval";
import { TETRIS_FIGURES } from "./utils/Tetrominos";
import Board from "./components/Board";

const BOARD_COLUMNS = 12;
const BOARD_ROWS = 20;

const App = () => {
    const [tetrisFigure, setTetrisFigure] = useState(TETRIS_FIGURES.J);
    const [figurePosition, setFigurePosition] = useState({ x: 5, y: 0 });
    const [dropTime, setDropTime] = useState(null);

    useInterval(() => {
        setFigurePosition((prevCoord) => ({ ...prevCoord, y: prevCoord.y + 1 }));
    }, dropTime);

    const startGame = () => {
        setDropTime(1000);
    };

    function moveFigure(e) {
        switch (e.key) {
            case "ArrowLeft":
                setFigurePosition((prevCoord) => ({ ...prevCoord, x: prevCoord.x - 1 }));
                break;
            case "ArrowRight":
                setFigurePosition((prevCoord) => ({ ...prevCoord, x: prevCoord.x + 1 }));
                break;
            case "ArrowDown":
                setFigurePosition((prevCoord) => ({ ...prevCoord, y: prevCoord.y + 1 }));
                break;
            case "ArrowUp":
                // setTetrisFigure((prevCoord) => rotate(prevCoord, 1));
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", moveFigure);

        return () => {
            document.removeEventListener("keydown", moveFigure);
        };
    }, []);

    return (
        <div className="App">
            <div role="button" tabIndex="0" className="sc-bdVaJa kJcHFH">
                <div className="sc-bwzfXH lkhlQI">
                    <Board
                        rows={BOARD_ROWS}
                        columns={BOARD_COLUMNS}
                        figurePosition={figurePosition}
                        tetrisFigure={tetrisFigure}
                    />

                    <aside>
                        <div>
                            <div className="sc-ifAKCX drBNgb">Score: 0</div>
                            <div className="sc-ifAKCX drBNgb">rows: 0</div>
                            <div className="sc-ifAKCX drBNgb">Level: 0</div>
                        </div>
                        <button className="sc-EHOje gcMDfl" onClick={startGame}>
                            Start Game
                        </button>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default App;
