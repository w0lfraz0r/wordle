import Letter from "./Letter";

function Board() {
    const numRows = 6;
    const numCols = 5;

    const renderRow = (rowIndex) => {
        return (
            <div className="row" key={rowIndex}>
                {Array.from({ length: numCols }, (_, colIndex) => (
                    <Letter key={colIndex} letterPos={colIndex} attemptVal={rowIndex} />
                ))}
            </div>
        );
    };

    return (
        <div className="board">
            {Array.from({ length: numRows }, (_, index) => renderRow(index))}
        </div>
    );
}

export default Board;
